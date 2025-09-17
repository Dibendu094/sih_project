
"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Logo from "@/components/logo"
import { useToast } from "@/hooks/use-toast"
import { Separator } from "@/components/ui/separator"
import { getDoc, doc } from "firebase/firestore"
import { db } from "@/lib/firebase"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      toast({
        title: "Login Failed",
        description: "Please enter both email and password.",
        variant: "destructive",
      })
      return
    }

    setLoading(true);

    // Optimistically navigate and set local storage
    // We'll verify in the background
    localStorage.setItem('userEmail', email);
    
    // We can't get username without fetching, so we'll set a temporary one or handle it on the dashboard
    // For now, let's just push to home
    router.push("/home");
    
    const verifyLogin = async () => {
        try {
          const userRef = doc(db, "users", email);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const userData = userSnap.data();
            if (userData.password === password) {
                // Login is valid, update username in local storage
                if (typeof window !== 'undefined') {
                  localStorage.setItem('username', userData.username);
                  // Trigger a storage event to let other pages know username is ready
                  localStorage.setItem('loginEvent', Date.now().toString());
                }
            } else {
                // Invalid password
                throw new Error("Invalid email or password.");
            }
          } else {
             // No user found
            throw new Error("No account found with that email.");
          }
        } catch (error: any) {
            console.error("Login error:", error);
            // If verification fails, clear local storage and redirect back
            if (typeof window !== 'undefined') {
                localStorage.removeItem('userEmail');
                localStorage.removeItem('username');
            }
            router.push("/"); // Redirect back to login
            toast({
              title: "Login Failed",
              description: error.message || "An error occurred during login. Please try again.",
              variant: "destructive",
            })
        } finally {
            // No need to set loading to false here, as we've already navigated
        }
    };
    
    verifyLogin();
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <form onSubmit={handleLogin}>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <Logo />
            </div>
            <CardTitle className="font-headline text-3xl">Welcome to EduQuest</CardTitle>
            <CardDescription>Sign in to continue your learning adventure.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
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
            <div className="space-y-2">
              <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="ml-auto inline-block text-sm underline">
                    Forgot your password?
                  </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col items-stretch gap-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </Button>
            <div className="relative">
              <Separator />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">OR</p>
            </div>
             <Button asChild variant="outline" className="w-full">
                <Link href="/signup">
                    Sign Up
                </Link>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  )
}
