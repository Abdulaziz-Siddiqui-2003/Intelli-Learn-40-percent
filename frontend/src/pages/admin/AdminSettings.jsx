import React from 'react';
import { Save, Lock, Globe } from 'lucide-react';

const AdminSettings = () => {
  return (
    <div className="max-w-4xl space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Platform Settings</h1>
        <p className="text-slate-500 dark:text-slate-400">Configure global system preferences and security protocols.</p>
      </div>

      {/* General Settings */}
      <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-6">
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <Globe className="text-slate-400" size={20} />
            <h3 className="font-bold text-lg">General Configuration</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Platform Name</label>
                <input type="text" defaultValue="IntelliLearn" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Support Email</label>
                <input type="email" defaultValue="support@intellilearn.edu" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
            </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-6">
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <Lock className="text-slate-400" size={20} />
            <h3 className="font-bold text-lg">Security & Access</h3>
        </div>

        <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div>
                    <p className="font-medium text-slate-900 dark:text-white">Two-Factor Authentication (2FA)</p>
                    <p className="text-xs text-slate-500">Require 2FA for all admin accounts.</p>
                </div>
                {/* Mock Toggle */}
                <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div>
                    <p className="font-medium text-slate-900 dark:text-white">New User Registration</p>
                    <p className="text-xs text-slate-500">Allow students to self-register without approval.</p>
                </div>
                 {/* Mock Toggle */}
                 <div className="w-12 h-6 bg-slate-300 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                 </div>
            </div>
        </div>
      </div>

      <div className="flex justify-end">
          <button className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all">
              <Save size={18} />
              Save Changes
          </button>
      </div>

    </div>
  );
};

export default AdminSettings;