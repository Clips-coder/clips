import { Card, CardContent } from "./ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
  trend?: string;
}

export function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  return (
    <Card className="hover:border-gray-700 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400 mb-1">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {trend && <p className="text-xs text-green-400 mt-1">{trend}</p>}
          </div>
          {icon && <div className="text-gray-400">{icon}</div>}
        </div>
      </CardContent>
    </Card>
  );
}
