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
import { games } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function GamesPage() {
  return (
    <AppLayout>
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold font-headline tracking-tight">
            Game Library
          </h1>
          <p className="text-muted-foreground">
            Explore our collection of fun and educational games.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => {
            const gameImage = PlaceHolderImages.find(
              (img) => img.id === game.imageId
            );
            return (
              <Card key={game.id} className="flex flex-col overflow-hidden">
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
                </div>
                <CardHeader>
                  <CardTitle className="font-headline">{game.title}</CardTitle>
                  <CardDescription>{game.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {game.subjects.map((subject) => (
                      <Badge key={subject} variant="secondary">
                        {subject}
                      </Badge>
                    ))}
                     <Badge variant="outline">
                        Grades: {game.gradeLevels.join(', ')}
                      </Badge>
                  </div>
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
          })}
        </div>
      </div>
    </AppLayout>
  );
}
