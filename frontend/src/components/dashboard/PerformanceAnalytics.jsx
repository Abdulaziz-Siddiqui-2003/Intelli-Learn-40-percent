import React from 'react';

const ProgressBar = ({ label, percentage, color }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
      <div 
        className={`h-2.5 rounded-full ${color}`} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const StatCardSimple = ({ title, value, subtext, icon, color }) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm flex items-start justify-between">
    <div>
      <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{value}</h3>
      <p className={`text-xs font-bold ${color}`}>{subtext}</p>
    </div>
    <div className={`p-3 rounded-xl bg-gray-50 dark:bg-slate-800 text-gray-400`}>
      <span className="material-symbols-outlined">{icon}</span>
    </div>
  </div>
);

const PerformanceAnalytics = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Performance Analytics</h1>
        <p className="text-gray-500 dark:text-slate-400">Deep dive into your learning progress and metrics.</p>
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCardSimple 
          title="Current GPA" 
          value="3.8" 
          subtext="+0.2 from last semester" 
          icon="school" 
          color="text-green-500" 
        />
        <StatCardSimple 
          title="Assignment Completion" 
          value="94%" 
          subtext="Top 10% of class" 
          icon="task_alt" 
          color="text-blue-500" 
        />
        <StatCardSimple 
          title="Learning Hours" 
          value="124h" 
          subtext="This month" 
          icon="timer" 
          color="text-purple-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Score History Graph (Simulated) */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Score History</h3>
          <div className="flex items-end justify-between h-64 gap-2">
            {[65, 70, 68, 85, 80, 90, 88, 95].map((h, i) => (
              <div key={i} className="w-full flex flex-col items-center gap-2 group">
                <div className="relative w-full bg-blue-50 dark:bg-slate-800 rounded-t-lg h-full flex items-end overflow-hidden">
                   <div 
                     className="w-full bg-blue-600 group-hover:bg-blue-500 transition-all duration-500" 
                     style={{ height: `${h}%` }}
                   ></div>
                </div>
                <span className="text-xs text-gray-400">W{i+1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Breakdown */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Skill Proficiency</h3>
          <div className="space-y-6">
            <ProgressBar label="Python & Data Science" percentage={85} color="bg-blue-600" />
            <ProgressBar label="Web Development (React)" percentage={70} color="bg-purple-600" />
            <ProgressBar label="Database Management" percentage={90} color="bg-green-600" />
            <ProgressBar label="System Design" percentage={60} color="bg-orange-500" />
            <ProgressBar label="Algorithms" percentage={75} color="bg-indigo-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;