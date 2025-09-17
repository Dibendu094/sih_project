"use client";

import AppLayout from "@/components/app-layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AreaChart, Gamepad2, Languages } from "lucide-react";

export default function HomePage() {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">
            Welcome to the Gamified Learning Platform 🎓
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This platform is designed to make learning fun and engaging for
            students in rural schools (Grades 6–12). By combining STEM
            education with interactive games, multilingual content, and offline
            access, we aim to improve learning outcomes and encourage curiosity
            among students with limited resources.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold font-headline text-center mb-8">
            Features of the Platform
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Gamepad2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Play & Learn</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Explore subject-wise games and quizzes to boost your knowledge
                while having fun. Earn points and unlock achievements as you
                progress.
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="items-center text-center">
                 <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <AreaChart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Track Progress</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Monitor your growth through a personalized dashboard. Teachers can
                track performance, compare results, and provide guidance to
                help students improve.
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="items-center text-center">
                 <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Languages className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">
                  Multilingual & Offline
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Learn in your own language, even with limited internet access.
                The platform is optimized to run smoothly on low-cost devices,
                ensuring accessibility for all.
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground">
                With this platform, students not only gain knowledge but also develop
                problem-solving skills, critical thinking, and a love for learning
                through a gamified, interactive experience.
            </p>
        </div>
      </div>
    </AppLayout>
  );
}
