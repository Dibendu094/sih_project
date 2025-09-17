"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
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

type GameState = "selection" | "playing" | "finished";

export default function GamePlayPage() {
  const params = useParams();
  const { toast } = useToast();
  const game = games.find((g) => g.id === params.id);

  const [gameState, setGameState] = useState<GameState>("selection");
  const [selectedGrade, setSelectedGrade] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState(0);

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
    if (quiz) {
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

  const handleSubmit = () => {
    let finalScore = 0;
    currentQuestions.forEach((q, index) => {
        if(selectedAnswers[index] === q.correctAnswer) {
            finalScore++;
        }
    });
    setScore(finalScore);
    setGameState("finished");
    toast({
      title: "Quiz Complete!",
      description: `You scored ${finalScore} out of ${currentQuestions.length}.`,
    });
  }

  const progressValue =
    ((currentQuestionIndex + 1) / currentQuestions.length) * 100;

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
      <div className="flex justify-center items-start">
        <Card className="w-full max-w-2xl">
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
                    <Label htmlFor="grade-select">Grade Level</Label>
                    <Select onValueChange={setSelectedGrade} value={selectedGrade}>
                      <SelectTrigger id="grade-select">
                        <SelectValue placeholder="Select a grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {game.gradeLevels.map((grade) => (
                          <SelectItem key={grade} value={String(grade)}>
                            Grade {grade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="subject-select">Subject</Label>
                    <Select onValueChange={setSelectedSubject} value={selectedSubject}>
                      <SelectTrigger id="subject-select">
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
                <Button onClick={handleStartGame} className="w-full">
                  Start Game
                </Button>
              </div>
            )}
            {gameState === "playing" && currentQuestion && (
              <div className="space-y-6">
                 <Progress value={progressValue} className="w-full" />
                 <p className="text-sm text-muted-foreground">Question {currentQuestionIndex + 1} of {currentQuestions.length}</p>
                <h3 className="text-xl font-semibold">{currentQuestion.text}</h3>
                <RadioGroup onValueChange={handleAnswerSelect} value={selectedAnswers[currentQuestionIndex]}>
                    {currentQuestion.options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-2 rounded-md border p-4 hover:bg-accent/50 has-[[data-state=checked]]:bg-accent/80">
                            <RadioGroupItem value={option} id={`option-${index}`} />
                            <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">{option}</Label>
                        </div>
                    ))}
                </RadioGroup>
              </div>
            )}
            {gameState === "finished" && (
                 <div className="text-center space-y-4 flex flex-col items-center">
                    <PartyPopper className="h-16 w-16 text-accent" />
                    <h2 className="text-2xl font-bold font-headline">Congratulations!</h2>
                    <p className="text-muted-foreground">You've completed the quiz.</p>
                    <p className="text-4xl font-bold">{score} / {currentQuestions.length}</p>
                    <p className="text-lg">You earned {score * 100} points!</p>
                    <div className="flex gap-4">
                        <Button variant="outline" onClick={() => setGameState("selection")}>Play Again</Button>
                        <Button asChild>
                            <Link href="/games">Choose Another Game</Link>
                        </Button>
                    </div>
                </div>
            )}
          </CardContent>
          {gameState === 'playing' && (
            <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))} disabled={currentQuestionIndex === 0}>
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back
                </Button>
                 {currentQuestionIndex < currentQuestions.length - 1 ? (
                     <Button onClick={() => setCurrentQuestionIndex(prev => Math.min(currentQuestions.length - 1, prev + 1))}>
                        Next <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                 ) : (
                    <Button onClick={handleSubmit} className="bg-accent text-accent-foreground hover:bg-accent/90">Submit</Button>
                 )}
            </CardFooter>
          )}
        </Card>
      </div>
    </AppLayout>
  );
}
