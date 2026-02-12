"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Briefcase, DollarSign, Wallet, Settings } from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Campaigns", href: "/campaigns", icon: Briefcase },
  { name: "Earnings", href: "/earnings", icon: DollarSign },
  { name: "Wallet", href: "/wallet", icon: Wallet },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-950 border-r border-gray-800 p-6">
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-black rounded"></div>
          <span className="text-xl font-bold">Clips</span>
        </div>
      </div>

      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-purple-600/20 text-purple-400 border-l-2 border-purple-500"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
