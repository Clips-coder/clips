import { Sidebar } from "@/components/sidebar";
import { TopNavbar } from "@/components/top-navbar";
import { CampaignCard } from "@/components/campaign-card";
import { Button } from "@/components/ui/button";
import { Search, Video, PuzzlePiece, Filter } from "lucide-react";

const campaigns = [
  {
    brandLogo: "TB",
    brandName: "Telbet",
    title: "Telbet Logo Campaign 1.0",
    type: "Logo" as const,
    earnings: "$0.5 / 1k views",
    progress: 10,
    progressText: "$231.5 / 2.1K USDC paid out in $ USDC",
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
    progressText: "$1,953 / 2.1K USDC paid out in $ USDC",
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
    progressText: "$1,890 / 2.1K USDC paid out in $ USDC",
    views: "10.1M views",
    platforms: ["tiktok", "youtube"],
  },
];

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Sidebar />
      <TopNavbar />
      <main className="ml-64 mt-16 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Available Campaigns (38)</h1>

          {/* Search and Filters */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search campaigns..."
                className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-600"
              />
            </div>
            <Button variant="outline">
              <Video className="w-4 h-4 mr-2" />
              Clipping
            </Button>
            <Button variant="outline">
              <PuzzlePiece className="w-4 h-4 mr-2" />
              Logo
            </Button>
            <Button variant="outline">
              <Filter className="w-4 h-4" />
            </Button>
          </div>

          {/* Campaigns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign, i) => (
              <CampaignCard key={i} {...campaign} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
