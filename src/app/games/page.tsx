
'use client';

import { useState, useEffect } from 'react';
import AppLayout from '@/components/app-layout';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { games, Game } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Calculator,
  CheckCircle2,
  FlaskConical,
  Play,
  RotateCcw,
  Star,
  TestTube,
  Timer,
  Trophy,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';


const getSubjectIcon = (subject: string) => {
  const iconProps = { className: 'h-10 w-10 text-white' };
  switch (subject.toLowerCase()) {
    case 'math':
      return <Calculator {...iconProps} />;
    case 'science':
      return <FlaskConical {...iconProps} />;
    case 'computer science':
      return <BrainCircuit {...iconProps} />;
    case 'logic':
      return <BrainCircuit {...iconProps} />;
    case 'stem':
      return <TestTube {...iconProps} />;
    default:
      return <BookOpen {...iconProps} />;
  }
};

const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
        case 'beginner':
            return 'bg-green-500/20 text-green-400 border-green-500/40';
        case 'intermediate':
            return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40';
        case 'advanced':
            return 'bg-red-500/20 text-red-400 border-red-500/40';
        default:
            return 'bg-gray-500/20 text-gray-400 border-gray-500/40';
    }
}

const GameCard = ({ game, completed }: { game: Game, completed?: boolean }) => {
  const isMathQuiz = game.id === 'math-quiz-challenge';
  const gameImage = placeholderImages.find(img => img.id === game.imageId);

  return (
    <Card className={cn(
      "flex flex-col border-border/50 transition-all duration-300 relative group overflow-hidden",
      completed ? "bg-card/20" : "bg-card/50"
    )}>
     
      {completed && (
        <Badge variant="secondary" className="absolute top-3 right-3 bg-green-500/20 text-green-400 border-green-500/40 gap-1 z-20">
            <CheckCircle2 className="h-3 w-3" />
            Completed
        </Badge>
      )}
      <CardContent className="p-6 flex-grow flex flex-col z-20">
        <div className="flex items-center gap-4 mb-4">
            <div className={cn("p-3 rounded-lg bg-primary/20", isMathQuiz && "bg-white/20")}>
                {getSubjectIcon(game.subjects[0])}
            </div>
        </div>
        <h3 className="font-headline text-xl font-bold mb-2">{game.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant={isMathQuiz ? "default" : "secondary"}>{game.subjects[0]}</Badge>
            <Badge variant={isMathQuiz ? "default" : "secondary"}>Grade {game.gradeLevels.join('-')}</Badge>
            <Badge className={cn("border", getDifficultyColor(game.difficulty))}>{game.difficulty}</Badge>
        </div>
        <p className={cn("text-muted-foreground text-sm flex-grow mb-4", isMathQuiz && "text-gray-300")}>{game.description}</p>
        <div className={cn("flex justify-between items-center text-sm text-muted-foreground mb-6", isMathQuiz && "text-gray-300")}>
            <div className="flex items-center gap-2">
                <Timer className="h-4 w-4" />
                <span>{game.duration} min</span>
            </div>
             <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>{game.points} pts</span>
            </div>
        </div>

        <Button asChild className="w-full mt-auto bg-gradient-to-r from-primary/50 to-primary text-primary-foreground transition-transform duration-200 active:scale-95">
          <Link href={`/games/${game.id}`}>
            {completed ? 'Play Again' : 'Start Game'} <Play className="ml-2 h-4 w-4 fill-primary-foreground" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};


export default function GamesPage() {
  const allSubjects = ['All', ...new Set(games.flatMap((game) => game.subjects))];
  
  const [activeSubject, setActiveSubject] = useState('All');
  const [totalPoints, setTotalPoints] = useState(0);
  const [gamesCompleted, setGamesCompleted] = useState(0);
  const [completedGamesList, setCompletedGamesList] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      const userRef = doc(db, 'users', userEmail);
      
      const unsubscribe = onSnapshot(userRef, (doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          setTotalPoints(userData.totalPoints || 0);
          setGamesCompleted(userData.gamesCompleted || 0);
          setCompletedGamesList(userData.completedGames || []);
        }
      });
      
      // Cleanup the listener when the component unmounts
      return () => unsubscribe();
    }
  }, []);

  const handleResetProgress = async () => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        try {
            const userRef = doc(db, 'users', userEmail);
            await updateDoc(userRef, {
                totalPoints: 0,
                gamesCompleted: 0,
                completedGames: [],
            });
            // State will update automatically via the onSnapshot listener
            toast({ title: "Progress Reset", description: "Your points and completed games have been reset." });
        } catch (error) {
            console.error("Error resetting progress:", error);
            toast({ title: "Error", description: "Could not reset your progress.", variant: "destructive" });
        }
    }
  };

  const filteredGames = games.filter(game => {
      const subjectMatch = activeSubject === 'All' || game.subjects.includes(activeSubject);
      return subjectMatch;
  });

  return (
    <AppLayout>
      <div className="space-y-8">
        <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
                <Card className="bg-card/50 border-border/50 flex-1 flex items-center justify-center p-6 gap-4">
                    <Trophy className="h-10 w-10 text-yellow-400" />
                    <div>
                        <p className="text-3xl font-bold">{totalPoints}</p>
                        <p className="text-muted-foreground">Total Points</p>
                    </div>
                </Card>
                <Card className="bg-card/50 border-border/50 flex-1 flex items-center justify-center p-6 gap-4">
                    <Star className="h-10 w-10 text-purple-400" />
                     <div>
                        <p className="text-3xl font-bold">{gamesCompleted}</p>
                        <p className="text-muted-foreground">Games Completed</p>
                    </div>
                </Card>
            </div>
            <div className="flex justify-end">
                <Button variant="outline" onClick={handleResetProgress}>
                    <RotateCcw className="mr-2 h-4 w-4" /> Reset Progress
                </Button>
            </div>
        </div>

        <Card className="p-6 bg-card/50 border-border/50">
            <h2 className="text-xl font-bold font-headline mb-4">Filter Games</h2>
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">Subject</h3>
                    <div className="flex flex-wrap gap-2">
                        {allSubjects.map(subject => (
                            <Button key={subject} variant={activeSubject === subject ? 'default' : 'secondary'} size="sm" onClick={() => setActiveSubject(subject)}>
                                {subject}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} completed={completedGamesList.includes(game.id)} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
