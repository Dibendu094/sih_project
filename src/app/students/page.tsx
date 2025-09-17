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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { students } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function StudentsPage() {
  return (
    <AppLayout>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Student Roster</CardTitle>
          <CardDescription>
            A list of all students in your class. Click on a student to view
            their detailed profile.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead className="hidden sm:table-cell">Grade</TableHead>
                <TableHead>Points</TableHead>
                <TableHead className="hidden md:table-cell">Achievements</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => {
                const studentAvatar = PlaceHolderImages.find(
                  (p) => p.id === student.avatar
                );
                return (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          {studentAvatar && (
                            <AvatarImage
                              src={studentAvatar.imageUrl}
                              alt={student.name}
                              data-ai-hint={studentAvatar.imageHint}
                            />
                          )}
                          <AvatarFallback>
                            {student.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="font-medium">{student.name}</div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">{student.grade}</TableCell>
                    <TableCell>{student.points.toLocaleString()}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {student.achievements.map((ach) => (
                          <Badge key={ach} variant="secondary">
                            {ach}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/students/${student.id}`}>
                          View Profile
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
