import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '@/client/pages/Dashboard';
import Login from '@/client/pages/Login';
import Layout from '@/client/components/Layout';
import NotFound from '@/client/pages/NotFound';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        {/* Add more routes here as the application grows */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
