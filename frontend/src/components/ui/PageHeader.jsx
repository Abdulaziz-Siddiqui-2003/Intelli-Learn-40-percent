import React from 'react';

const PageHeader = ({ title, subtitle, actionLabel, onMenuClick }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">{title}</h1>
          <p className="text-gray-500 dark:text-slate-400 font-medium">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-gray-500 relative hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-200 dark:shadow-none hover:shadow-blue-300">
          <span className="material-symbols-outlined text-[20px]">add</span>
          <span className="hidden sm:inline">{actionLabel}</span>
        </button>
      </div>
    </div>
  );
};

export default PageHeader;