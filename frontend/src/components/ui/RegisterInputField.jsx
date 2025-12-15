import React from 'react';

const RegisterInputField = ({ label, type = "text", placeholder, value, onChange, name, error, pattern }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        pattern={pattern}
        className={`px-4 py-3 rounded-xl border bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 transition-all duration-200
          ${error 
            ? 'border-red-500 focus:ring-red-200' 
            : 'border-gray-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-200 dark:focus:ring-blue-900'
          } text-gray-900 dark:text-white placeholder-gray-400`}
      />
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  );
};

export default RegisterInputField;