// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, LogOut, Settings, Calendar, Home, Info, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowUserMenu(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setShowUserMenu(false);
    window.location.href = '/';
  };

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/events", label: "Events", icon: Calendar },
    { path: "/about", label: "About Us", icon: Info },
    { path: "/organizer", label: "Organizer", icon: Briefcase },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white border-b border-gray-200 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <img 
                src="https://i.ibb.co.com/JwNjqvJY/Transparent-Logo-8x.png" 
                alt="Corn's Event" 
                className="h-10 w-10 object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -inset-1 bg-[#FCEB00] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-gray-800 group-hover:text-[#FCEB00] transition-colors duration-300">
              Corn's Event
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="bg-[#FCEB00] px-2 py-1 rounded-full flex items-center space-x-1 shadow-md">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 group ${
                      isActive 
                        ? 'text-gray-900 bg-white/30' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-white/20'
                    }`}
                  >
                    <span className="flex items-center space-x-1">
                      <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                        isActive ? 'text-gray-900' : 'text-gray-700'
                      }`} />
                      <span>{link.label}</span>
                    </span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:block">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 rounded-full pl-3 pr-2 py-2 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 bg-[#FCEB00] rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-800" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">John Doe</span>
                  <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
                    showUserMenu ? 'rotate-180' : ''
                  }`} />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-[#FCEB00]/30 overflow-hidden animate-fadeIn">
                    <div className="py-2">
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#FCEB00]/10 transition-colors duration-200"
                      >
                        <User className="w-4 h-4 mr-3 text-[#FCEB00]" />
                        Profile
                      </Link>
                      <Link
                        to="/organizer-dashboard"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#FCEB00]/10 transition-colors duration-200"
                      >
                        <Calendar className="w-4 h-4 mr-3 text-[#FCEB00]" />
                        My Events
                      </Link>
                      <Link
                        to="/settings"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#FCEB00]/10 transition-colors duration-200"
                      >
                        <Settings className="w-4 h-4 mr-3 text-[#FCEB00]" />
                        Settings
                      </Link>
                      <hr className="my-2 border-[#FCEB00]/20" />
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/signin"
                  className="px-5 py-2 text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium relative group"
                >
                  <span>Sign In</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FCEB00] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  to="/signup"
                  className="px-5 py-2 bg-[#FCEB00] text-gray-800 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl border border-[#FCEB00]/30 p-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-2 mb-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#FCEB00] text-gray-900' 
                        : 'text-gray-700 hover:bg-[#FCEB00]/10'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Auth Section */}
            {isLoggedIn ? (
              <div className="border-t border-[#FCEB00]/30 pt-4">
                <div className="flex items-center space-x-3 px-4 py-3 bg-gray-50 rounded-xl mb-3">
                  <div className="w-10 h-10 bg-[#FCEB00] rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500">john.doe@example.com</p>
                  </div>
                </div>
                <Link
                  to="/profile"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-[#FCEB00]/10 rounded-xl transition-colors duration-300"
                >
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </Link>
                <Link
                  to="/organizer-dashboard"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-[#FCEB00]/10 rounded-xl transition-colors duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  <span>My Events</span>
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-[#FCEB00]/10 rounded-xl transition-colors duration-300"
                >
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors duration-300 mt-2"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="border-t border-[#FCEB00]/30 pt-4 space-y-2">
                <Link
                  to="/signin"
                  className="block w-full text-center px-4 py-3 border-2 border-[#FCEB00] text-gray-700 rounded-xl font-semibold hover:bg-[#FCEB00]/10 transition-all duration-300"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block w-full text-center px-4 py-3 bg-[#FCEB00] text-gray-800 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-md"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;