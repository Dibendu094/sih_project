
"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { doc, setDoc } from "firebase/firestore"

import { cn } from "@/lib/utils"
import { db } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Logo from "@/components/logo"
import { useToast } from "@/hooks/use-toast"

export default function SignupPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [motherName, setMotherName] = useState("")
  const [fatherName, setFatherName] = useState("")
  const [dob, setDob] = useState<Date>()
  const [studentClass, setStudentClass] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (
      !username ||
      !email ||
      !motherName ||
      !fatherName ||
      !dob ||
      !studentClass ||
      !password
    ) {
      toast({
        title: "Incomplete Form",
        description: "Please fill out all the fields.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    try {
      // Use email as a simple unique ID for this prototype.
      // In a real app, you'd use Firebase Authentication to create a proper user ID.
      const userRef = doc(db, "users", email);
      
      await setDoc(userRef, {
        username,
        email,
        motherName,
        fatherName,
        dob: format(dob, "yyyy-MM-dd"),
        studentClass: parseInt(studentClass, 10),
        totalPoints: 0,
        gamesCompleted: 0,
        completedGames: [],
        badges: 0,
      });

      // Store username to be used across the app
      if (typeof window !== 'undefined') {
        localStorage.setItem('username', username);
        localStorage.setItem('userEmail', email); // Save email to identify user
      }

      toast({
        title: "Account Created!",
        description: "Welcome to EduQuest! Taking you to the home page.",
      })
      router.push("/home")
    } catch (error) {
        console.error("Error creating account: ", error);
        toast({
            title: "Error",
            description: "Could not create your account. Please try again.",
            variant: "destructive"
        })
    } finally {
        setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-md">
        <form onSubmit={handleSignup}>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <Logo />
            </div>
            <CardTitle className="font-headline text-3xl">Create an Account</CardTitle>
            <CardDescription>
              Join the learning adventure. Already have an account?{" "}
              <Link href="/" className="text-primary hover:underline">
                Sign In
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="motherName">Mother's Name</Label>
                <Input
                  id="motherName"
                  type="text"
                  placeholder="Mother's first name"
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fatherName">Father's Name</Label>
                <Input
                  id="fatherName"
                  type="text"
                  placeholder="Father's first name"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                  required
                />
              </div>
            </div>
             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="dob"
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !dob && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dob ? format(dob, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dob}
                        onSelect={setDob}
                        initialFocus
                        captionLayout="dropdown-buttons"
                        fromYear={new Date().getFullYear() - 20}
                        toYear={new Date().getFullYear() - 10}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="class">Class</Label>
                  <Select onValueChange={setStudentClass} value={studentClass} required>
                    <SelectTrigger id="class" className="w-full">
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 7 }, (_, i) => 6 + i).map(grade => (
                        <SelectItem key={grade} value={String(grade)}>
                          Class {grade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating Account..." : "Sign Up"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  )
}
