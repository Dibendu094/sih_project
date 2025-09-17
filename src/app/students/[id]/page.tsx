import AppLayout from "@/components/app-layout";
import { notFound } from "next/navigation";
import { students } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Trophy, BarChart2, Star } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"


export default function StudentProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const student = students.find((s) => s.id === params.id);

  if (!student) {
    notFound();
  }

  const studentAvatar = PlaceHolderImages.find(
    (p) => p.id === student.avatar
  );
  
  const performanceData = Object.entries(student.performance).map(([subject, score]) => ({
    name: subject,
    score: score,
  }));

  const performanceChartConfig = {
    score: {
      label: "Score",
      color: "hsl(var(--chart-2))",
    },
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
           <Button asChild variant="outline" size="sm" className="mb-4">
               <Link href="/students">
                   <ArrowLeft className="mr-2 h-4 w-4"/>
                   Back to Student List
               </Link>
           </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader className="items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                {studentAvatar && (
                  <AvatarImage
                    src={studentAvatar.imageUrl}
                    alt={student.name}
                    data-ai-hint={studentAvatar.imageHint}
                  />
                )}
                <AvatarFallback className="text-3xl">
                  {student.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="font-headline text-2xl">{student.name}</CardTitle>
              <CardDescription>Grade {student.grade}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-primary">
                {student.points.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">Total Points</p>
            </CardContent>
          </Card>
          
          <div className="md:col-span-2 grid gap-6">
              <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Trophy className="text-accent" /> Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                    {student.achievements.map((ach) => (
                      <Badge key={ach} variant="default" className="text-sm py-1 px-3">
                        <Star className="mr-1 h-4 w-4"/>
                        {ach}
                      </Badge>
                    ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BarChart2 className="text-primary"/> Subject Performance</CardTitle>
                    <CardDescription>Scores out of 100 for different subjects.</CardDescription>
                </CardHeader>
                <CardContent>
                     <ChartContainer config={performanceChartConfig} className="h-[200px] w-full">
                        <BarChart data={performanceData} accessibilityLayer>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="name"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={10}
                                domain={[0, 100]}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="line" />}
                            />
                             <Bar dataKey="score" fill="var(--color-score)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
