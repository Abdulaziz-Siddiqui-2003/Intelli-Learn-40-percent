import React, { useState } from 'react';
import { UserPlus, Search, Filter } from 'lucide-react';
import StudentTable from '../../components/dashboard/StudentTable';
import InstructorTable from '../../components/dashboard/InstructorTable';

const AdminUsers = () => {
  const [activeTab, setActiveTab] = useState('students');

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">User Management</h1>
          <p className="text-slate-500 dark:text-slate-400">Manage students, instructors, and system administrators.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-emerald-600 text-white rounded-lg text-sm font-bold shadow-sm hover:opacity-90 transition-all">
          <UserPlus size={18} />
          Add New User
        </button>
      </div>

      {/* Control Bar */}
      <div className="bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-4 justify-between items-center shadow-sm">
        
        {/* Tabs */}
        <div className="flex p-1 bg-slate-100 dark:bg-slate-900 rounded-lg w-full md:w-auto">
          <button 
            onClick={() => setActiveTab('students')}
            className={`flex-1 md:flex-none px-6 py-2 text-sm font-bold rounded-md transition-all ${
              activeTab === 'students' 
              ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' 
              : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
            }`}
          >
            Students
          </button>
          <button 
            onClick={() => setActiveTab('instructors')}
            className={`flex-1 md:flex-none px-6 py-2 text-sm font-bold rounded-md transition-all ${
              activeTab === 'instructors' 
              ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' 
              : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
            }`}
          >
            Instructors
          </button>
        </div>

        {/* Search & Filter */}
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search users..." 
              className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-lg bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-500">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        {activeTab === 'students' ? <StudentTable /> : <InstructorTable />}
      </div>
    </div>
  );
};

export default AdminUsers;