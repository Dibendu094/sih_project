
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
import { translations } from "@/lib/translations"

type Language = "en" | "hi" | "or";

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
  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language].signup;

  const handleSignup = (e: React.FormEvent) => {
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

    // Redirect to login page and show success message
    router.push("/")
    toast({
        title: "Account Created!",
        description: "You can now sign in with your new account.",
    });

    // Save data in the background
    const saveData = async () => {
        try {
          const userRef = doc(db, "users", email);
          
          await setDoc(userRef, {
            username,
            email,
            motherName,
            fatherName,
            dob: format(dob, "yyyy-MM-dd"),
            studentClass: parseInt(studentClass, 10),
            password, // Storing password in plain text - NOT FOR PRODUCTION
            totalPoints: 0,
            gamesCompleted: 0,
            completedGames: [],
            badges: 0,
          });

        } catch (error) {
            console.error("Error creating account: ", error);
            // Optionally, handle the error more gracefully, e.g., by notifying the user
            // that their data might not have saved correctly.
             toast({
                title: "Sync Error",
                description: "Could not save your account data to the server. Please check your connection.",
                variant: "destructive"
            })
        } finally {
            setLoading(false);
        }
    };

    saveData();
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-border/50 shadow-xl">
        <form onSubmit={handleSignup}>
          <CardHeader className="text-center">
             <div className="flex justify-end mb-4">
                <Select onValueChange={(value: Language) => setLanguage(value)} value={language}>
                    <SelectTrigger className="w-[120px] bg-background/70">
                        <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="hi">हिन्दी</SelectItem>
                        <SelectItem value="or">ଓଡ଼ିଆ</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="mx-auto mb-4">
              <Logo />
            </div>
            <CardTitle className="font-headline text-3xl">{t.title}</CardTitle>
            <CardDescription>
              {t.description}{" "}
              <Link href="/" className="text-primary hover:underline">
                {t.signInLink}
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">{t.usernameLabel}</Label>
              <Input
                id="username"
                type="text"
                placeholder={t.usernamePlaceholder}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-background/70"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t.emailLabel}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/70"
              />
            </div>
             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="motherName">{t.motherNameLabel}</Label>
                <Input
                  id="motherName"
                  type="text"
                  placeholder={t.motherNamePlaceholder}
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                  required
                  className="bg-background/70"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fatherName">{t.fatherNameLabel}</Label>
                <Input
                  id="fatherName"
                  type="text"
                  placeholder={t.fatherNamePlaceholder}
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                  required
                  className="bg-background/70"
                />
              </div>
            </div>
             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="dob">{t.dobLabel}</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="dob"
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal bg-background/70",
                          !dob && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dob ? format(dob, "PPP") : <span>{t.dobPlaceholder}</span>}
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
                  <Label htmlFor="class">{t.classLabel}</Label>
                  <Select onValueChange={setStudentClass} value={studentClass} required>
                    <SelectTrigger id="class" className="w-full bg-background/70">
                      <SelectValue placeholder={t.classPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 7 }, (_, i) => 6 + i).map(grade => (
                        <SelectItem key={grade} value={String(grade)}>
                          {t.classPrefix} {grade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t.passwordLabel}</Label>
              <Input
                id="password"
                type="password"
                placeholder={t.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-background/70"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? t.creatingAccountButton : t.signUpButton}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  )
}
