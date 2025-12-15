import React from 'react';

// The main submit button (e.g., "Sign In")
export const PrimaryButton = ({ children, onClick, colorClass = "blue" }) => {
  const colorMap = {
    blue: "bg-blue-600 hover:bg-blue-700 shadow-blue-600/20",
    purple: "bg-purple-600 hover:bg-purple-700 shadow-purple-600/20",
    emerald: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20",
  };

  const theme = colorMap[colorClass] || colorMap.blue;

  return (
    <button 
      onClick={onClick}
      className={`w-full ${theme} text-white py-3.5 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all active:scale-[0.98]`}
    >
      {children}
    </button>
  );
};

// The large buttons for switching roles
export const PortalButton = ({ icon: Icon, label, subLabel, onClick, colorClass = "purple" }) => {
  const colorStyles = {
    purple: "hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/10 group-hover:text-purple-600",
    emerald: "hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 group-hover:text-emerald-600",
    blue: "hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10 group-hover:text-blue-600",
  };

  const activeColor = colorStyles[colorClass] || colorStyles.purple;
  const iconColor = colorClass === 'purple' ? 'text-purple-600 dark:text-purple-400' : colorClass === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600';
  const bgColor = colorClass === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' : colorClass === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-blue-100';

  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-start p-4 rounded-xl border border-slate-200 dark:border-slate-800 transition-all group ${activeColor}`}
    >
      <div className={`${bgColor} p-2 rounded-lg mb-3 group-hover:scale-110 transition-transform`}>
        <Icon size={20} className={iconColor} />
      </div>
      <span className="font-bold text-slate-700 dark:text-slate-200 text-sm">{label}</span>
      {subLabel && <span className="text-xs text-slate-500 mt-1 text-left">{subLabel}</span>}
    </button>
  );
};