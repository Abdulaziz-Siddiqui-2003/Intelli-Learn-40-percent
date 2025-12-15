import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900 font-sans text-slate-900 dark:text-white overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar Component */}
      <AdminSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <AdminHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scroll-smooth">
          {/* Outlet renders the child route (e.g., AdminDashboard) */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;