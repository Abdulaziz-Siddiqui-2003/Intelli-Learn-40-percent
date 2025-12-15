import React from 'react';

const StatCard = ({ title, value, unit, progress, color, icon: Icon }) => {
    // Determine the color class for the progress circle and text
    const colorClasses = {
        green: 'text-emerald-500',
        purple: 'text-purple-500',
        blue: 'text-blue-500',
        orange: 'text-orange-500',
        red: 'text-red-500',
    };

    const accentClass = colorClasses[color] || 'text-blue-500';

    // Calculate circumference and dashoffset for SVG circle (r=16)
    const radius = 16;
    const circumference = 2 * Math.PI * radius; 
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{title}</p>
            
            {unit === '%' && progress !== undefined ? (
                // Circular Progress Display
                <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            {/* Background Circle */}
                            <circle 
                                cx="18" cy="18" r={radius} 
                                fill="none" 
                                className="stroke-slate-200 dark:stroke-slate-800" 
                                strokeWidth="3"
                            ></circle>
                            {/* Foreground Progress Arc */}
                            <circle 
                                cx="18" cy="18" r={radius} 
                                fill="none" 
                                className={`stroke-current ${accentClass} transition-all duration-1000 ease-out`}
                                strokeWidth="3"
                                strokeDasharray={circumference} 
                                strokeDashoffset={offset} 
                                strokeLinecap="round" 
                            ></circle>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className={`text-xs font-bold ${accentClass}`}>{progress}%</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-3xl font-bold leading-tight text-slate-900 dark:text-white">{value}{unit}</p>
                        <span className="text-xs text-slate-400">Target Reached</span>
                    </div>
                </div>
            ) : (
                // Simple Stat Display with Icon
                <div className="flex items-center justify-between">
                    <div>
                         <p className="text-3xl font-bold leading-tight text-slate-900 dark:text-white mb-1">{value}{unit}</p>
                         <span className="text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-md">
                            +12% vs last month
                         </span>
                    </div>
                    <div className={`p-3 rounded-xl bg-opacity-10 ${accentClass.replace('text-', 'bg-')} ${accentClass}`}>
                        {Icon && <Icon size={28} strokeWidth={2} />}
                    </div>
                </div>
            )}
        </div>
    );
};

export default StatCard;