import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, AlertCircle } from 'lucide-react'; // Icons for success/error
import RegisterInputField from '../ui/RegisterInputField'; 
import SelectField from '../ui/SelectField';             

const InstructorRegistrationForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(''); // Success state
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    designation: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  // Options
  const departmentOptions = [
    { value: 'CS', label: 'Computer Science' },
    { value: 'SE', label: 'Software Engineering' },
    { value: 'IT', label: 'Information Technology' },
    { value: 'DS', label: 'Data Science' }
  ];

  const designationOptions = [
    { value: 'Lecturer', label: 'Lecturer' },
    { value: 'Assistant Professor', label: 'Assistant Professor' },
    { value: 'Associate Professor', label: 'Associate Professor' },
    { value: 'Professor', label: 'Professor' },
    { value: 'Lab Instructor', label: 'Lab Instructor' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear errors and success message on typing
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    if (errors.global) setErrors(prev => ({ ...prev, global: '' }));
    if (success) setSuccess('');
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes('@')) newErrors.email = "Invalid email address";
    if (!formData.department) newErrors.department = "Select a department";
    if (!formData.designation) newErrors.designation = "Select a designation";
    if (formData.password.length < 6) newErrors.password = "Min 6 chars";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setErrors({}); // Clear previous errors

    // Prepare payload for Backend
    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: 'instructor', // Force role
      department: formData.department,
      designation: formData.designation
    };

    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // --- Success Logic ---
      console.log("Instructor Registration Successful:", data);
      setSuccess('Account created successfully! Redirecting to login...');
      
      // Clear form (optional)
      setFormData({
        name: '', email: '', department: '', designation: '', password: '', confirmPassword: ''
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/instructor/login'); 
      }, 2000);

    } catch (err) {
      setErrors(prev => ({ ...prev, global: err.message }));
      setLoading(false); // Stop loading on error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      
      {/* --- Success Message Banner --- */}
      {success && (
        <div className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 flex items-center gap-3 animate-fade-in shadow-sm">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span className="font-medium text-sm">{success}</span>
        </div>
      )}

      {/* --- Error Message Banner --- */}
      {errors.global && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100 text-center animate-pulse flex items-center justify-center gap-2">
           <AlertCircle className="w-4 h-4" />
           {errors.global}
        </div>
      )}

      <RegisterInputField 
        label="Full Name" name="name" 
        placeholder="Dr. Jane Doe"
        value={formData.name} onChange={handleChange} error={errors.name} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectField 
          label="Department" name="department" 
          options={departmentOptions}
          value={formData.department} onChange={handleChange} error={errors.department} 
        />
        <SelectField 
          label="Designation" name="designation" 
          options={designationOptions}
          value={formData.designation} onChange={handleChange} error={errors.designation} 
        />
      </div>

      <RegisterInputField 
        label="Official Email" type="email" name="email" 
        placeholder="instructor@school.edu"
        value={formData.email} onChange={handleChange} error={errors.email} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <RegisterInputField 
          label="Password" type="password" name="password" 
          placeholder="••••••••"
          value={formData.password} onChange={handleChange} error={errors.password} 
        />
        <RegisterInputField 
          label="Confirm Password" type="password" name="confirmPassword" 
          placeholder="••••••••"
          value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} 
        />
      </div>

      <button 
        type="submit" 
        disabled={loading || success}
        className={`mt-4 w-full py-3.5 px-4 font-bold rounded-xl transition-all shadow-lg active:scale-[0.98] flex justify-center items-center gap-2 ${
            success 
            ? 'bg-green-600 text-white shadow-green-200'
            : loading 
            ? 'bg-purple-400 cursor-not-allowed text-white' 
            : 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-200 dark:shadow-none hover:shadow-xl'
        }`}
      >
        {success ? (
          <>
            <CheckCircle className="w-5 h-5" /> Registered!
          </>
        ) : loading ? 'Registering...' : 'Register as Instructor'}
      </button>

    </form>
  );
};

export default InstructorRegistrationForm;