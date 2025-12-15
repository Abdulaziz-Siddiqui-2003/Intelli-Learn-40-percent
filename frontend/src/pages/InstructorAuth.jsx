import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PenTool, ArrowLeft, AlertCircle } from 'lucide-react';
import AuthLayout from '../components/auth/AuthLayout';

export const InstructorAuth = () => {
  const navigate = useNavigate();

  // State Management
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle Login Logic
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

      // Security Check: Ensure the user is actually an Instructor
      if (data.role !== 'instructor') {
        throw new Error('Access Denied: This account is not registered as an Instructor.');
      }

      // Save user info
      localStorage.setItem('userInfo', JSON.stringify(data));

      navigate('/instructor/dashboard');

    } catch (err) {
      setError(err.message === 'Failed to fetch' 
        ? 'Server unavailable. Is the backend running?' 
        : err.message);
    } finally {
      setLoading(false);
    }
  };

  // --- Content for the Left Panel ---
  const leftSideContent = (
    <>
      <h1 className="text-5xl font-black leading-tight mb-6 tracking-tight">
        Empower the Next <br/> <span className="text-purple-400">Generation.</span>
      </h1>
      <p className="text-slate-300 text-lg leading-relaxed">
        Create engaging content, generate quizzes instantly with AI, and grade assessments with precision.
      </p>
    </>
  );

  // --- Content for the Right Panel (Form) ---
  const rightSideContent = (
    <>
      <div className="mb-8">
        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 text-purple-600">
           <PenTool size={24} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Instructor Login</h2>
        <p className="text-slate-500 dark:text-slate-400">Access your teaching dashboard.</p>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 animate-fade-in">
          <AlertCircle size={20} />
          <span className="text-sm font-medium">{error}</span>
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
          <input 
            type="email" 
            placeholder="instructor@university.edu" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder-slate-400" 
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder-slate-400" 
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
        
        <button 
          type="submit"
          disabled={loading}
          className={`w-full py-3.5 rounded-xl font-bold text-base transition-all active:scale-[0.98] shadow-lg ${
            loading 
             ? 'bg-purple-400 cursor-not-allowed text-white'
             : 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/20 hover:shadow-purple-600/40'
          }`}
        >
          {loading ? 'Authenticating...' : 'Enter Dashboard'}
        </button>
      </form>

      <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
        <button 
          onClick={() => navigate('/student/login')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-purple-600 transition-colors"
        >
          <ArrowLeft size={16} /> Return to Student Portal
        </button>
      </div>
    </>
  );

  return (
    <AuthLayout 
      leftContent={leftSideContent} 
      rightContent={rightSideContent} 
      themeColor="purple"
    />
  );
};

export default InstructorAuth;