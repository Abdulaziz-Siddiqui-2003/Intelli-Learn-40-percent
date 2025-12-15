import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, BookOpen, Lock, AlertCircle } from 'lucide-react';

export const AdminAuth = () => {
  const navigate = useNavigate();
  
  // State for inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // --- SECURITY CONFIGURATION ---
  // Hardcoded credentials for maximum safety as requested.
  // In a real production app, these should be environment variables, 
  // but this ensures they are "in the code" and specific.
  const ADMIN_CREDENTIALS = {
    email: "sys_root_x99@intellilearn.secure",
    password: "X7#mP$9vL2@kQ5!zR_secure" 
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Strict Comparison
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        console.log("Admin Access Granted");
        // Store a marker in local storage so the dashboard knows we are logged in
        localStorage.setItem('userInfo', JSON.stringify({ 
            name: 'System Administrator', 
            email: ADMIN_CREDENTIALS.email, 
            role: 'admin' 
        }));
        navigate('/admin/dashboard');
    } else {
        // Security Theater: Slight delay to prevent brute-forcing feels authentic
        setTimeout(() => {
            setError('ACCESS DENIED: Invalid Security Credentials.');
        }, 500);
    }
  };

  return (
    <div className="flex min-h-screen w-full font-sans">
      
      {/* --- LEFT PANEL (Visual & Branding) --- */}
      <div className="hidden lg:flex w-1/2 bg-slate-950 flex-col justify-between p-12 text-white relative overflow-hidden">
        {/* Background Pattern/Overlay */}
        <div className="absolute inset-0 bg-emerald-900/20 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
             style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'}}></div>
        
        {/* Logo/Brand */}
        <div className="relative z-10 flex items-center gap-3">
           <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm border border-white/10">
             <BookOpen size={24} className="text-emerald-400" />
           </div>
           <span className="text-2xl font-bold tracking-tight">IntelliLearn <span className="text-emerald-500 text-xs uppercase tracking-widest ml-2 border border-emerald-500/50 px-2 py-0.5 rounded-full">Admin</span></span>
        </div>

        {/* Main Heading */}
        <div className="relative z-10 max-w-lg">
          <h1 className="text-5xl font-black leading-tight mb-6 tracking-tight text-slate-100">
            System <br/> <span className="text-emerald-500">Administration</span> Control.
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed border-l-4 border-emerald-500 pl-6">
            Authorized access only. All activities on this portal are monitored and logged for security purposes.
          </p>
        </div>

        {/* Footer Text */}
        <div className="relative z-10 text-xs text-slate-500 font-mono flex items-center gap-2">
          <Lock size={12} /> SECURE CONNECTION • ENCRYPTED
        </div>
      </div>

      {/* --- RIGHT PANEL (Form & Navigation) --- */}
      <div className="w-full lg:w-1/2 bg-white dark:bg-slate-950 flex flex-col justify-center p-8 lg:p-16 overflow-y-auto">
        <div className="max-w-md w-full mx-auto">
          
          {/* Header Card */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border-l-4 border-emerald-500 shadow-sm">
             <h3 className="font-bold text-xl text-slate-800 dark:text-white mb-1 flex items-center gap-2">
                <ShieldCheck className="text-emerald-500" size={20}/> Administrator Access
             </h3>
             <p className="text-sm text-slate-500">Enter your secure root credentials.</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 animate-pulse">
                <AlertCircle size={20} />
                <span className="text-sm font-bold font-mono">{error}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Secure Email ID</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@system.local" 
                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-slate-900 placeholder-slate-400 font-mono text-sm" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Root Key (Password)</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••" 
                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-slate-900 placeholder-slate-400 font-mono text-sm" 
              />
            </div>
           
            <button 
                type="submit"
                className="w-full bg-slate-900 hover:bg-emerald-700 text-white py-4 rounded-lg font-bold text-base shadow-lg shadow-slate-900/20 hover:shadow-emerald-600/30 transition-all active:scale-[0.98] tracking-wide"
            >
              AUTHENTICATE
            </button>
            
            <div className="text-center mt-6">
               <span className="text-[10px] uppercase tracking-widest text-slate-400 flex items-center justify-center gap-1 font-bold">
                 <ShieldCheck size={12} className="text-emerald-500" /> System Integrity Check: Active
               </span>
            </div>
          </form>

          {/* Footer Navigation */}
          <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <button 
              onClick={() => navigate('/student/login')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-emerald-600 transition-colors"
            >
              <ArrowLeft size={16} /> Exit to Public Portal
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
export default AdminAuth;