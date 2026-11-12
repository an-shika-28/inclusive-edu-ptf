import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EAE0CC] text-[#2A3638]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
