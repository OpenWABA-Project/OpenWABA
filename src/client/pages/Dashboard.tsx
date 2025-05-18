import React from 'react';
import { Card } from '@/client/components/ui/card';
import { BarChart, UsersRound, MessageSquare, Phone } from 'lucide-react';

// Mock stats data
const stats = [
  { name: 'Total Messages', value: '14,528', change: '+12%', icon: MessageSquare },
  { name: 'Active Users', value: '2,345', change: '+7%', icon: UsersRound },
  { name: 'Phone Numbers', value: '18', change: '+2', icon: Phone },
  { name: 'Companies', value: '5', change: '+1', icon: BarChart },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-xs text-green-600 mt-1">{stat.change} from last month</p>
                </div>
                <div className="rounded-full bg-primary/10 p-2">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <div className="p-6">
            <h3 className="text-lg font-medium">Messages Over Time</h3>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Chart placeholder
            </div>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-medium">Recent Activity</h3>
            <div className="mt-6 space-y-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="mr-4 rounded-full bg-primary/10 p-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">New message received</p>
                    <p className="text-xs text-muted-foreground">Just now</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
