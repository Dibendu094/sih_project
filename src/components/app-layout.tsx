
"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Home,
  LayoutDashboard,
  Gamepad2,
  Users,
  LogOut,
  Languages,
} from "lucide-react";
import Logo from "./logo";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type Language = "en" | "hi" | "or";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [username, setUsername] = React.useState("User");
  const [initials, setInitials] = React.useState("U");
  const [language, setLanguage] = React.useState<Language>("en");
  const [isClient, setIsClient] = React.useState(false);


  React.useEffect(() => {
    setIsClient(true);
    
    const updateUsername = () => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            const name = storedUsername.trim();
            setUsername(name);
            const nameParts = name.split(' ');
            if (nameParts.length > 1) {
                setInitials((nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase());
            } else if (name.length > 0) {
                setInitials(name.substring(0, 2).toUpperCase());
            }
        } else {
           setUsername("User");
           setInitials("U");
        }
    }

    const storedLanguage = localStorage.getItem("language") as Language | null;
    if (storedLanguage) {
        setLanguage(storedLanguage);
    }

    updateUsername();

    // Listen for the custom login event
    const handleStorageChange = (e: StorageEvent) => {
        if (e.key === 'loginEvent' || e.key === 'username') {
            updateUsername();
        }
        if (e.key === 'language' && e.newValue) {
            setLanguage(e.newValue as Language);
        }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
        window.removeEventListener('storage', handleStorageChange);
    };

  }, []);

  const handleLanguageChange = (value: Language) => {
    setLanguage(value);
    if(typeof window !== 'undefined') {
        localStorage.setItem("language", value);
        // Dispatch a storage event to notify other tabs
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'language',
            newValue: value
        }));
    }
  };

  const handleLogout = () => {
    // In a real app, clear session/token here
    if (typeof window !== 'undefined') {
        localStorage.removeItem('username');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('loginEvent');
    }
    router.push("/login");
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Logo />
            <h1 className="font-headline text-xl font-semibold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
              EduQuest
            </h1>
          </div>
        </SidebarHeader>
        <SidebarContent className="justify-center">
          <SidebarMenu>
             <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/home"}
                tooltip="Home"
              >
                <Link href="/home">
                  <Home />
                  Home
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith("/games")}
                tooltip="Games"
              >
                <Link href="/games">
                  <Gamepad2 />
                  Games
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/dashboard"}
                tooltip="Dashboard"
              >
                <Link href="/dashboard">
                  <LayoutDashboard />
                  Dashboard
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith("/students")}
                tooltip="Students"
              >
                <Link href="/students">
                  <Users />
                  Students
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarSeparator />
          <div className="p-2 space-y-2 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:space-y-0">
            <div className="group-data-[collapsible=text]:px-2">
                <Label className="text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">Language</Label>
                <Select onValueChange={handleLanguageChange} value={language}>
                    <SelectTrigger className="h-9 border-sidebar-border bg-sidebar-accent group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:h-10 group-data-[collapsible=icon]:rounded-md group-data-[collapsible=icon]:border-0">
                        <div className="flex items-center gap-2">
                            <Languages className="h-4 w-4" />
                            <SelectValue className="group-data-[collapsible=icon]:hidden" />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="hi">हिन्दी (Hindi)</SelectItem>
                        <SelectItem value="or">ଓଡ଼ିଆ (Oriya)</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="p-2 flex items-center gap-3 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:pt-2">
                <Avatar className="h-8 w-8 group-data-[collapsible=icon]:h-10 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:rounded-md">
                    <AvatarFallback className="bg-primary text-primary-foreground font-bold group-data-[collapsible=icon]:rounded-md">
                        {initials}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                    <span className="font-semibold text-sidebar-foreground text-sm">{username}</span>
                </div>
            </div>
          </div>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={handleLogout} tooltip="Logout">
                <LogOut />
                Logout
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center justify-between gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1">
            
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
