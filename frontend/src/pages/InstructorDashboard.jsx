import React, { useState, useEffect } from 'react';

// --- Layout & UI Imports ---
import InstructorSidebar from '../components/layout/InstructorSidebar';
import PageHeader from '../components/ui/PageHeader';

// --- Internal Dashboard Components ---
import CourseCard from '../components/dashboard/CourseCard';
// REMOVED unused StatCard import

// --- Modules ---
import { QuizGenerator, AESGrader } from '../components/modules/AiModules'; 

// --- Feature Views ---
import InstructorCourseView from '../components/dashboard/InstructorCourseView';
import InstructorStudentView from '../components/dashboard/InstructorStudentView';
import InstructorAnalyticsView from '../components/dashboard/InstructorAnalyticsView';

// --- Data ---
import { courses, stats } from '../mockData';

// --- Local Helper Component ---
const DashboardStatCard = ({ label, value, icon, change }) => (
  <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-2">
      <div className="p-2 bg-blue-50 dark:bg-slate-800 rounded-lg text-blue-600 dark:text-blue-400">
        <span className="material-symbols-outlined text-[24px]">{icon}</span>
      </div>
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${change.includes('+') ? 'bg-green-100 text-green-700' : change === '0%' ? 'bg-gray-100 text-gray-600' : 'bg-red-100 text-red-700'}`}>
        {change}
      </span>
    </div>
    <p className="text-2xl font-black text-gray-900 dark:text-white mb-0.5">{value}</p>
    <p className="text-sm font-medium text-gray-500 dark:text-slate-400">{label}</p>
  </div>
);

const InstructorDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

  // Load Material Symbols Font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Page Titles
  const titles = {
    'dashboard': { title: 'Overview', subtitle: "Welcome back, Dr. Vance. Here's what's happening today.", action: "New Course" },
    'quiz-gen': { title: 'Quiz Generator', subtitle: "Create AI-powered assessments in seconds.", action: "View History" },
    'aes-grading': { title: 'Smart Grading', subtitle: "AI-assisted essay scoring and feedback.", action: "Settings" },
    'courses': { title: 'Course Management', subtitle: "Manage your courses and learning content.", action: "Import Content" },
    'students': { title: 'Student Roster', subtitle: "View student progress by section.", action: "Export Data" },
    'analytics': { title: 'Class Analytics', subtitle: "Track overall class performance and engagement.", action: "Download Report" }
  };

  const activePage = titles[currentView] || titles['dashboard'];

  // Stats Data
  const dashboardStats = [
    { label: "Total Students", value: stats.instructor.totalStudents, icon: "group", change: "+12%" },
    { label: "Active Courses", value: stats.instructor.activeCourses, icon: "book", change: "0%" },
    { label: "Avg. Rating", value: "4.8", icon: "star", change: "+0.2" },
    { label: "Pending Grading", value: stats.instructor.pendingGrading, icon: "assignment", change: "-5" },
  ];

  return (
    <div className="relative flex h-screen w-full flex-row bg-[#F8FAFC] dark:bg-black font-sans overflow-hidden">
      
      <InstructorSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        currentView={currentView}
        onNavigate={setCurrentView}
      />

      <main className="flex-1 h-full overflow-y-auto w-full transition-all">
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          
          <PageHeader 
            title={activePage.title}
            subtitle={activePage.subtitle}
            actionLabel={activePage.action}
            onMenuClick={() => setSidebarOpen(true)}
          />

          {currentView === 'dashboard' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                {dashboardStats.map((stat, i) => (
                    <DashboardStatCard key={i} {...stat} />
                ))}
              </div>

              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Active Courses</h2>
                <div className="relative group min-w-[240px] hidden sm:block">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-gray-400 group-focus-within:text-blue-600 transition-colors text-[20px]">search</span>
                  </div>
                  <input 
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-slate-700 rounded-lg leading-5 bg-white dark:bg-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all sm:text-sm"
                    placeholder="Search your courses..." 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-10">
                {courses.map(course => <CourseCard key={course.id} course={course} />)}
              </div>
            </div>
          )}

          {currentView === 'quiz-gen' && (
            <div className="animate-slide-up">
               <QuizGenerator />
            </div>
          )}

          {currentView === 'aes-grading' && (
            <div className="animate-slide-up">
              <AESGrader />
            </div>
          )}

          {/* PASSING COURSES AS A PROP HERE IS CRITICAL FOR THE SECOND ERROR */}
          {currentView === 'courses' && <InstructorCourseView courses={courses} />}

          {currentView === 'students' && <InstructorStudentView />}

          {currentView === 'analytics' && <InstructorAnalyticsView />}

        </div>
      </main>
    </div>
  );
};

export default InstructorDashboard;