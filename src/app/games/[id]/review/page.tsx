
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import AppLayout from "@/components/app-layout";
import { Question } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface QuizReviewData {
  questions: Question[];
  selectedAnswers: { [key: number]: string };
  gameTitle?: string;
}

export default function ReviewPage() {
  const router = useRouter();
  const params = useParams();
  const [reviewData, setReviewData] = useState<QuizReviewData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("quizReviewData");
      if (data) {
        setReviewData(JSON.parse(data));
      }
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <AppLayout>
        <div className="text-center">Loading review...</div>
      </AppLayout>
    );
  }

  if (!reviewData) {
    return (
      <AppLayout>
        <div className="text-center">
          <h1 className="text-2xl font-bold">No review data found</h1>
          <p>Complete a game to see your results here.</p>
          <Button asChild className="mt-4">
            <Link href="/games">Back to Games</Link>
          </Button>
        </div>
      </AppLayout>
    );
  }

  const { questions, selectedAnswers, gameTitle } = reviewData;

  return (
    <AppLayout>
      <div className="space-y-8 max-w-4xl mx-auto py-8">
        <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold font-headline">Review: {gameTitle}</h1>
            <Button asChild variant="outline">
                <Link href={`/games/${params.id}`}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Game
                </Link>
            </Button>
        </div>

        <div className="space-y-6">
          {questions.map((question, index) => {
            const selectedAnswer = selectedAnswers[index];
            const isCorrect = selectedAnswer === question.correctAnswer;

            return (
              <Card key={index} className="bg-card/80 border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    Question {index + 1}
                  </CardTitle>
                  <CardDescription className="pt-2 text-base text-foreground">{question.text}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {question.options.map((option) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrectAnswer = question.correctAnswer === option;

                    return (
                      <div
                        key={option}
                        className={cn(
                          "flex items-center space-x-3 rounded-lg border p-4",
                           {
                            "border-green-500 bg-green-500/10": isCorrectAnswer,
                            "border-red-500 bg-red-500/10": isSelected && !isCorrect,
                            "border-border/50": !isCorrectAnswer && !isSelected,
                           }
                        )}
                      >
                         {isCorrectAnswer && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                         {isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-500" />}
                         {!isSelected && !isCorrectAnswer && <div className="h-5 w-5" />}
                        
                        <label className="flex-1 cursor-default text-base">{option}</label>
                      </div>
                    );
                  })}
                </CardContent>
                 <CardFooter className="text-sm">
                    {isCorrect ? (
                        <p className="text-green-500 font-semibold flex items-center gap-2">
                           <CheckCircle2 className="h-4 w-4" /> Your answer was correct!
                        </p>
                    ) : (
                        <p className="text-red-500 font-semibold flex items-center gap-2">
                            <XCircle className="h-4 w-4" /> Your answer was incorrect. The correct answer was "{question.correctAnswer}".
                        </p>
                    )}
                 </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
