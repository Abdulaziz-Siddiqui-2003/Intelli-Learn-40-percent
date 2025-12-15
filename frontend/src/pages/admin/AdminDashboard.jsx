import React, { useState } from 'react';
import { Download, Users, BookOpen, AlertTriangle, Search, TrendingUp } from 'lucide-react';

// Import the modular components
import StatCard from '../../components/dashboard/StatCard';
import StudentTable from '../../components/dashboard/StudentTable';
import InstructorTable from '../../components/dashboard/InstructorTable';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8 pb-8">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Admin Dashboard
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            System overview, user management, and performance metrics.
          </p>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-emerald-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 dark:hover:bg-emerald-700 transition-all active:scale-95">
              <Download size={18} />
              <span className="hidden sm:inline">Generate Report</span>
            </button>
        </div>
      </div>

      {/* 2. Stats Grid */}
      {/* Responsive: 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
            title="Total Students" 
            value="12,450" 
            unit="" 
            color="blue" 
            icon={Users} 
        />
        <StatCard 
            title="Active Instructors" 
            value="850" 
            unit="" 
            color="purple" 
            icon={BookOpen} 
        />
        <StatCard 
            title="Course Engagement" 
            value="92" 
            unit="%" 
            progress={92} 
            color="green" 
            icon={TrendingUp}
        />
         <StatCard 
            title="Pending Approvals" 
            value="15" 
            unit="" 
            color="orange" 
            icon={AlertTriangle} 
        />
      </div>

      {/* 3. Main Content Area (Tabs & Tables) */}
      <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden min-h-[500px]">
        
        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 pt-2">
            
            {/* Tabs */}
            <div className="flex gap-8 overflow-x-auto no-scrollbar">
                <button 
                    onClick={() => setActiveTab('students')}
                    className={`pb-4 pt-4 text-sm font-bold transition-all border-b-2 whitespace-nowrap ${
                    activeTab === 'students' 
                        ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400' 
                        : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                    }`}
                >
                    Student Management
                </button>
                <button 
                    onClick={() => setActiveTab('instructors')}
                    className={`pb-4 pt-4 text-sm font-bold transition-all border-b-2 whitespace-nowrap ${
                    activeTab === 'instructors' 
                        ? 'border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400' 
                        : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                    }`}
                >
                    Instructor Management
                </button>
            </div>

            {/* Filter / Search (Desktop) */}
            <div className="hidden sm:flex items-center gap-3 mb-2 sm:mb-0 py-3">
                 <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                        type="text" 
                        placeholder="Search records..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9 pr-4 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-blue-500 w-64"
                    />
                 </div>
            </div>
        </div>

        {/* Tab Content */}
        <div className="p-6 animate-fade-in">
           {/* Mobile Search (Only visible on small screens) */}
           <div className="sm:hidden mb-6 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                    type="text" 
                    placeholder="Search records..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 text-sm border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
                />
           </div>

           <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                 {activeTab === 'students' ? 'All Registered Students' : 'All Registered Instructors'}
              </h3>
              <span className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-500">
                Showing all records
              </span>
           </div>

           {/* Conditional Rendering based on Tab */}
           {activeTab === 'students' ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <StudentTable />
                </div>
           ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <InstructorTable />
                </div>
           )}
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;