"use client";

import AppLayout from "@/components/app-layout";

export default function DashboardPage() {
  return (
    <AppLayout>
       <div>
        <h1 className="text-3xl font-bold font-headline">Dashboard</h1>
        <p className="text-muted-foreground">This is the dashboard page.</p>
      </div>
    </AppLayout>
  );
}
