import React from 'react';

const SelectField = ({ label, name, value, onChange, options, placeholder = "Select option", error }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-900 appearance-none focus:outline-none focus:ring-2 transition-all duration-200
            ${error 
              ? 'border-red-500 focus:ring-red-200' 
              : 'border-gray-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-200 dark:focus:ring-blue-900'
            } text-gray-900 dark:text-white cursor-pointer`}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {/* Dropdown Icon */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  );
};

export default SelectField;