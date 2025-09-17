
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function EntryPage() {
  const router = useRouter()

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      router.replace("/home")
    } else {
      router.replace("/login")
    }
  }, [router])

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background px-4">
      <p>Loading...</p>
    </main>
  )
}
