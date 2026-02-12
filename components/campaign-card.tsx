import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Send, Info } from "lucide-react";

interface CampaignCardProps {
  brandLogo: string;
  brandName: string;
  title: string;
  type: "Clipping" | "Logo";
  earnings: string;
  progress: number;
  progressText: string;
  views: string;
  platforms: string[];
}

export function CampaignCard({
  brandLogo,
  brandName,
  title,
  type,
  earnings,
  progress,
  progressText,
  views,
  platforms,
}: CampaignCardProps) {
  return (
    <Card className="overflow-hidden hover:border-gray-700 transition-all hover:shadow-xl">
      <CardContent className="p-0">
        {/* Brand Image */}
        <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="text-4xl font-bold text-gray-600">{brandLogo}</div>
          <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
            {earnings}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">{title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                <span>{brandName}</span>
              </div>
            </div>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded ${
              type === "Logo" ? "bg-orange-500/20 text-orange-400" : "bg-blue-500/20 text-blue-400"
            }`}>
              {type}
            </span>
          </div>

          {/* Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>{progressText}</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Platforms & Views */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              {platforms.map((platform, i) => (
                <div key={i} className="w-5 h-5 bg-gray-700 rounded"></div>
              ))}
            </div>
            <span className="text-sm text-gray-400">{views}</span>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Info className="w-4 h-4 mr-2" />
              Details
            </Button>
            <Button size="sm" className="flex-1">
              <Send className="w-4 h-4 mr-2" />
              Submit
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
