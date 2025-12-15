import React from 'react';
import { BookOpen } from 'lucide-react';

const AuthLayout = ({ leftContent, rightContent, themeColor = "blue" }) => {
  // Theme colors for the left panel icon background
  const bgColors = {
    blue: "bg-blue-600",
    purple: "bg-purple-600",
    emerald: "bg-emerald-600",
  };

  return (
    <div className="flex min-h-screen w-full font-sans bg-slate-50 dark:bg-slate-950">
      {/* --- LEFT PANEL --- */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 flex-col justify-between p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
             style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'}}></div>
        
        {/* Brand Logo */}
        <div className="relative z-10 flex items-center gap-3">
           <div className={`${bgColors[themeColor] || "bg-blue-600"} p-2 rounded-lg`}>
             <BookOpen size={24} className="text-white" />
           </div>
           <span className="text-2xl font-bold tracking-tight">IntelliLearn</span>
        </div>

        {/* Dynamic Content */}
        <div className="relative z-10 max-w-lg">
          {leftContent}
        </div>

        {/* Footer */}
        <div className="relative z-10 text-sm text-slate-500">
          © 2025 IntelliLearn Learning Platform
        </div>
      </div>

      {/* --- RIGHT PANEL --- */}
      <div className="w-full lg:w-1/2 bg-white dark:bg-slate-950 flex flex-col justify-center p-8 lg:p-16 overflow-y-auto">
        <div className="max-w-md w-full mx-auto">
          {rightContent}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;