import React from 'react';
import { TrendingUp, Users, Activity, DollarSign } from 'lucide-react';
import StatCard from '../../components/dashboard/StatCard';

const AdminAnalytics = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">System Analytics</h1>
        <p className="text-slate-500 dark:text-slate-400">Real-time performance metrics and engagement stats.</p>
      </div>

      {/* High Level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="$45k" unit="" color="green" icon={DollarSign} />
        <StatCard title="New Signups" value="1,205" unit="" color="blue" icon={Users} />
        <StatCard title="Active Sessions" value="540" unit="" color="purple" icon={Activity} />
        <StatCard title="Growth Rate" value="18" unit="%" progress={18} color="orange" />
      </div>

      {/* Charts Sections (Placeholders) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm h-80 flex flex-col justify-center items-center text-slate-400">
           <TrendingUp size={48} className="mb-4 opacity-50" />
           <p className="font-medium">Enrollment Trends Chart</p>
           <span className="text-xs">Visualizations coming soon</span>
        </div>
        <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm h-80 flex flex-col justify-center items-center text-slate-400">
           <Activity size={48} className="mb-4 opacity-50" />
           <p className="font-medium">System Load & Performance</p>
           <span className="text-xs">Visualizations coming soon</span>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;