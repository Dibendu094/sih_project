
"use client";

import React, { useEffect, useState } from "react";
import AppLayout from "@/components/app-layout";
import {
  Card,
  CardContent,
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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

interface Student {
  id: string;
  username: string;
  studentClass: number;
  totalPoints: number;
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const usersCollection = collection(db, "users");
        const q = query(usersCollection, orderBy("username"));
        const userSnapshot = await getDocs(q);
        const userList = userSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            username: data.username,
            studentClass: data.studentClass,
            totalPoints: data.totalPoints || 0,
          };
        });
        setStudents(userList);
      } catch (error) {
        console.error("Error fetching students:", error);
        // Optionally, show a toast notification to the user
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const getInitials = (name: string) => {
    if (!name) return 'U';
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
        <h1 className="text-3xl font-bold font-headline">Students</h1>
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-xl">
          <CardHeader>
            <CardTitle>All Students</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Total Points</TableHead>
                  <TableHead className="text-right">Profile</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center h-24">
                      Loading students...
                    </TableCell>
                  </TableRow>
                ) : students.length > 0 ? (
                  students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{getInitials(student.username)}</AvatarFallback>
                          </Avatar>
                           <span className="font-medium">{student.username}</span>
                        </div>
                      </TableCell>
                      <TableCell>{student.studentClass}</TableCell>
                      <TableCell>{student.totalPoints}</TableCell>
                      <TableCell className="text-right">
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/students/${student.id}`}>
                            View Profile
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                   <TableRow>
                    <TableCell colSpan={4} className="text-center h-24">
                      No students found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
