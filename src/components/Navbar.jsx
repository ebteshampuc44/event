import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
        
        </h1>

        {/* Menu */}
        <div className="hidden md:flex bg-[#FCEB00] px-8 py-3 rounded-full space-x-8 font-medium">
          <Link to="/" className="hover:text-gray-700 transition">Home</Link>
          <Link to="/events" className="hover:text-gray-700 transition">Events</Link>
          <Link to="/about" className="hover:text-gray-700 transition">About Us</Link>
          <Link to="/organizer" className="hover:text-gray-700 transition">Become an Organizer</Link>
        </div>

        {/* Buttons */}
        <div className="space-x-3">
          <button className="px-5 py-2 border border-[#FCEB00] text-[#FCEB00] rounded-full hover:bg-[#FCEB00] hover:text-black transition">
            Sign In
          </button>
          <button className="px-5 py-2 bg-[#FCEB00] text-black rounded-full hover:bg-[#FCEB00]/90 transition">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;