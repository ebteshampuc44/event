// pages/SignUp.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Phone, Eye, EyeOff, Calendar, UserPlus } from 'lucide-react';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
    userType: 'attendee',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      
      setTimeout(() => {
        setLoading(false);
        console.log('Sign Up:', formData);
        navigate('/signin');
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FCEB00]/10 via-white to-[#FCEB00]/5 pt-24 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-[#FCEB00] rounded-full mb-4">
            <UserPlus className="w-8 h-8 text-gray-800" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-700">Join Corn's Event and start your journey</p>
        </div>

        {/* Sign Up Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#FCEB00]/30 overflow-hidden">
          {/* Decorative Top Bar */}
          <div className="h-2 bg-gradient-to-r from-[#FCEB00] to-yellow-400"></div>
          
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FCEB00] focus:border-transparent transition-all duration-300 text-gray-900 placeholder:text-gray-400 ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FCEB00] focus:border-transparent transition-all duration-300 text-gray-900 placeholder:text-gray-400 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone and Date of Birth */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FCEB00] focus:border-transparent transition-all duration-300 text-gray-900 placeholder:text-gray-400 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FCEB00] focus:border-transparent transition-all duration-300 text-gray-900"
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FCEB00] focus:border-transparent transition-all duration-300 text-gray-900 placeholder:text-gray-400 ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FCEB00] focus:border-transparent transition-all duration-300 text-gray-900 placeholder:text-gray-400 ${
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                )}
              </div>

              {/* User Type */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  I want to
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`flex items-center justify-center space-x-2 p-3 border rounded-xl cursor-pointer transition-all duration-300 ${
                    formData.userType === 'attendee' 
                      ? 'bg-[#FCEB00] border-[#FCEB00] text-gray-800' 
                      : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}>
                    <input
                      type="radio"
                      name="userType"
                      value="attendee"
                      checked={formData.userType === 'attendee'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <User className="w-5 h-5" />
                    <span className="font-medium">Attend Events</span>
                  </label>
                  <label className={`flex items-center justify-center space-x-2 p-3 border rounded-xl cursor-pointer transition-all duration-300 ${
                    formData.userType === 'organizer' 
                      ? 'bg-[#FCEB00] border-[#FCEB00] text-gray-800' 
                      : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}>
                    <input
                      type="radio"
                      name="userType"
                      value="organizer"
                      checked={formData.userType === 'organizer'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">Organize Events</span>
                  </label>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-[#FCEB00] border-gray-300 rounded focus:ring-[#FCEB00]"
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the{' '}
                    <Link to="/terms" className="text-[#FCEB00] hover:text-yellow-600 font-medium">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-[#FCEB00] hover:text-yellow-600 font-medium">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                {errors.agreeTerms && (
                  <p className="mt-1 text-sm text-red-500">{errors.agreeTerms}</p>
                )}
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FCEB00] text-gray-800 py-3 px-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5" />
                    <span>Sign Up</span>
                  </>
                )}
              </button>
            </form>

            {/* Sign In Link */}
            <p className="text-center mt-8 text-gray-700">
              Already have an account?{' '}
              <Link
                to="/signin"
                className="text-[#FCEB00] hover:text-yellow-600 font-semibold transition-colors duration-300"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;