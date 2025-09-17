
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import AppLayout from "@/components/app-layout";
import { games, quizzes, Game, Question } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, PartyPopper } from "lucide-react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { doc, updateDoc, increment, arrayUnion, getDoc, addDoc, collection, serverTimestamp, writeBatch } from "firebase/firestore";

type GameState = "selection" | "playing" | "finished";

export default function GamePlayPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const game = games.find((g) => g.id === params.id);

  const [gameState, setGameState] = useState<GameState>("selection");
  const [selectedGrade, setSelectedGrade] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState(0);
  const [isSaving, setIsSaving] = useState(false);

  const handleStartGame = () => {
    if (!selectedGrade || !selectedSubject) {
      toast({
        title: "Selection Incomplete",
        description: "Please select both a grade and a subject.",
        variant: "destructive",
      });
      return;
    }
    const quizKey = `${game?.id}-${selectedSubject.toLowerCase()}-${selectedGrade}`;
    const quiz = quizzes[quizKey];
    if (quiz && quiz.questions.length > 0) {
      setCurrentQuestions(quiz.questions);
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setScore(0);
      setGameState("playing");
    } else {
      toast({
        title: "Game Not Found",
        description: "No questions available for this selection. Please try another.",
        variant: "destructive",
      });
    }
  };
  
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers(prev => ({...prev, [currentQuestionIndex]: answer}))
  }

  const handleSubmit = async () => {
    const answeredQuestions = Object.keys(selectedAnswers).length;
    if (answeredQuestions < currentQuestions.length) {
      const firstUnansweredIndex = currentQuestions.findIndex((_, index) => !selectedAnswers.hasOwnProperty(index));
      toast({
        title: "Quiz Incomplete",
        description: `Please answer all ${currentQuestions.length} questions before submitting.`,
        variant: "destructive",
      });
       if (firstUnansweredIndex !== -1) {
        setCurrentQuestionIndex(firstUnansweredIndex);
      }
      return;
    }

    let finalScore = 0;
    currentQuestions.forEach((q, index) => {
        const selectedAnswer = selectedAnswers[index];
        if(selectedAnswer && selectedAnswer === q.correctAnswer) {
            finalScore++;
        }
    });
    setScore(finalScore);
    
    setIsSaving(true);
    const userEmail = typeof window !== 'undefined' ? localStorage.getItem('userEmail') : null;
    if (userEmail && game && currentQuestions.length > 0) {
      const pointsEarned = Math.round((finalScore / currentQuestions.length) * game.points);
      
      try {
        const userRef = doc(db, "users", userEmail);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();
        const alreadyCompleted = userData?.completedGames?.includes(game.id);

        const batch = writeBatch(db);

        const performanceRef = doc(collection(db, "performanceHistory"));
        batch.set(performanceRef, {
            userId: userEmail,
            gameId: game.id,
            points: pointsEarned,
            score: finalScore,
            totalQuestions: currentQuestions.length,
            timestamp: serverTimestamp(),
        });
        
        const updateData: any = {
            totalPoints: increment(pointsEarned),
        };

        if (!alreadyCompleted) {
            updateData.gamesCompleted = increment(1);
            updateData.completedGames = arrayUnion(game.id);
        }

        batch.update(userRef, updateData);
        await batch.commit();
        
      } catch (error) {
        console.error("Error updating score: ", error);
        toast({
          title: "Error",
          description: "Could not save your score. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsSaving(false);
      }
    } else {
        setIsSaving(false);
    }
    
    setGameState("finished");

    toast({
      title: "Quiz Complete!",
      description: `You scored ${finalScore} out of ${currentQuestions.length}.`,
    });
  }

  const handleReview = () => {
     if (typeof window !== 'undefined' && game) {
        // Store quiz data for review
        const quizReviewData = {
          questions: currentQuestions,
          selectedAnswers,
          gameTitle: game?.title
        };
        localStorage.setItem('quizReviewData', JSON.stringify(quizReviewData));
     }
    router.push(`/games/${params.id}/review`);
  }

  const progressValue = currentQuestions.length > 0 ? ((Object.keys(selectedAnswers).length) / currentQuestions.length) * 100 : 0;
  const allQuestionsAnswered = Object.keys(selectedAnswers).length === currentQuestions.length;


  if (!game) {
    return (
      <AppLayout>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Game not found</h1>
          <p>The game you are looking for does not exist.</p>
          <Button asChild className="mt-4">
            <Link href="/games">Back to Games</Link>
          </Button>
        </div>
      </AppLayout>
    );
  }
  
  const currentQuestion = currentQuestions[currentQuestionIndex];

  return (
    <AppLayout>
      <div className="flex justify-center items-start py-8">
        <Card className="w-full max-w-2xl bg-card/80 backdrop-blur-sm border-border/50 shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">{game.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {gameState === "selection" && (
              <div className="space-y-6">
                <CardDescription>
                  Select your grade and subject to begin.
                </CardDescription>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="grade-select" className="mb-2 block">Grade Level</Label>
                    <Select onValueChange={setSelectedGrade} value={selectedGrade}>
                      <SelectTrigger id="grade-select" className="bg-background/70">
                        <SelectValue placeholder="Select a grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: game.gradeLevels[1] - game.gradeLevels[0] + 1 }, (_, i) => game.gradeLevels[0] + i).map((grade) => (
                          <SelectItem key={grade} value={String(grade)}>
                            Grade {grade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="subject-select" className="mb-2 block">Subject</Label>
                    <Select onValueChange={setSelectedSubject} value={selectedSubject}>
                      <SelectTrigger id="subject-select" className="bg-background/70">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {game.subjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button onClick={handleStartGame} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6">
                  Start Game
                </Button>
              </div>
            )}
            {gameState === "playing" && currentQuestion && (
              <div className="space-y-6">
                 <Progress value={progressValue} className="w-full h-2 bg-secondary/50" />
                 <p className="text-sm text-muted-foreground font-medium">Question {currentQuestionIndex + 1} of {currentQuestions.length} ({Object.keys(selectedAnswers).length} answered)</p>
                <h3 className="text-xl font-semibold leading-snug">{currentQuestion.text}</h3>
                <RadioGroup onValueChange={handleAnswerSelect} value={selectedAnswers[currentQuestionIndex]} className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-3 rounded-lg border border-border/50 p-4 transition-colors hover:bg-accent/50 has-[[data-state=checked]]:bg-accent/80 has-[[data-state=checked]]:border-primary/50">
                            <RadioGroupItem value={option} id={`option-${index}`} />
                            <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-base">
                                {option}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
              </div>
            )}
            {gameState === "finished" && (
                 <div className="text-center space-y-4 flex flex-col items-center p-8">
                    <PartyPopper className="h-20 w-20 text-yellow-400" strokeWidth={1.5} />
                    <h2 className="text-3xl font-bold font-headline">Congratulations!</h2>
                    <p className="text-muted-foreground text-lg">You've completed the quiz.</p>
                    <div className="bg-accent/30 border border-accent/50 rounded-lg p-6 my-4">
                      <p className="text-sm text-muted-foreground">Your Score</p>
                      <p className="text-5xl font-bold text-foreground">{score} / {currentQuestions.length}</p>
                    </div>
                    <p className="text-lg font-medium">You earned <span className="text-primary font-bold">{game && currentQuestions.length > 0 ? Math.round((score / currentQuestions.length) * game.points) : 0}</span> points!</p>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Button variant="outline" onClick={() => {
                          setGameState("selection");
                          setCurrentQuestionIndex(0);
                          setSelectedAnswers({});
                          setScore(0);
                        }}>Play Again</Button>
                         <Button variant="secondary" onClick={handleReview}>Review Answers</Button>
                        <Button asChild>
                            <Link href="/games">Choose Another Game</Link>
                        </Button>
                    </div>
                </div>
            )}
          </CardContent>
          {gameState === 'playing' && (
            <CardFooter className="flex justify-between border-t border-border/50 pt-6">
                <Button variant="outline" onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))} disabled={currentQuestionIndex === 0}>
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back
                </Button>
                 {currentQuestionIndex < currentQuestions.length - 1 ? (
                     <Button onClick={() => setCurrentQuestionIndex(prev => Math.min(currentQuestions.length - 1, prev + 1))}>
                        Next <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                 ) : (
                    <Button onClick={handleSubmit} className="bg-yellow-500 text-black hover:bg-yellow-500/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed" disabled={!allQuestionsAnswered || isSaving}>
                        {isSaving ? "Saving..." : "Submit"}
                    </Button>
                 )}
            </CardFooter>
          )}
        </Card>
      </div>
    </AppLayout>
  );
}
