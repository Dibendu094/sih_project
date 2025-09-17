import AppLayout from "@/components/app-layout";
import { notFound } from "next/navigation";
import { students } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StudentProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const student = students.find((s) => s.id === params.id);

  if (!student) {
    notFound();
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
        <h1 className="text-2xl font-bold font-headline">Profile for {student.name}</h1>
      </div>
    </AppLayout>
  );
}
