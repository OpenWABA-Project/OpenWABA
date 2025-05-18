import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/client/lib/utils';

// Icon imports
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Building2, 
  Settings, 
  Phone, 
  FileText,
  Webhook
} from 'lucide-react';

type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Chats', href: '/chats', icon: MessageSquare },
  { name: 'Templates', href: '/templates', icon: FileText },
  { name: 'Phone Numbers', href: '/phone-numbers', icon: Phone },
  { name: 'Companies', href: '/companies', icon: Building2 },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Webhooks', href: '/webhooks', icon: Webhook },
  { name: 'Settings', href: '/settings', icon: Settings },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="hidden lg:flex lg:flex-col lg:w-64 bg-card text-card-foreground border-r">
      <div className="px-6 py-4 border-b">
        <h1 className="text-xl font-bold">OpenWABA</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-secondary hover:text-secondary-foreground"
                  )}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t">
        <div className="text-xs text-muted-foreground">
          <p>OpenWABA v1.0.0</p>
          <p>© 2025 OpenWABA Project</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
