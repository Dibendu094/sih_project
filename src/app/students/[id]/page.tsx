
"use client";

import { useEffect, useState } from "react";
import AppLayout from "@/components/app-layout";
import { notFound, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, User, Cake, Users, Award, Star, Trophy } from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface StudentData {
  username: string;
  email: string;
  motherName: string;
  fatherName: string;
  dob: string;
  studentClass: number;
  totalPoints: number;
  gamesCompleted: number;
  badges: number;
}

export default function StudentProfilePage() {
  const params = useParams();
  const studentId = params.id as string;
  const [student, setStudent] = useState<StudentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (studentId) {
      const fetchStudentData = async () => {
        const userRef = doc(db, "users", studentId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setStudent(userSnap.data() as StudentData);
        } else {
          // Handle case where student is not found
        }
        setLoading(false);
      };

      fetchStudentData();
    }
  }, [studentId]);

  if (loading) {
    return <AppLayout><div>Loading profile...</div></AppLayout>;
  }

  if (!student) {
    notFound();
  }
  
  const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    if (nameParts.length > 1) {
        return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
    } else if (name.length > 0) {
        return name.substring(0, 2).toUpperCase();
    }
    return 'U';
  }


  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <Button asChild variant="outline" size="sm" className="mb-4">
            <Link href="/students">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Student List
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
             <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                        <AvatarFallback className="text-3xl">{getInitials(student.username)}</AvatarFallback>
                    </Avatar>
                    <h1 className="text-2xl font-bold font-headline">{student.username}</h1>
                    <p className="text-muted-foreground">Class {student.studentClass}</p>
                    <p className="text-muted-foreground text-sm">{student.email}</p>
                </CardContent>
             </Card>
          </div>
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Student Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                    <User className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span><strong>Username:</strong> {student.username}</span>
                </div>
                 <div className="flex items-center">
                    <Cake className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span><strong>Date of Birth:</strong> {student.dob}</span>
                </div>
                 <div className="flex items-center">
                    <Users className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span><strong>Parents:</strong> {student.motherName} & {student.fatherName}</span>
                </div>
                 <div className="grid grid-cols-2 gap-4 pt-4">
                    <Card className="p-4 bg-secondary/30">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-0">
                            <CardTitle className="text-sm font-medium">Total Points</CardTitle>
                            <Trophy className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="text-2xl font-bold">{student.totalPoints}</div>
                        </CardContent>
                    </Card>
                    <Card className="p-4 bg-secondary/30">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-0">
                            <CardTitle className="text-sm font-medium">Games Completed</CardTitle>
                            <Award className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="text-2xl font-bold">{student.gamesCompleted}</div>
                        </CardContent>
                    </Card>
                 </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </AppLayout>
  );
}
