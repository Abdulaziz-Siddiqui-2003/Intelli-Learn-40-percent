import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BarChart3, 
  Settings, 
  LogOut, 
  X,
  BookOpen 
} from 'lucide-react';

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear admin session
    localStorage.removeItem('userInfo');
    navigate('/admin/login');
  };

  // Profile Mock Data
  const adminProfile = {
    name: "Alex Johnson",
    role: "System Admin",
    avatar: "https://ui-avatars.com/api/?name=Alex+Johnson&background=10b981&color=fff"
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'User Management', path: '/admin/users', icon: Users },
    { name: 'Courses', path: '/admin/courses', icon: GraduationCap },
    { name: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <aside 
      className={`
        fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 
        transform transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}
    >
      {/* Sidebar Header */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-white">
          <div className="bg-emerald-600 p-1.5 rounded-lg">
            <BookOpen size={20} className="text-white" />
          </div>
          IntelliLearn
        </div>
        <button 
          onClick={toggleSidebar} 
          className="lg:hidden p-1 text-slate-500 hover:bg-slate-100 rounded-md"
        >
          <X size={20} />
        </button>
      </div>

      {/* Admin Profile Summary */}
      <div className="p-6 pb-2">
        <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
          <img 
            src={adminProfile.avatar} 
            alt="Admin" 
            className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-sm"
          />
          <div className="overflow-hidden">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white truncate">{adminProfile.name}</h4>
            <span className="text-xs text-emerald-600 font-medium bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full inline-block mt-1">
              {adminProfile.role}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Main Menu</p>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => window.innerWidth < 1024 && toggleSidebar()} // Close sidebar on mobile click
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
              ${isActive 
                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 shadow-sm' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }
            `}
          >
            <item.icon size={20} strokeWidth={1.5} />
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;