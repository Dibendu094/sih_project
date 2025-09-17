import AppLayout from "@/components/app-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { games, Game } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, BrainCircuit, FlaskConical, TestTube } from "lucide-react";

const getSubjectIcon = (subject: string) => {
    switch (subject.toLowerCase()) {
        case 'math':
            return <BookOpen className="h-6 w-6 text-primary" />;
        case 'science':
            return <FlaskConical className="h-6 w-6 text-primary" />;
        case 'computer science':
            return <BrainCircuit className="h-6 w-6 text-primary" />;
        case 'logic':
            return <BrainCircuit className="h-6 w-6 text-primary" />;
        case 'stem':
            return <TestTube className="h-6 w-6 text-primary" />;
        default:
            return <TestTube className="h-6 w-6 text-primary" />;
    }
}

const GameCard = ({ game }: { game: Game }) => {
  const gameImage = PlaceHolderImages.find((img) => img.id === game.imageId);
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 w-full">
        {gameImage && (
          <Image
            src={gameImage.imageUrl}
            alt={game.title}
            fill
            className="object-cover"
            data-ai-hint={gameImage.imageHint}
          />
        )}
        <div className="absolute bottom-2 right-2 flex flex-wrap gap-1">
             <Badge variant="secondary" className="text-sm">
                Grades: {game.gradeLevels.join(', ')}
              </Badge>
          </div>
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{game.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{game.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/games/${game.id}`}>
            Play Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function GamesPage() {
  const subjects = [...new Set(games.flatMap((game) => game.subjects))];
  const gamesBySubject = subjects.map(subject => ({
      subject,
      games: games.filter(game => game.subjects.includes(subject))
  }));

  return (
    <AppLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-headline tracking-tight">
            Game Library
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Explore our collection of fun and educational games, designed to make learning an adventure.
          </p>
        </div>
        
        {gamesBySubject.map(({ subject, games }) => (
            <div key={subject} className="space-y-6">
                <div className="flex items-center gap-4">
                    {getSubjectIcon(subject)}
                    <h2 className="text-2xl font-bold font-headline tracking-tight">{subject} Games</h2>
                    <div className="flex-grow border-t border-border"></div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {games.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            </div>
        ))}
      </div>
    </AppLayout>
  );
}
