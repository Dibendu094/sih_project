"use client";

import React, { useState, useTransition } from "react";
import AppLayout from "@/components/app-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { students, games } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  getPersonalizedRecommendations,
  PersonalizedRecommendationsOutput,
} from "@/ai/flows/personalized-learning-paths";
import {
  generateTeacherInsights,
  TeacherInsightsOutput,
} from "@/ai/flows/teacher-insights-from-performance-data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Bot, BarChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

const chartData = [
  { month: "January", classAverage: 650 },
  { month: "February", classAverage: 720 },
  { month: "March", classAverage: 810 },
  { month: "April", classAverage: 880 },
  { month: "May", classAverage: 950 },
];

const chartConfig = {
  classAverage: {
    label: "Class Average Points",
    color: "hsl(var(--chart-1))",
  },
};

export default function DashboardPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  // State for Teacher Insights
  const [insights, setInsights] = useState<TeacherInsightsOutput | null>(null);
  const [isInsightsLoading, setIsInsightsLoading] = useState(false);

  // State for Personalized Recommendations
  const [selectedStudentId, setSelectedStudentId] = useState<string>(
    students[0].id
  );
  const [recommendations, setRecommendations] =
    useState<PersonalizedRecommendationsOutput | null>(null);
  const [isRecommendationsLoading, setIsRecommendationsLoading] =
    useState(false);

  const handleGenerateInsights = () => {
    setIsInsightsLoading(true);
    startTransition(async () => {
      try {
        const performanceDataSummary = students
          .map(
            (s) =>
              `${s.name} (Grade ${
                s.grade
              }): Math-${s.performance.Math}, Science-${
                s.performance.Science || "N/A"
              }`
          )
          .join("; ");
        const result = await generateTeacherInsights({
          studentPerformanceData: performanceDataSummary,
        });
        setInsights(result);
      } catch (error) {
        console.error("Error generating insights:", error);
        toast({
          title: "Error",
          description: "Could not generate teacher insights.",
          variant: "destructive",
        });
      } finally {
        setIsInsightsLoading(false);
      }
    });
  };

  const handleGenerateRecommendations = () => {
    setIsRecommendationsLoading(true);
    startTransition(async () => {
      const student = students.find((s) => s.id === selectedStudentId);
      if (!student) {
        toast({ title: "Error", description: "Student not found.", variant: "destructive" });
        setIsRecommendationsLoading(false);
        return;
      }
      try {
        const result = await getPersonalizedRecommendations({
          studentId: student.id,
          gradeLevel: student.grade,
          completedGames: [],
          performanceData: student.performance,
        });
        setRecommendations(result);
      } catch (error) {
        console.error("Error generating recommendations:", error);
        toast({
          title: "Error",
          description: "Could not generate recommendations.",
          variant: "destructive",
        });
      } finally {
        setIsRecommendationsLoading(false);
      }
    });
  };

  return (
    <AppLayout>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <BarChart className="h-6 w-6" />
              Class Progress
            </CardTitle>
            <CardDescription>
              Average points accumulated by the class over the last 5 months.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <AreaChart data={chartData} margin={{ left: -20, right: 10, top:10, bottom: 0}}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                 <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <defs>
                    <linearGradient id="fillClassAverage" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-classAverage)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--color-classAverage)" stopOpacity={0.1}/>
                    </linearGradient>
                </defs>
                <Area
                  dataKey="classAverage"
                  type="natural"
                  fill="url(#fillClassAverage)"
                  stroke="var(--color-classAverage)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-accent" />
              AI Teacher Insights
            </CardTitle>
            <CardDescription>
              Generate AI-powered insights about class performance.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isInsightsLoading ? (
               <div className="space-y-2">
                 <Skeleton className="h-4 w-full" />
                 <Skeleton className="h-4 w-full" />
                 <Skeleton className="h-4 w-3/4" />
               </div>
            ) : insights ? (
              <p className="text-sm text-foreground">{insights.insights}</p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Click the button to analyze student data and get actionable insights.
              </p>
            )}
          </CardContent>
          <CardContent>
            <Button onClick={handleGenerateInsights} disabled={isInsightsLoading || isPending}>
              {isInsightsLoading ? "Analyzing..." : "Generate Insights"}
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              Personalized Learning Paths
            </CardTitle>
            <CardDescription>
              Generate AI-powered game and material recommendations for a
              student.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Select
                value={selectedStudentId}
                onValueChange={setSelectedStudentId}
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select a student" />
                </SelectTrigger>
                <SelectContent>
                  {students.map((student) => (
                    <SelectItem key={student.id} value={student.id}>
                      {student.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={handleGenerateRecommendations} disabled={isRecommendationsLoading || isPending}>
                {isRecommendationsLoading ? "Generating..." : "Get Recommendations"}
              </Button>
            </div>
             {isRecommendationsLoading ? (
               <div className="space-y-4">
                 <Skeleton className="h-8 w-1/2" />
                 <div className="grid gap-4 md:grid-cols-2">
                   <Skeleton className="h-24 w-full" />
                   <Skeleton className="h-24 w-full" />
                 </div>
               </div>
            ) : recommendations && (
              <div className="space-y-4 rounded-lg border bg-secondary/30 p-4">
                <h3 className="font-semibold">
                  Recommendations for{" "}
                  {students.find((s) => s.id === selectedStudentId)?.name}:
                </h3>
                <p className="text-sm italic text-muted-foreground">
                  {recommendations.reasoning}
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-medium">Recommended Games</h4>
                    <ul className="list-inside list-disc space-y-1 text-sm">
                      {recommendations.recommendedGames.map((game) => (
                        <li key={game}>{game}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-medium">
                      Recommended Learning Materials
                    </h4>
                    <ul className="list-inside list-disc space-y-1 text-sm">
                      {recommendations.recommendedMaterials.map((material) => (
                        <li key={material}>{material}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Recent Activity</CardTitle>
            <CardDescription>
              An overview of recent student achievements and scores.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Points</TableHead>
                  <TableHead>Top Subject</TableHead>
                  <TableHead>Recent Achievement</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => {
                    const topSubject = Object.entries(student.performance).reduce((top, current) => current[1] > top[1] ? current : top);
                    return (
                        <TableRow key={student.id}>
                            <TableCell className="font-medium">{student.name}</TableCell>
                            <TableCell>{student.grade}</TableCell>
                            <TableCell>{student.points}</TableCell>
                            <TableCell>{topSubject[0]}</TableCell>
                            <TableCell>
                                <Badge variant="secondary">{student.achievements[student.achievements.length - 1]}</Badge>
                            </TableCell>
                        </TableRow>
                    )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
