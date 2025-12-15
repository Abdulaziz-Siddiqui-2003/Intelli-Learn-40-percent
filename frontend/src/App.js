import React from 'react';
import { HashRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';

// --- Import Pages ---
import Registration from './pages/Registration'; 
import StudentAuth from './pages/StudentAuth';
import InstructorAuth from './pages/InstructorAuth';
import AdminAuth from './pages/admin/AdminAuth';

import StudentDashboard from './pages/StudentDashboard';
import InstructorDashboard from './pages/InstructorDashboard';

// --- Import Admin Pages & Layout ---
import AdminLayout from './components/layout/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';       // New Import
import AdminCourses from './pages/admin/AdminCourses';   // New Import
import AdminAnalytics from './pages/admin/AdminAnalytics'; // New Import
import AdminSettings from './pages/admin/AdminSettings';   // New Import

import { courses } from './mockData';

// --- Internal Component: Course Detail View ---
const CourseView = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black text-gray-900 dark:text-white font-sans">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Course Not Found</h2>
          <Link to="/student/dashboard" className="text-blue-600 hover:underline">Return to Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black p-8 font-sans text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/student/dashboard" className="flex items-center gap-2 text-gray-500 mb-6 hover:text-blue-600 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span> Back to Dashboard
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Panel */}
          <div className="lg:col-span-2 space-y-6">
             <div className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-gray-100 dark:border-slate-800 shadow-sm">
               <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
               <p className="text-gray-500 mb-6">{course.description}</p>
               
               {/* Video Player Placeholder */}
               <div className="aspect-video bg-black rounded-lg flex items-center justify-center text-white mb-6 group cursor-pointer relative overflow-hidden">
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                   <span className="material-symbols-outlined text-6xl opacity-80 group-hover:scale-110 transition-transform">play_circle</span>
                 </div>
                 <img src={course.image} alt="Video Thumbnail" className="w-full h-full object-cover opacity-60" />
               </div>

               <h3 className="font-bold text-xl mb-4">Course Content</h3>
               <div className="space-y-3">
                 {course.modules.map((mod, i) => (
                   <div key={i} className="flex items-center justify-between p-4 border border-gray-100 dark:border-slate-800 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                     <div className="flex items-center gap-3">
                       <div className={`size-8 rounded-full flex items-center justify-center text-white ${mod.completed ? 'bg-green-500' : 'bg-gray-300 dark:bg-slate-700'}`}>
                         <span className="material-symbols-outlined text-sm">{mod.completed ? 'check' : 'lock'}</span>
                       </div>
                       <span className="font-medium">{mod.title}</span>
                     </div>
                     {/* Link to AES Assignment if the module type matches */}
                     {mod.type === 'aes' ? (
                       <Link to="/student/assignments" className="px-4 py-1 bg-blue-600 text-white text-sm font-bold rounded hover:bg-blue-700 transition-colors">Start Assignment</Link>
                     ) : (
                       <button className="text-gray-400 hover:text-blue-600">View</button>
                     )}
                   </div>
                 ))}
               </div>
             </div>
          </div>

          {/* Right Sidebar Panel */}
          <div className="space-y-6">
             <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-gray-100 dark:border-slate-800 shadow-sm">
                <h3 className="font-bold mb-4">Instructor</h3>
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-gray-200 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://i.pravatar.cc/150?u=eleanor")'}}></div>
                  <div>
                    <p className="font-medium">{course.instructor}</p>
                    <p className="text-xs text-gray-500">PhD, Computer Science</p>
                  </div>
                </div>
                <button className="w-full mt-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  Message Instructor
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        
        {/* --- Public / Auth Routes --- */}
        <Route path="/" element={<Registration />} />
        <Route path="/student/registration" element={<Registration />} />
        
        <Route path="/student/login" element={<StudentAuth />} />
        <Route path="/instructor/login" element={<InstructorAuth />} />
        <Route path="/admin/login" element={<AdminAuth />} />

        {/* --- Student Routes --- */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/courses" element={<StudentDashboard />} />
        <Route path="/student/courses/:id" element={<CourseView />} />
        <Route path="/student/assignments" element={
          <div className="min-h-screen bg-gray-50 dark:bg-black pt-8 font-sans text-gray-900 dark:text-white">
             <Link to="/student/dashboard" className="ml-8 mb-4 inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                <span className="material-symbols-outlined">arrow_back</span> Exit Assignment
             </Link>
             <div className="p-8 text-center">Assignment Interface Component Here</div>
          </div>
        } />
        <Route path="/student/analytics" element={<div className="p-10 text-center dark:text-white">Analytics Page Under Construction</div>} />

        {/* --- Instructor Routes --- */}
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        <Route path="/instructor/courses" element={<InstructorDashboard />} />
        <Route path="/instructor/quiz-generator" element={
          <div className="min-h-screen bg-gray-50 dark:bg-black pt-8 font-sans text-gray-900 dark:text-white">
             <Link to="/instructor/dashboard" className="ml-8 mb-4 inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                <span className="material-symbols-outlined">arrow_back</span> Back to Dashboard
             </Link>
             <div className="p-8 text-center">Quiz Generator Component Here</div>
          </div>
        } />
        <Route path="/instructor/analytics" element={<div className="p-10 text-center dark:text-white">Instructor Analytics Under Construction</div>} />

        {/* --- Admin Routes --- */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;