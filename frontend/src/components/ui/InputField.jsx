import React from 'react';

const InputField = ({ label, type = "text", placeholder, className = "" }) => {
  return (
    <div className={className}>
      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">
        {label}
      </label>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-medium dark:text-white placeholder:text-slate-400" 
      />
    </div>
  );
};

export default InputField;