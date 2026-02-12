"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Calendar, LogIn } from "lucide-react";

export function TopNavbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-gray-950 border-b border-gray-800 flex items-center justify-between px-6 z-40">
      <nav className="flex items-center gap-6">
        <Link
          href="/marketplace"
          className={`text-sm font-medium transition-colors ${
            pathname === "/marketplace"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Marketplace
        </Link>
        <Link
          href="/faq"
          className={`text-sm font-medium transition-colors ${
            pathname === "/faq"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          FAQ
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          <Calendar className="w-4 h-4 mr-2" />
          Book a call
        </Button>
        <Button size="sm">
          <LogIn className="w-4 h-4 mr-2" />
          Sign in
        </Button>
      </div>
    </header>
  );
}
