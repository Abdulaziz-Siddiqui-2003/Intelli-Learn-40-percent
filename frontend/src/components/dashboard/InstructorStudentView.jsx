const InstructorStudentView = () => {
    // Mock Data for Sections
    const sections = [
        { 
            id: 'sec-a', 
            name: 'Section A - Introduction to AI', 
            count: 34,
            students: [
                { id: 1, name: 'Alex Johnson', email: 'alex.j@uni.edu', progress: 85, status: 'Active' },
                { id: 2, name: 'Sam Smith', email: 'sam.s@uni.edu', progress: 92, status: 'Active' },
                { id: 3, name: 'Taylor Doe', email: 'taylor.d@uni.edu', progress: 45, status: 'At Risk' },
            ]
        },
        { 
            id: 'sec-b', 
            name: 'Section B - Advanced ML', 
            count: 28, 
            students: [
                { id: 4, name: 'Jordan Lee', email: 'jordan.l@uni.edu', progress: 78, status: 'Active' },
                { id: 5, name: 'Casey West', email: 'casey.w@uni.edu', progress: 88, status: 'Active' },
            ] 
        }
    ];

    return (
        <div className="animate-fade-in space-y-6">
            {sections.map(section => (
                <div key={section.id} className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-sm">
                    <div className="p-5 bg-gray-50 dark:bg-slate-800/50 border-b border-gray-200 dark:border-slate-800 flex flex-wrap gap-4 justify-between items-center">
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-blue-500">class</span>
                                {section.name}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1 pl-8">{section.count} Students Enrolled</p>
                        </div>
                        <button className="text-blue-600 text-sm font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20 px-4 py-2 rounded-lg transition-colors">
                            View Full Roster
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-gray-50/50 dark:bg-slate-900 text-gray-500 border-b border-gray-100 dark:border-slate-800">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Student Name</th>
                                    <th className="px-6 py-4 font-medium">Email</th>
                                    <th className="px-6 py-4 font-medium">Progress</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                                {section.students.map(student => (
                                    <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">{student.name}</td>
                                        <td className="px-6 py-4 text-gray-500">{student.email}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden w-24">
                                                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${student.progress}%` }}></div>
                                                </div>
                                                <span className="text-xs font-bold w-8">{student.progress}%</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                                                student.status === 'Active' 
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-900' 
                                                : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-900'
                                            }`}>
                                                {student.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-1 rounded-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors">
                                                <span className="material-symbols-outlined text-xl">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InstructorStudentView;