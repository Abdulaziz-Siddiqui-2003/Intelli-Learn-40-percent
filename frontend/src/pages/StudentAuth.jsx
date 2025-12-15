import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, ShieldCheck, AlertCircle } from 'lucide-react';

// Import Layout and Buttons
import AuthLayout from '../components/auth/AuthLayout';
import { PrimaryButton, PortalButton } from '../components/ui/Button';

export const StudentAuth = () => {
  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Security Check
      if (data.role !== 'student') {
        throw new Error('Access Denied: This account is not a Student account.');
      }

      // Success
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/student/dashboard');

    } catch (err) {
      setError(err.message === 'Failed to fetch' 
        ? 'Server unavailable. Check if backend is running on port 5000.' 
        : err.message);
    } finally {
      setLoading(false);
    }
  };

  const LeftPanelContent = (
    <>
      <h1 className="text-6xl font-black leading-tight mb-6 tracking-tight">
        Master Your <span className="text-blue-500">Learning</span> Journey.
      </h1>
      <p className="text-slate-400 text-lg leading-relaxed">
        Access your personalized dashboard, track your progress, and get instant AI-powered feedback on your assignments.
      </p>
    </>
  );

  const RightPanelContent = (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Student Portal</h2>
        <p className="text-slate-500 dark:text-slate-400">Welcome back! Please enter your details.</p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 animate-fade-in">
          <AlertCircle size={20} />
          <span className="text-sm font-medium">{error}</span>
        </div>
      )}

      {/* Login Form with STANDARD INPUTS */}
      <form onSubmit={handleLogin} className="space-y-6">
        
        {/* Email Input */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Student Email
          </label>
          <input
            type="email"
            required
            placeholder="student@university.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder-slate-400"
          />
        </div>
        
        {/* Password Input */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Password
          </label>
          <input
            type="password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder-slate-400"
          />
          <div className="flex justify-end mt-2">
            {/* CHANGED FROM <a href> TO <button> TO FIX WARNING */}
            <button 
              type="button" 
              className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline bg-transparent border-none cursor-pointer p-0"
              onClick={() => alert("Reset password feature coming soon!")}
            >
              Forgot password?
            </button>
          </div>
        </div>

        <PrimaryButton 
          colorClass="blue" 
          type="submit" 
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </PrimaryButton>
      </form>

      {/* Divider */}
      <div className="my-8 flex items-center gap-4">
        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Access Other Portals</span>
        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
      </div>

      {/* Navigation Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <PortalButton 
          onClick={() => navigate('/instructor/login')}
          icon={GraduationCap}
          label="Instructor"
          subLabel="Manage courses"
          colorClass="purple"
        />
        
        <PortalButton 
          onClick={() => navigate('/admin/login')}
          icon={ShieldCheck}
          label="Admin"
          subLabel="System config"
          colorClass="emerald"
        />
      </div>
    </>
  );

  return (
    <AuthLayout 
      leftContent={LeftPanelContent}
      rightContent={RightPanelContent}
      themeColor="blue"
    />
  );
};

export default StudentAuth;