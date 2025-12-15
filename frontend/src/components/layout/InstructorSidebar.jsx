import React from 'react';
import { useNavigate } from 'react-router-dom';

const InstructorSidebar = ({ isOpen, onClose, currentView, onNavigate }) => {
  const navigate = useNavigate();
  
  // Standard Navigation Items
  const menuItems = [
    { id: 'dashboard', icon: 'dashboard', label: 'Overview' },
    { id: 'courses', icon: 'book', label: 'My Courses' },
    { id: 'students', icon: 'group', label: 'Students' },
    { id: 'analytics', icon: 'bar_chart', label: 'Analytics' },
  ];

  // New AI Modules
  const aiTools = [
    { id: 'quiz-gen', icon: 'psychology', label: 'Quiz Generator' },
    { id: 'aes-grading', icon: 'fact_check', label: 'Smart Grading' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed lg:static top-0 left-0 z-50 h-full w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800
        transform transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo Area */}
        <div className="p-6 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2 text-blue-600 font-black text-2xl tracking-tight">
            <span className="material-symbols-outlined text-3xl">school</span>
            <span>IntelliLearn</span>
          </div>
          <button onClick={onClose} className="lg:hidden text-gray-500 hover:text-gray-700">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Scrollable Nav Area */}
        <div className="flex-1 overflow-y-auto py-2">
          
          {/* Main Menu */}
          <nav className="px-4 space-y-1 mb-8">
            <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Menu</p>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); onClose(); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                  currentView === item.id
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' 
                    : 'text-gray-600 hover:bg-gray-50 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>

          {/* AI Tools Section */}
          <nav className="px-4 space-y-1">
            <p className="px-4 text-xs font-bold text-purple-500 uppercase tracking-wider mb-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">auto_awesome</span> AI Tools
            </p>
            {aiTools.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); onClose(); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                  currentView === item.id
                    ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300' 
                    : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Footer / Logout */}
        <div className="p-6 border-t border-gray-100 dark:border-slate-800 flex-shrink-0">
          <button 
            onClick={() => navigate('/')} 
            className="w-full flex items-center gap-3 text-gray-500 hover:text-red-500 transition-colors font-medium text-left"
          >
            <span className="material-symbols-outlined">logout</span>
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
};

export default InstructorSidebar;