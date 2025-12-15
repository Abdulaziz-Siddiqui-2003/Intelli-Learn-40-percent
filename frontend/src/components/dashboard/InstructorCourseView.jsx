import React from 'react';
import CourseCard from './CourseCard'; // Ensure this path is correct based on your folder structure

// ACCEPT 'courses' AS A PROP HERE
const InstructorCourseView = ({ courses }) => (
    <div className="animate-fade-in space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add New Course Card */}
            <button className="flex flex-col items-center justify-center min-h-[320px] border-2 border-dashed border-gray-300 dark:border-slate-700 rounded-2xl hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group h-full">
                <div className="p-4 rounded-full bg-gray-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 text-gray-400 group-hover:text-blue-600 mb-4 transition-colors">
                    <span className="material-symbols-outlined text-3xl">add</span>
                </div>
                <h3 className="font-bold text-lg text-gray-600 dark:text-gray-300 group-hover:text-blue-600">Create New Course</h3>
            </button>

            {/* Existing Courses with Management Actions */}
            {/* Now 'courses' comes from the prop, so this map function will work */}
            {courses && courses.map(course => (
                <div key={course.id} className="relative group h-full rounded-2xl overflow-hidden">
                    {/* The Card - Base Layer */}
                    <div className="h-full">
                        <CourseCard course={course} />
                    </div>
                    
                    {/* The Overlay */}
                    <div className="absolute inset-0 z-20 bg-white/95 dark:bg-slate-900/95 opacity-0 group-hover:opacity-100 transition-all duration-200 flex flex-col items-center justify-center gap-3 backdrop-blur-sm border border-gray-200 dark:border-slate-700 pointer-events-none group-hover:pointer-events-auto">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Manage Course</h4>
                        
                        <button className="w-40 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 px-4 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 dark:hover:bg-slate-700 flex items-center justify-center gap-2 shadow-sm transition-colors group/btn">
                            <span className="material-symbols-outlined text-xl group-hover/btn:text-blue-600 transition-colors">edit</span> 
                            Edit Info
                        </button>
                        
                        <button className="w-40 bg-blue-600 text-white px-4 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 flex items-center justify-center gap-2 shadow-md shadow-blue-200 dark:shadow-none transition-colors group/btn">
                            <span className="material-symbols-outlined text-xl">upload_file</span> 
                            Content
                        </button>
                        
                        <button className="w-40 bg-purple-600 text-white px-4 py-3 rounded-xl font-bold text-sm hover:bg-purple-700 flex items-center justify-center gap-2 shadow-md shadow-purple-200 dark:shadow-none transition-colors group/btn">
                            <span className="material-symbols-outlined text-xl">settings</span> 
                            Settings
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default InstructorCourseView;