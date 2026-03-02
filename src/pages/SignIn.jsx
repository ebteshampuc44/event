// pages/SignIn.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Here you would handle actual authentication
      console.log('Sign In:', formData);
      // Redirect to home or dashboard
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FCEB00]/10 via-white to-[#FCEB00]/5 pt-24 pb-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-[#FCEB00] rounded-full mb-4">
            <LogIn className="w-8 h-8 text-gray-800" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
          <p className="text-gray-600">Sign in to continue to Corn's Event</p>
        </div>

        {/* Sign In Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#FCEB00]/30 overflow-hidden">
          {/* Decorative Top Bar */}
          <div className="h-2 bg-gradient-to-r from-[#FCEB00] to-yellow-400"></div>
          
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FCEB00] focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FCEB00] focus:border-transparent transition-all duration-300"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#FCEB00] border-gray-300 rounded focus:ring-[#FCEB00]"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#FCEB00] hover:text-yellow-600 font-medium transition-colors duration-300"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FCEB00] text-gray-800 py-3 px-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    <span>Sign In</span>
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Social Sign In */}
            <div className="grid grid-cols-3 gap-3">
              <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              </button>
              <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5" />
              </button>
              <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5" />
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center mt-8 text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-[#FCEB00] hover:text-yellow-600 font-semibold transition-colors duration-300"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;