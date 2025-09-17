"use client";

import AppLayout from "@/components/app-layout";

export default function HomePage() {
  return (
    <AppLayout>
      <div>
        <h1 className="text-3xl font-bold font-headline">Home Page</h1>
        <p className="text-muted-foreground">This is the home page.</p>
      </div>
    </AppLayout>
  );
}
