"use client";

import React from "react";
import AppLayout from "@/components/app-layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Star, TrendingUp, GraduationCap, Trophy } from "lucide-react";

const performanceData = [
  { week: "1", points: 50 },
  { week: "2", points: 75 },
  { week: "3", points: 88 },
  { week: "4", points: 100 },
];

const leaderboardData = [
  {
    rank: 1,
    studentName: "Aman Gupta",
    class: 11,
    totalPoints: 200,
    badges: 7,
  },
  {
    rank: 2,
    studentName: "Rahul Kumar",
    class: 10,
    totalPoints: 150,
    badges: 5,
  },
  {
    rank: 3,
    studentName: "Anjali Singh",
    class: 9,
    totalPoints: 120,
    badges: 4,
  },
];

export default function DashboardPage() {
  const [username, setUsername] = React.useState("Rahul");
  const [totalPoints, setTotalPoints] = React.useState(0);

  React.useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
    
    const handleStorageChange = () => {
        const storedPoints = localStorage.getItem('totalPoints');
        if (storedPoints) {
            setTotalPoints(parseInt(storedPoints, 10));
        }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Initial fetch
    handleStorageChange();

    // This is a workaround to force re-render when navigating back to the page
    const interval = setInterval(handleStorageChange, 1000);

    return () => {
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(interval);
    };
  }, []);
  
  const currentUser = leaderboardData.find(u => u.studentName.toLowerCase().includes(username.toLowerCase()));

  const updatedLeaderboard = leaderboardData.map(student => {
    if (currentUser && student.studentName === currentUser.studentName) {
      return { ...student, totalPoints: totalPoints };
    }
    return student;
  }).sort((a, b) => b.totalPoints - a.totalPoints)
    .map((student, index) => ({ ...student, rank: index + 1 }));

  const currentUserRank = updatedLeaderboard.find(u => u.studentName.toLowerCase().includes(username.toLowerCase()))?.rank || 2;
  const currentUserBadges = leaderboardData.find(u => u.studentName.toLowerCase().includes(username.toLowerCase()))?.badges || 5;

  return (
    <AppLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight flex items-center">
            Welcome back, {username}!
            <GraduationCap className="ml-3 h-8 w-8" />
          </h1>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Points</CardTitle>
              <Trophy className="h-5 w-5 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{totalPoints}</div>
            </CardContent>
          </Card>
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Badges</CardTitle>
              <Star className="h-5 w-5 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{currentUserBadges}</div>
            </CardContent>
          </Card>
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rank</CardTitle>
              <TrendingUp className="h-5 w-5 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">#{currentUserRank}</div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-xl">
            <CardHeader>
              <CardTitle>Performance Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.5)" />
                  <XAxis
                    dataKey="week"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    label={{ value: "Week", position: "insideBottom", offset: -5 }}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    domain={[0, 120]}
                  />
                  <Tooltip
                    cursor={{ fill: "hsl(var(--secondary) / 0.3)" }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background/90 backdrop-blur-sm p-2 shadow-lg">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Points
                                </span>
                                <span className="font-bold text-foreground">
                                  {payload[0].value}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      }

                      return null;
                    }}
                  />
                  <Bar dataKey="points" fill="url(#colorPoints)" radius={[4, 4, 0, 0]}>
                     <LabelList dataKey="points" position="top" className="fill-foreground" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-xl">
            <CardHeader>
              <CardTitle>Student Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead className="text-center">Class</TableHead>
                    <TableHead className="text-center">Total Points</TableHead>
                    <TableHead className="text-center">Badges</TableHead>
                    <TableHead className="text-right">Rank</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {updatedLeaderboard.map((student) => (
                    <TableRow key={student.rank} className={student.studentName.toLowerCase().includes(username.toLowerCase()) ? 'bg-primary/20' : ''}>
                      <TableCell className="font-medium">
                        {student.studentName}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.class}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.totalPoints}
                      </TableCell>
                      <TableCell className="text-center">{student.badges}</TableCell>
                      <TableCell className="text-right font-bold">
                        #{student.rank}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
