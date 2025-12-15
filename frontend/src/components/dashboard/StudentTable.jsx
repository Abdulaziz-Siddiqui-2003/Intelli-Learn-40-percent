import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

const StudentTable = () => {
  // Mock Data
  const students = [
    { id: 1, name: "John Doe", aridNo: "19-ARID-1234", semester: "7th", section: "A", status: "Active" },
    { id: 2, name: "Mike Ross", aridNo: "20-ARID-5678", semester: "5th", section: "B", status: "Probation" },
    { id: 3, name: "Rachel Green", aridNo: "21-ARID-9012", semester: "3rd", section: "A", status: "Active" },
    { id: 4, name: "Harvey Specter", aridNo: "19-ARID-1111", semester: "8th", section: "C", status: "Active" },
    { id: 5, name: "Louis Litt", aridNo: "20-ARID-3322", semester: "6th", section: "B", status: "Inactive" },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase font-semibold">
            <tr>
              <th className="px-6 py-4">Student Name</th>
              <th className="px-6 py-4">Arid No</th>
              <th className="px-6 py-4">Semester</th>
              <th className="px-6 py-4">Section</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                       {student.name.charAt(0)}
                     </div>
                     {student.name}
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-mono">{student.aridNo}</td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{student.semester}</td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{student.section}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                    student.status === 'Active' 
                      ? 'bg-green-50 text-green-700 border-green-200' 
                      : student.status === 'Probation'
                      ? 'bg-orange-50 text-orange-700 border-orange-200'
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit size={16} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={16} />
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

export default StudentTable;