const InstructorAnalyticsView = () => (
    <div className="animate-fade-in space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-purple-600 rounded-2xl p-6 text-white shadow-lg shadow-purple-200 dark:shadow-none">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-purple-100 text-sm font-medium mb-1">Total Class Average</p>
                        <h3 className="text-3xl font-black mb-1">84.5%</h3>
                    </div>
                    <span className="material-symbols-outlined bg-white/20 p-2 rounded-lg">analytics</span>
                </div>
                <p className="text-xs bg-black/20 inline-block px-2 py-1 rounded-lg mt-2">+2.4% vs last month</p>
            </div>
            <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-200 dark:shadow-none">
                 <div className="flex items-start justify-between">
                    <div>
                        <p className="text-blue-100 text-sm font-medium mb-1">Quiz Completion Rate</p>
                        <h3 className="text-3xl font-black mb-1">92%</h3>
                    </div>
                    <span className="material-symbols-outlined bg-white/20 p-2 rounded-lg">done_all</span>
                </div>
                <p className="text-xs bg-black/20 inline-block px-2 py-1 rounded-lg mt-2">High Engagement</p>
            </div>
            <div className="bg-orange-500 rounded-2xl p-6 text-white shadow-lg shadow-orange-200 dark:shadow-none">
                 <div className="flex items-start justify-between">
                    <div>
                        <p className="text-orange-100 text-sm font-medium mb-1">Pending Essays</p>
                        <h3 className="text-3xl font-black mb-1">14</h3>
                    </div>
                    <span className="material-symbols-outlined bg-white/20 p-2 rounded-lg">assignment_late</span>
                </div>
                <p className="text-xs bg-black/20 inline-block px-2 py-1 rounded-lg mt-2">Needs Attention</p>
            </div>
        </div>

        {/* Detailed Chart Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-6">Class Progress Over Time</h3>
                <div className="h-64 flex items-end justify-between gap-2 px-2">
                    {[65, 72, 68, 85, 82, 90, 88, 94, 91, 88, 92, 95].map((val, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 flex-1 group cursor-pointer h-full justify-end">
                            <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-t-lg relative flex items-end overflow-hidden h-full">
                                <div 
                                    className="w-full bg-blue-500 group-hover:bg-purple-500 transition-all duration-300 rounded-t-lg" 
                                    style={{ height: `${val}%` }}
                                ></div>
                            </div>
                            <span className="text-xs text-gray-400 font-medium">W{i+1}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-6">Engagement by Section</h3>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600 dark:text-gray-400">Section A</span>
                            <span className="font-bold text-gray-900 dark:text-white">88%</span>
                        </div>
                        <div className="h-2 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[88%] rounded-full"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600 dark:text-gray-400">Section B</span>
                            <span className="font-bold text-gray-900 dark:text-white">74%</span>
                        </div>
                        <div className="h-2 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-500 w-[74%] rounded-full"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600 dark:text-gray-400">Section C</span>
                            <span className="font-bold text-gray-900 dark:text-white">92%</span>
                        </div>
                        <div className="h-2 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[92%] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default InstructorAnalyticsView;