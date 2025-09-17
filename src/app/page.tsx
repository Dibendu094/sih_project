
"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";

export default function RootPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
            router.replace('/home');
        } else {
            router.replace('/login');
        }
    }
  }, [router]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background">
      <p>Loading...</p>
    </div>
  );
}
