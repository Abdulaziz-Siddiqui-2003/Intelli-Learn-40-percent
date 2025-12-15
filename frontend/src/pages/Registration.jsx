import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../components/auth/RegistrationForm'; 
import InstructorRegistrationForm from '../components/auth/InstructorRegistrationForm'; 

const Registration = () => {
  const [activeTab, setActiveTab] = useState('student'); // 'student' or 'instructor'

  return (
    <div className="min-h-screen w-full flex font-sans bg-white dark:bg-slate-900">
      
      {/* --- LEFT SIDE: BRANDING (Hidden on mobile) --- */}
      <div className={`hidden lg:flex w-1/2 relative overflow-hidden transition-all duration-700 ${
         activeTab === 'student' ? 'bg-slate-900' : 'bg-indigo-950'
      }`}>
        {/* Background Pattern/Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        {/* Branding Content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-16 text-white">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
               <span className="material-symbols-outlined text-white">school</span>
            </div>
            <span className="text-xl font-bold tracking-tight">IntelliLearn</span>
          </div>

          <div className="mb-12">
            <h1 className="text-6xl font-black leading-tight mb-6">
              Master Your <br/>
              <span className={activeTab === 'student' ? 'text-blue-500' : 'text-indigo-400'}>
                Learning
              </span> Journey.
            </h1>
            <p className="text-lg text-slate-300 max-w-md leading-relaxed">
              {activeTab === 'student' 
                ? "Access your personalized dashboard, track your progress, and get instant AI-powered feedback on your assignments."
                : "Empower your students with AI-driven insights, streamlined grading, and comprehensive course management tools."
              }
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-400 font-medium">
            <span>© 2025 IntelliLearn Platform</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: REGISTRATION FORM --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-12 lg:p-20 overflow-y-auto">
        <div className="max-w-xl mx-auto w-full">
          
          {/* Header Mobile Only Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
               <span className="material-symbols-outlined text-white text-sm">school</span>
            </div>
            <span className="text-lg font-bold text-slate-900 dark:text-white">IntelliLearn</span>
          </div>

          {/* Registration Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Create your account</h2>
            <p className="text-slate-500 dark:text-slate-400">
              Join us today! Please enter your details below.
            </p>
          </div>

          {/* Role Switcher Tabs */}
          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex mb-8">
            <button
              onClick={() => setActiveTab('student')}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ${
                activeTab === 'student'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
              }`}
            >
              I am a Student
            </button>
            <button
              onClick={() => setActiveTab('instructor')}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ${
                activeTab === 'instructor'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
              }`}
            >
              I am an Instructor
            </button>
          </div>

          {/* The Actual Forms */}
          <div className="animate-fade-in">
            {activeTab === 'student' ? (
              <RegistrationForm />
            ) : (
              <InstructorRegistrationForm />
            )}
          </div>

          {/* Clear Distinction for Login */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-slate-500 dark:text-slate-400">
              Already have an account?{' '}
              <Link 
                to={activeTab === 'student' ? '/student/login' : '/instructor/login'} 
                className="font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 transition-colors"
              >
                Log in here
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Registration;