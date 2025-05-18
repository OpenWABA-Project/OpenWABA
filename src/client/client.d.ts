// Client component declarations
// Declarations for absolute paths (used in App.tsx)
declare module '@/client/pages/Dashboard' {
  import { FC } from 'react';
  const Dashboard: FC;
  export default Dashboard;
}

declare module '@/client/pages/Login' {
  import { FC } from 'react';
  const Login: FC;
  export default Login;
}

declare module '@/client/pages/NotFound' {
  import { FC } from 'react';
  const NotFound: FC;
  export default NotFound;
}

declare module '@/client/components/Layout' {
  import { FC } from 'react';
  const Layout: FC;
  export default Layout;
}

// Declarations for relative paths (used in other components)
declare module './pages/Dashboard' {
  import { FC } from 'react';
  const Dashboard: FC;
  export default Dashboard;
}

declare module './pages/Login' {
  import { FC } from 'react';
  const Login: FC;
  export default Login;
}

declare module './pages/NotFound' {
  import { FC } from 'react';
  const NotFound: FC;
  export default NotFound;
}

declare module './components/Layout' {
  import { FC } from 'react';
  const Layout: FC;
  export default Layout;
}

declare module './components/layout/Sidebar' {
  import { FC } from 'react';
  const Sidebar: FC;
  export default Sidebar;
}

declare module './components/layout/Header' {
  import { FC } from 'react';
  const Header: FC;
  export default Header;
}

declare module '@/client/components/layout/Sidebar' {
  import { FC } from 'react';
  const Sidebar: FC;
  export default Sidebar;
}

declare module '@/client/components/layout/Header' {
  import { FC } from 'react';
  const Header: FC;
  export default Header;
}

declare module '@/client/components/ui/card' {
  import { FC, ReactNode } from 'react';
  
  export interface CardProps {
    className?: string;
    children?: ReactNode;
  }
  
  export const Card: FC<CardProps>;
  export const CardHeader: FC<CardProps>;
  export const CardTitle: FC<CardProps>;
  export const CardDescription: FC<CardProps>;
  export const CardContent: FC<CardProps>;
  export const CardFooter: FC<CardProps>;
}

declare module '@/client/components/ui/button' {
  import { FC, ReactNode, ButtonHTMLAttributes } from 'react';
  
  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    className?: string;
    children?: ReactNode;
  }
  
  export const Button: FC<ButtonProps>;
}
