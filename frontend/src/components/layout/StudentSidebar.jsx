import React from 'react';
import { useNavigate } from 'react-router-dom';
import { currentUser } from '../../mockData';

const SidebarItem = ({ icon, label, onClick, isActive }) => {
    // Styling constants - Exact match to your design
    const baseClasses = "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ease-in-out group text-left";
    const activeClasses = "bg-purple-600/10 text-purple-600 dark:bg-purple-600/20 dark:text-purple-400 font-semibold";
    const inactiveClasses = "text-gray-500 dark:text-slate-400 hover:bg-purple-50 hover:text-purple-600 dark:hover:bg-slate-800 dark:hover:text-purple-400 font-medium";

    return (
        <button 
            onClick={onClick}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
            type="button"
        >
            <span className={`material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:scale-110 ${isActive ? 'text-purple-600 dark:text-purple-400' : ''}`}>
                {icon}
            </span>
            <p className="text-sm leading-normal">{label}</p>
        </button>
    );
};

const StudentSidebar = ({ isOpen, onClose, currentView, onNavigate }) => {
    const navigate = useNavigate();

    // Helper to determine if a link is active based on state
    const isLinkActive = (viewId) => {
        // Handle explicit matches or special cases
        if (currentView === viewId) return true;
        if (viewId === 'analytics' && currentView === 'Performance Analytics') return true;
        if (viewId === 'courses' && currentView === 'My Courses') return true;
        return false;
    };

    // Helper to handle internal dashboard navigation
    const handleNav = (viewId) => {
        if (onNavigate) onNavigate(viewId);
        if (window.innerWidth < 1024 && onClose) onClose();
    };

    // Helper to handle Logout (Route Change)
    const handleLogout = () => {
        // In a real app, you would clear auth tokens here
        navigate('/'); 
    };

    return (
        <>
            <aside 
                className={`
                    fixed lg:sticky top-0 left-0 z-40 h-screen w-64 flex flex-col justify-between 
                    bg-white dark:bg-slate-900 border-r border-gray-100 dark:border-slate-800 shadow-xl lg:shadow-sm
                    transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}
            >
                <div className="flex flex-col gap-8 px-4 py-6">
                    {/* Brand & Close Button */}
                    <div className="px-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-purple-600 text-3xl">school</span>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">IntelliLearn</h2>
                        </div>
                        {/* Mobile Close Button */}
                        <button 
                            onClick={onClose} 
                            className="lg:hidden p-1 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-1.5">
                        <SidebarItem 
                            icon="dashboard" 
                            label="Dashboard" 
                            isActive={isLinkActive('dashboard')}
                            onClick={() => handleNav('dashboard')} 
                        />
                        <SidebarItem 
                            icon="book" 
                            label="My Courses" 
                            isActive={isLinkActive('courses')}
                            onClick={() => handleNav('courses')} 
                        />
                        <SidebarItem 
                            icon="analytics" 
                            label="Performance Analytics" 
                            isActive={isLinkActive('analytics')}
                            onClick={() => handleNav('analytics')} 
                        />
                    </div>
                </div>

                {/* Profile & Logout */}
                <div className="flex flex-col gap-2 border-t border-gray-100 dark:border-slate-800 pt-4 px-4 pb-6">
                    <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-slate-800 rounded-lg">
                        <div 
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
                            style={{ backgroundImage: `url("${currentUser.avatar}")` }}
                        ></div>
                        <div className="flex flex-col overflow-hidden">
                            <h1 className="text-sm font-bold truncate text-gray-900 dark:text-white">{currentUser.name}</h1>
                            <p className="text-xs font-normal truncate text-gray-500 dark:text-slate-400">{currentUser.email}</p>
                        </div>
                    </div>
                    <SidebarItem 
                        icon="logout" 
                        label="Log Out" 
                        onClick={handleLogout} 
                    />
                </div>
            </aside>
        </>
    );
};

export default StudentSidebar;