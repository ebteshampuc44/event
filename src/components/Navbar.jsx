import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/events", label: "Events" },
    { path: "/categories", label: "Categories" },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-6">

        {/* ===== Desktop ===== */}
        <div className="hidden lg:flex items-center justify-between 
        bg-[#FCEB00]/10 backdrop-blur-xl 
        border border-[#FCEB00]/30 
        shadow-[0_8px_32px_rgba(252,235,0,0.15)] 
        rounded-full px-8 py-3 transition-all duration-300">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold" style={{ color: '#FCEB00' }}>
            Logo
          </Link>

          {/* Menu */}
          <div className="flex items-center space-x-6">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="px-4 py-2 rounded-full font-medium text-gray-700 
                hover:text-white hover:bg-[#FCEB00] 
                transition-all duration-300"
              >
                {item.label}
              </NavLink>
            ))}

            {/* Sign In Button */}
            <Link
              to="/signin"
              className="bg-[#FCEB00] text-gray-800 font-semibold py-2 px-6 rounded-full 
              shadow-lg hover:shadow-[#FCEB00]/40 
              hover:scale-105 transition-all duration-300"
            >
              Sign In
            </Link>

          </div>
        </div>

        {/* ===== Mobile ===== */}
        <div className="flex lg:hidden justify-between items-center 
        bg-[#FCEB00]/10 backdrop-blur-xl 
        border border-[#FCEB00]/30 
        shadow-xl rounded-full px-6 py-3">

          <Link to="/" className="text-xl font-bold" style={{ color: '#FCEB00' }}>
            Logo
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="text-[#FCEB00] text-xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-xl shadow-xl p-4 flex flex-col space-y-3 border border-[#FCEB00]/30">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg text-gray-700 
                hover:bg-[#FCEB00]/10 transition"
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/signin"
              onClick={() => setIsOpen(false)}
              className="bg-[#FCEB00] text-gray-800 py-2 px-4 
              rounded-lg text-center font-semibold hover:bg-[#FCEB00]/90"
            >
              Sign In
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;