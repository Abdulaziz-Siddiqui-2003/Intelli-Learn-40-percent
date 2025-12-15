import React from 'react';
import { Edit, Mail } from 'lucide-react';

const InstructorTable = () => {
  // Mock Data
  const instructors = [
    { id: 1, name: "Dr. Sarah Smith", designation: "Assistant Professor", dept: "Computer Science", status: "Active" },
    { id: 2, name: "Mr. James Bond", designation: "Lecturer", dept: "Software Engineering", status: "Active" },
    { id: 3, name: "Ms. Donna Paulsen", designation: "Lab Instructor", dept: "IT", status: "On Leave" },
    { id: 4, name: "Dr. Gregory House", designation: "Professor", dept: "Data Science", status: "Active" },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase font-semibold">
            <tr>
              <th className="px-6 py-4">Instructor Name</th>
              <th className="px-6 py-4">Designation</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {instructors.map((inst) => (
              <tr key={inst.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">
                       {inst.name.charAt(0)}
                     </div>
                     {inst.name}
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{inst.designation}</td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{inst.dept}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                    inst.status === 'Active' 
                      ? 'bg-green-50 text-green-700 border-green-200' 
                      : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                  }`}>
                    {inst.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                        <Mail size={16} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorTable;