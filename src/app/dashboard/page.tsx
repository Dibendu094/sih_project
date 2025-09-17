
"use client";

import React, { useEffect, useState, useCallback } from "react";
import AppLayout from "@/components/app-layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
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
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query, orderBy, where, doc } from "firebase/firestore";
import { format } from "date-fns";

interface LeaderboardStudent {
  id: string;
  studentName: string;
  class: number;
  totalPoints: number;
  badges: number;
  rank?: number;
}

interface PerformanceData {
  day: string;
  points: number;
}

export default function DashboardPage() {
  const [username, setUsername] = useState("User");
  const [currentUserData, setCurrentUserData] = useState<LeaderboardStudent | null>(null);
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardStudent[]>([]);
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingChart, setLoadingChart] = useState(true);

  const processPerformanceData = (history: { points: number, timestamp: { toDate: () => Date } | null }[]) => {
      const dailyPoints: { [key: string]: number } = {};
      
      history.forEach(entry => {
          if (entry.timestamp) {
            const date = entry.timestamp.toDate();
            const day = format(date, "MMM d"); // Format as 'Jan 1', 'Jan 2'
            if (!dailyPoints[day]) {
                dailyPoints[day] = 0;
            }
            dailyPoints[day] += entry.points;
          }
      });

      const chartData = Object.entries(dailyPoints).map(([day, points]) => ({
          day,
          points,
      }));
      
      // We don't need to sort as object keys insertion order is maintained for non-numeric keys.
      // If we used a different format that could be interpreted as numeric, sorting would be needed.
      return chartData;
  };


  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    
    if (userEmail) {
      setUsername(localStorage.getItem("username") || "User");
      
      // Fetch current user's data
      const userRef = doc(db, "users", userEmail);
      const unsubscribeUser = onSnapshot(userRef, (doc) => {
          if(doc.exists()){
              const data = doc.data();
              setCurrentUserData({
                  id: doc.id,
                  studentName: data.username,
                  class: data.studentClass,
                  totalPoints: data.totalPoints,
                  badges: data.badges || 0,
              });
          }
      });
      
      // Fetch performance history for chart with real-time updates
      setLoadingChart(true);
      const historyQuery = query(collection(db, "performanceHistory"), where("userId", "==", userEmail), orderBy("timestamp", "asc"));
      const unsubscribePerformance = onSnapshot(historyQuery, (querySnapshot) => {
        const history: { points: number, timestamp: { toDate: () => Date } | null }[] = [];
        querySnapshot.forEach((doc) => {
            history.push(doc.data() as { points: number, timestamp: { toDate: () => Date } | null });
        });
        setPerformanceData(processPerformanceData(history));
        setLoadingChart(false);
      }, (error) => {
        console.error("Error fetching performance history: ", error);
        setLoadingChart(false);
      });
      
      // Fetch leaderboard data
      const usersQuery = query(collection(db, "users"), orderBy("totalPoints", "desc"));
      const unsubscribeLeaderboard = onSnapshot(usersQuery, (snapshot) => {
          const users: LeaderboardStudent[] = [];
          let rank = 1;
          snapshot.forEach(doc => {
              const data = doc.data();
              const userData = {
                  id: doc.id,
                  studentName: data.username,
                  class: data.studentClass,
                  totalPoints: data.totalPoints,
                  badges: data.badges || 0,
                  rank: rank++,
              };
              users.push(userData);
              if(userEmail === doc.id) {
                  setCurrentUserData(prev => prev ? {...prev, rank: userData.rank} : null);
              }
          });
          setLeaderboardData(users.slice(0, 10));
          setLoading(false);
      });

      return () => {
          unsubscribeUser();
          unsubscribeLeaderboard();
          unsubscribePerformance();
      };
    } else {
      setLoading(false);
      setLoadingChart(false);
    }
  }, []);

  const totalPoints = currentUserData?.totalPoints || 0;
  const currentUserBadges = currentUserData?.badges || 0;
  const currentUserRank = currentUserData?.rank || 0;

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
              <div className="text-4xl font-bold">#{currentUserRank > 0 ? currentUserRank : '...'}</div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-xl">
            <CardHeader>
              <CardTitle>Daily Performance</CardTitle>
            </CardHeader>
            <CardContent>
                {loadingChart ? (
                     <div className="flex justify-center items-center h-[300px]">Loading chart...</div>
                 ) : performanceData.length > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={performanceData}>
                        <defs>
                            <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.5)" />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={10}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={10}
                            domain={[0, 'dataMax + 20']}
                        />
                        <Tooltip
                            cursor={{ fill: "hsl(var(--secondary) / 0.3)" }}
                            content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                return (
                                <div className="rounded-lg border bg-background/90 backdrop-blur-sm p-2 shadow-lg">
                                    <div className="font-bold text-foreground">{payload[0].payload.day}</div>
                                    <div className="text-sm text-muted-foreground">
                                        Points: <span className="font-bold text-foreground">{payload[0].value}</span>
                                    </div>
                                </div>
                                );
                            }
                            return null;
                            }}
                        />
                        <Area type="monotone" dataKey="points" stroke="hsl(var(--primary))" fill="url(#colorPoints)" strokeWidth={2} />
                        </AreaChart>
                    </ResponsiveContainer>
                 ) : (
                    <div className="flex justify-center items-center h-[300px] text-muted-foreground">
                        Play some games to see your performance chart!
                    </div>
                 )}
            </CardContent>
          </Card>
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-xl">
            <CardHeader>
              <CardTitle>Top 10 Students</CardTitle>
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
                  {loading ? (
                     <TableRow><TableCell colSpan={5} className="text-center">Loading leaderboard...</TableCell></TableRow>
                  ) : leaderboardData.map((student) => (
                    <TableRow key={student.id} className={student.id === currentUserData?.id ? 'bg-primary/20' : ''}>
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

    

    

