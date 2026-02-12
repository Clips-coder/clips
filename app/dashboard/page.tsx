import { Sidebar } from "@/components/sidebar";
import { TopNavbar } from "@/components/top-navbar";
import { StatsCard } from "@/components/stats-card";
import { CampaignCard } from "@/components/campaign-card";
import { Eye, DollarSign, Briefcase } from "lucide-react";

// Mock data
const stats = [
  { title: "Total Views", value: "17.7M", icon: Eye },
  { title: "Total Earnings", value: "$8,850", icon: DollarSign },
  { title: "Active Campaigns", value: "12", icon: Briefcase },
];

const campaigns = [
  {
    brandLogo: "TB",
    brandName: "Telbet",
    title: "Telbet Logo Campaign 1.0",
    type: "Logo" as const,
    earnings: "$0.5 / 1k views",
    progress: 10,
    progressText: "$231.5 / 2.1K USDC paid out",
    views: "17.7M views",
    platforms: ["tiktok", "instagram", "youtube"],
  },
  {
    brandLogo: "H1",
    brandName: "Huddle01",
    title: "Huddle01 Clipping Campaign",
    type: "Clipping" as const,
    earnings: "$0.5 / 1k views",
    progress: 93,
    progressText: "$1,953 / 2.1K USDC paid out",
    views: "2M views",
    platforms: ["tiktok", "instagram"],
  },
  {
    brandLogo: "EB",
    brandName: "Epicbet",
    title: "Epicbet Brand Campaign",
    type: "Clipping" as const,
    earnings: "$0.5 / 1k views",
    progress: 90,
    progressText: "$1,890 / 2.1K USDC paid out",
    views: "10.1M views",
    platforms: ["tiktok", "youtube"],
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Sidebar />
      <TopNavbar />
      <main className="ml-64 mt-16 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <StatsCard
                  key={i}
                  title={stat.title}
                  value={stat.value}
                  icon={<Icon className="w-6 h-6" />}
                />
              );
            })}
          </div>

          {/* Campaigns */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Available Campaigns (38)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign, i) => (
                <CampaignCard key={i} {...campaign} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
