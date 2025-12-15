import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, AlertCircle } from 'lucide-react'; // Icons for professional look
import RegisterInputField from '../ui/RegisterInputField'; 
import SelectField from '../ui/SelectField';             

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(''); // State for success message
  
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    aridNo: '',
    semester: '',
    section: '',
    shift: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  // --- Dynamic Options Generators ---
  const semesterOptions = Array.from({ length: 8 }, (_, i) => ({ 
    value: String(i + 1), label: `Semester ${i + 1}` 
  }));

  const sectionOptions = useMemo(() => {
    const sections = [];
    for (let i = 1; i <= 8; i++) {
      ['A', 'B', 'C'].forEach(sec => {
        sections.push({ value: `${i}${sec}`, label: `Section ${i}${sec}` });
      });
    }
    return sections;
  }, []);

  const shiftOptions = [
    { value: 'Morning', label: 'Morning' },
    { value: 'Evening', label: 'Evening' }
  ];

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear specific field error when user types
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    // Clear global error/success if it exists
    if (errors.global) setErrors(prev => ({ ...prev, global: '' }));
    if (success) setSuccess('');
  };

  const validate = () => {
    const newErrors = {};
    const aridRegex = /^\d{2}-ARID-\d{1,4}$/; // Matches format like 19-ARID-1234

    if (!formData.studentName.trim()) newErrors.studentName = "Name is required";
    if (!formData.fatherName.trim()) newErrors.fatherName = "Father Name is required";
    
    if (!formData.aridNo.trim()) {
      newErrors.aridNo = "Arid No is required";
    } else if (!aridRegex.test(formData.aridNo)) {
      newErrors.aridNo = "Format: XX-ARID-XXXX (e.g. 21-ARID-1234)";
    }

    if (!formData.semester) newErrors.semester = "Select a semester";
    if (!formData.section) newErrors.section = "Select a section";
    if (!formData.shift) newErrors.shift = "Select a shift";
    if (!formData.email.includes('@')) newErrors.email = "Invalid email address";
    
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 chars";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setErrors({}); // Clear previous errors

    const payload = {
      name: formData.studentName,
      fatherName: formData.fatherName,
      aridNo: formData.aridNo,
      semester: formData.semester,
      section: formData.section,
      shift: formData.shift,
      email: formData.email,
      password: formData.password,
      role: 'student'
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
      console.log("Registration Successful:", data);
      setSuccess('Registration successful! Redirecting to login...');
      
      // Clear form (optional)
      setFormData({
        studentName: '', fatherName: '', aridNo: '', semester: '', 
        section: '', shift: '', email: '', password: '', confirmPassword: ''
      });

      // Redirect after 2 seconds so user sees the message
      setTimeout(() => {
        navigate('/student/login');
      }, 2000);

    } catch (err) {
      setErrors(prev => ({ ...prev, global: err.message }));
      setLoading(false); // Only stop loading on error, keep loading on success for smooth transition
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
        <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200 flex items-center gap-3 animate-pulse shadow-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className="font-medium text-sm">{errors.global}</span>
        </div>
      )}

      {/* Personal Info Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <RegisterInputField 
          label="Student Name" name="studentName" 
          placeholder="e.g. John Doe"
          value={formData.studentName} onChange={handleChange} error={errors.studentName} 
        />
        <RegisterInputField 
          label="Father Name" name="fatherName" 
          placeholder="e.g. Robert Doe"
          value={formData.fatherName} onChange={handleChange} error={errors.fatherName} 
        />
      </div>

      {/* Academic Info Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <RegisterInputField 
          label="Arid No" name="aridNo" 
          placeholder="XX-ARID-XXXX"
          value={formData.aridNo} onChange={handleChange} error={errors.aridNo} 
        />
        <SelectField 
          label="Semester" name="semester" 
          options={semesterOptions}
          value={formData.semester} onChange={handleChange} error={errors.semester} 
        />
      </div>

      {/* Academic Info Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectField 
          label="Class / Section" name="section" 
          options={sectionOptions}
          value={formData.section} onChange={handleChange} error={errors.section} 
        />
        <SelectField 
          label="Shift" name="shift" 
          options={shiftOptions}
          value={formData.shift} onChange={handleChange} error={errors.shift} 
        />
      </div>

      {/* Login Credentials */}
      <RegisterInputField 
        label="Student Email" type="email" name="email" 
        placeholder="student@school.edu"
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

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={loading || success} // Disable if loading OR if success (prevents double submit during redirect)
        className={`mt-4 w-full py-3.5 px-4 font-bold rounded-xl transition-all shadow-lg active:scale-[0.98] flex justify-center items-center gap-2 ${
            success 
            ? 'bg-green-600 text-white shadow-green-200'
            : loading 
            ? 'bg-blue-400 cursor-not-allowed text-white' 
            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200 dark:shadow-none hover:shadow-xl'
        }`}
      >
        {success ? (
          <>
            <CheckCircle className="w-5 h-5" /> Registered!
          </>
        ) : loading ? 'Creating Account...' : 'Register Student'}
      </button>

    </form>
  );
};

export default RegistrationForm;