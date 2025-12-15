import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course, actionLabel = "View Course", onClick }) => {
  return (
    <div className="group flex flex-col bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute bottom-4 left-4 z-20">
          <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded mb-2 shadow-sm">
            Fall 2024
          </span>
          <h3 className="text-white font-bold text-lg leading-tight shadow-sm">
            {course.title}
          </h3>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-gray-500 dark:text-slate-400 text-sm line-clamp-2 mb-4 flex-1">
          {course.description}
        </p>
        
        <div className="space-y-3 mt-auto">
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-gray-700 dark:text-gray-300">Class Progress</span>
              <span className="text-blue-600">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-1000" 
                style={{ width: `${course.progress}%` }} 
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-slate-800">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="material-symbols-outlined text-[18px]">group</span>
              <span>{course.students} Students</span>
            </div>
            
            {/* Dynamic Action Button */}
            {onClick ? (
               <button 
                 onClick={() => onClick(course.id)}
                 className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors flex items-center gap-1"
               >
                 {actionLabel} <span className="material-symbols-outlined text-sm">arrow_forward</span>
               </button>
            ) : (
               <Link 
                 to={`/student/courses/${course.id}`}
                 className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors flex items-center gap-1"
               >
                 {actionLabel} <span className="material-symbols-outlined text-sm">arrow_forward</span>
               </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;