import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/client/components/layout/Sidebar';
import Header from '@/client/components/layout/Header';

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
