import React from 'react';
import { nextTasks } from '../../mockData';

const ToDoWidget = ({ onTaskClick }) => {
  return (
    <div className="rounded-xl p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">What's Next</h3>
        <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
          {nextTasks.length} Pending
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {nextTasks.map((task) => (
          <div 
            key={task.id}
            onClick={() => task.type === 'quiz' && onTaskClick(task)} // Only quizzes are clickable for this demo
            className={`group p-4 rounded-xl border transition-all duration-200 relative overflow-hidden ${
              task.type === 'quiz' 
                ? 'cursor-pointer hover:border-blue-300 hover:shadow-md border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900' 
                : 'cursor-default border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50'
            }`}
          >
            {/* Visual Indicator for Clickable Quiz */}
            {task.type === 'quiz' && (
               <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600">
                 <span className="material-symbols-outlined">arrow_forward</span>
               </div>
            )}

            <div className="flex justify-between items-start mb-2 relative z-10">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                task.type === 'quiz' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'
              }`}>
                {task.type === 'quiz' ? 'Upcoming Quiz' : 'Assignment'}
              </span>
              <span className={`text-xs font-bold ${
                task.due === 'Today' ? 'text-red-500' : 'text-gray-400'
              }`}>
                Due: {task.due}
              </span>
            </div>
            
            <h4 className={`font-bold text-gray-800 dark:text-white mb-1 ${task.type === 'quiz' ? 'group-hover:text-blue-600 transition-colors' : ''}`}>
              {task.title}
            </h4>
            <p className="text-xs text-gray-500 dark:text-slate-400 line-clamp-1">{task.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoWidget;