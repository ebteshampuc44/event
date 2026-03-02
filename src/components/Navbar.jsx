import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo with Text */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="https://i.ibb.co.com/JwNjqvJY/Transparent-Logo-8x.png" 
            alt="Corn's Event" 
            className="h-9 w-9 object-contain"
          />
          <span className="text-xl font-bold text-gray-800">Corn's Event</span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex bg-[#fceb00] px-6 py-2 rounded-full space-x-6 font-medium text-gray-800 shadow-sm">
          <Link to="/" className="hover:text-black transition px-3 py-1">Home</Link>
          <Link to="/events" className="hover:text-black transition px-3 py-1">Events</Link>
          <Link to="/about" className="hover:text-black transition px-3 py-1">About Us</Link>
          <Link to="/organizer" className="hover:text-black transition px-3 py-1">Organizer</Link>
        </div>

        {/* Buttons */}
        <div className="space-x-3">
          <button className="px-5 py-2 text-gray-700 hover:text-black transition font-medium">
            Sign In
          </button>
          <button className="px-5 py-2 bg-[#fceb00] text-gray-800 rounded-full font-semibold hover:bg-yellow-400 transition shadow-sm">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;