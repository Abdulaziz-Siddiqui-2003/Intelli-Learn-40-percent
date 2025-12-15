import React from 'react';
import { Plus, Search, MoreVertical, BookOpen, Users, Clock } from 'lucide-react';

const AdminCourses = () => {
  // Mock Data
  const courses = [
    { id: 1, title: "Advanced React Patterns", instructor: "Dr. Sarah Smith", students: 145, status: "Published", lastUpdated: "2h ago" },
    { id: 2, title: "Introduction to Data Science", instructor: "Dr. Gregory House", students: 89, status: "Draft", lastUpdated: "1d ago" },
    { id: 3, title: "UI/UX Design Fundamentals", instructor: "Mr. James Bond", students: 210, status: "Published", lastUpdated: "5h ago" },
    { id: 4, title: "Database Management Systems", instructor: "Ms. Donna Paulsen", students: 165, status: "Archived", lastUpdated: "1w ago" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Course Management</h1>
          <p className="text-slate-500 dark:text-slate-400">Oversee all courses, curriculum, and enrollments.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-bold shadow-sm hover:bg-emerald-700 transition-all">
          <Plus size={18} />
          Create New Course
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search courses by title or instructor..." 
          className="w-full pl-10 pr-4 py-3 text-sm border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-950 outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
        />
      </div>

      {/* Course List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="group bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-all hover:border-emerald-500/50">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 rounded-lg">
                <BookOpen size={24} />
              </div>
              <button className="text-slate-400 hover:text-slate-600 dark:hover:text-white">
                <MoreVertical size={20} />
              </button>
            </div>
            
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 transition-colors">
              {course.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              by {course.instructor}
            </p>

            <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800">
               <div className="flex items-center gap-1.5">
                  <Users size={14} />
                  {course.students} Students
               </div>
               <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {course.lastUpdated}
               </div>
            </div>

            <div className={`mt-3 inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
              course.status === 'Published' ? 'bg-green-100 text-green-700' :
              course.status === 'Draft' ? 'bg-yellow-100 text-yellow-700' :
              'bg-slate-100 text-slate-600'
            }`}>
              {course.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCourses;