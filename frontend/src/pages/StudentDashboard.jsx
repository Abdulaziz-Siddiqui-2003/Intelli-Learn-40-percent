import React, { useEffect, useState } from 'react';
import StudentSidebar from '../components/layout/StudentSidebar';
import StatCard from '../components/dashboard/StatCard';
import CourseCard from '../components/dashboard/CourseCard';
import ToDoWidget from '../components/dashboard/ToDoWidget';
import QuizInterface from '../components/modules/QuizInterface';

import PerformanceAnalytics from '../components/dashboard/PerformanceAnalytics';
import { currentUser, courses, stats } from '../mockData';

// --- Internal Component: Performance Trend Widget ---
// Updated to accept onClick prop for navigation
const PerformanceTrendWidget = ({ onClick }) => {
    const scores = [70, 85, 75, 95, 90];
    return (
        <div className="flex flex-col gap-4 cursor-pointer group" onClick={onClick}>
            <div className="flex items-center justify-between px-1">
                <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">Your Performance Trend</h2>
                <span className="material-symbols-outlined text-gray-400 group-hover:text-purple-600 transition-colors">chevron_right</span>
            </div>
            <div className="rounded-xl p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm group-hover:shadow-md transition-all">
                <p className="font-semibold mb-6 text-gray-700 dark:text-slate-300">Quiz Scores (Last 5)</p>
                <div className="flex justify-between items-end h-[150px] space-x-4">
                    {scores.map((score, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 w-1/5 h-full">
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-t-md h-full flex items-end overflow-hidden">
                                <div 
                                    className="w-full bg-purple-600 rounded-t-md transition-all duration-700 ease-out group-hover:bg-purple-500" 
                                    style={{ height: `${score}%` }}
                                ></div>
                            </div>
                            <span className="text-xs text-gray-500 dark:text-slate-400 font-medium">Quiz {i+1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- Internal Component: AI Recommendations Widget ---
const AIRecommendationsWidget = () => (
    <div className="rounded-xl p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Personalized for You</h3>
        <div className="flex flex-col gap-6">
            <div>
                <h4 className="font-semibold text-base mb-3 text-gray-700 dark:text-slate-300">Recommended for You</h4>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center p-3 rounded-lg bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAr9RVL3H-p7AQRG4Bnv7tHYtkDnIeuuSz37REyTyMZRaI8S00YXK4Rvx5lblRhjx409uZvbEQBpMV_Zto_S6EvU8q4oPFxAVWjysBf2NrkUmX0BCWFUzUCXsBAb_BlRAgPCF8xUbCCD1mymFF37bvnp5IkauxYuQuUwlHOudPKAdOIUGjzuR7iY2qnei5rl8FZ2IxKyMf1rcCSaX8uKHwZxvBQKC1anJTX0oplXmRA_lAo8OAO38cP4bQ1Yw-3I9OupQAK5NaloPs")' }}></div>
                        <div className="flex-1">
                            <p className="font-bold text-gray-900 dark:text-white">Machine Learning A-Z</p>
                            <p className="text-sm text-gray-500 dark:text-slate-400">Build your skills in AI and data modeling.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h4 className="font-semibold text-base mb-3 text-gray-700 dark:text-slate-300">Areas for Improvement</h4>
                <div className="flex flex-col gap-3">
                    <a className="flex items-center gap-3 p-3 rounded-lg bg-purple-100/50 hover:bg-purple-100 dark:bg-purple-900/30 dark:hover:bg-purple-900/50 transition-colors" href="#">
                        <span className="material-symbols-outlined text-purple-600">lightbulb</span>
                        <p className="text-sm font-medium flex-1 text-gray-800 dark:text-white">JavaScript ES6 Features</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
);


const StudentDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeQuiz, setActiveQuiz] = useState(null); 
    const [currentView, setCurrentView] = useState('dashboard'); // Tracks 'dashboard', 'courses', 'analytics'

    // Inject Material Symbols
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    // Helper to render content based on view
    const renderContent = () => {
        // 1. Quiz View (Priority)
        if (activeQuiz) {
            return (
                <QuizInterface 
                    quiz={activeQuiz} 
                    onBack={() => setActiveQuiz(null)} 
                />
            );
        }

        // 2. Performance Analytics View
        if (currentView === 'analytics' || currentView === 'Performance Analytics') {
            return <PerformanceAnalytics />;
        }

        // 3. My Courses View
        if (currentView === 'courses' || currentView === 'My Courses') {
            return (
                <div className="p-4 sm:p-6 lg:p-8 animate-fade-in">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-3xl font-black text-gray-900 dark:text-white">My Courses</h1>
                            <p className="text-gray-500 dark:text-slate-400">Manage and view all your enrolled courses.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {courses.map((course) => (
                                <CourseCard 
                                    key={course.id} 
                                    course={course} 
                                    actionLabel="View Course" // Explicit label for Student View
                                />
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        // 4. Default Dashboard View
        return (
            <div className="p-4 sm:p-6 lg:p-8 animate-fade-in">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* Primary Column (Wide) */}
                    <div className="xl:col-span-2 flex flex-col gap-8">
                        {/* Page Heading */}
                        <div className="flex flex-wrap justify-between gap-3">
                            <div className="flex flex-col gap-1">
                                <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white">Welcome back, {currentUser.name.split(' ')[0]}!</p>
                                <p className="text-gray-500 dark:text-slate-400 text-base font-normal leading-normal">Let's continue your learning journey.</p>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard 
                                title="Overall Completion" 
                                value={stats.student.completion} 
                                unit="%" 
                                progress={stats.student.completion} 
                                color="purple"
                            />
                            <StatCard 
                                title="Average Score" 
                                value={stats.student.avgScore} 
                                unit="%" 
                                color="green"
                                icon="percent"
                            />
                            <StatCard 
                                title="Hours Studied" 
                                value={stats.student.hours} 
                                unit="" 
                                color="blue"
                                icon="schedule"
                            />
                        </div>

                        {/* Courses Carousel Section */}
                        <div>
                            <div className="flex items-center justify-between px-1 pb-4">
                                <h2 className="text-[22px] font-bold tracking-tight text-gray-900 dark:text-white">Your Courses</h2>
                                <button 
                                    onClick={() => setCurrentView('courses')}
                                    className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                    View All
                                </button>
                            </div>
                            <div className="flex overflow-x-auto space-x-6 pb-4 -mx-10 px-10">
                                {courses.slice(0, 4).map((course) => ( // Show only first 4 in dashboard
                                    <div key={course.id} className="min-w-[320px] flex-shrink-0">
                                        <CourseCard 
                                            course={course} 
                                            actionLabel="View Course"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Data Viz Widget */}
                        <PerformanceTrendWidget onClick={() => setCurrentView('analytics')} />
                    </div>

                    {/* Secondary Column (Narrow) */}
                    <div className="flex flex-col gap-8">
                        {/* To-Do Section */}
                        <ToDoWidget onTaskClick={(task) => setActiveQuiz(task)} />
                        
                        {/* AI Recommendations */}
                        <AIRecommendationsWidget />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex min-h-screen w-full bg-gray-50 dark:bg-black font-sans text-gray-900 dark:text-white">
            {/* Sidebar with Navigation Handler */}
            <StudentSidebar 
                isOpen={sidebarOpen} 
                onClose={() => setSidebarOpen(false)} 
                currentView={currentView}
                onNavigate={setCurrentView}
            />

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm transition-opacity"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="flex-1 h-screen overflow-y-auto flex flex-col">
                {/* Mobile Header */}
                <div className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 sticky top-0 z-20">
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => setSidebarOpen(true)}
                            className="p-2 -ml-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <span className="font-bold text-lg">IntelliLearn</span>
                    </div>
                    <div 
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" 
                        style={{ backgroundImage: `url("${currentUser.avatar}")` }}
                    ></div>
                </div>

                {/* Render Content Based on State */}
                {renderContent()}
                
            </main>
        </div>
    );
};

export default StudentDashboard;