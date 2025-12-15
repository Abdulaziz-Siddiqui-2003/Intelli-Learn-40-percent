import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';

const AdminHeader = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 md:px-6 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      
      {/* Left: Mobile Toggle & Search */}
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
        >
          <Menu size={24} />
        </button>

        <div className="hidden md:flex items-center w-full max-w-md bg-slate-100 dark:bg-slate-900 rounded-lg px-3 py-2 border border-slate-200 dark:border-slate-800 focus-within:border-emerald-500 transition-colors">
          <Search size={18} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Search users, courses, or logs..." 
            className="w-full bg-transparent border-none outline-none text-sm ml-2 text-slate-900 dark:text-white placeholder-slate-500"
          />
        </div>
      </div>

      {/* Right: Notifications & Actions */}
      <div className="flex items-center gap-3 md:gap-4">
        <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-950"></span>
        </button>
        
        {/* Placeholder for header profile action if needed */}
      </div>
    </header>
  );
};

export default AdminHeader;