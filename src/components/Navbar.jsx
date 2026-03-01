import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Ticket, User, Menu, LogIn } from 'lucide-react';

const Navbar = () => {
    return (
     <div className="navbar bg-white shadow-md border-b border-gray-100 px-4 md:px-8 py-2">
        {/* Logo on left */}
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              EventHub
            </span>
          </Link>
        </div>

        {/* Centered Navigation */}
        <div className="navbar-center hidden md:flex">
          <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-2xl">
            <Link 
              to="/events" 
              className="px-5 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all duration-200"
            >
              Events
            </Link>
            <Link 
              to="/categories" 
              className="px-5 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all duration-200"
            >
              Categories
            </Link>
            <Link 
              to="/pricing" 
              className="px-5 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all duration-200"
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="px-5 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all duration-200"
            >
              About
            </Link>
          </div>
        </div>

        {/* Right side - Cart, User, Login */}
        <div className="navbar-end flex items-center gap-3">
          {/* Cart Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle relative">
              <div className="indicator">
                <div className="p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <Ticket className="h-5 w-5 text-gray-700" />
                </div>
                <span className="badge badge-sm indicator-item bg-blue-600 text-white border-none -top-1 -right-1">2</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-white z-50 mt-3 w-72 shadow-xl border border-gray-100">
              <div className="card-body p-4">
                <span className="text-base font-semibold text-gray-900">Shopping Cart (2)</span>
                <div className="space-y-3 mt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                        alt="Event"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Tech Summit 2024</p>
                      <p className="text-xs text-gray-500">1 ticket · $299</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                        alt="Event"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Music Festival</p>
                      <p className="text-xs text-gray-500">1 ticket · $149</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                  <span className="text-sm text-gray-600">Total</span>
                  <span className="font-bold text-blue-600">$448</span>
                </div>
                <div className="card-actions mt-2">
                  <button className="btn bg-blue-600 text-white hover:bg-blue-700 btn-block border-none shadow-md">
                    View Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* User Menu */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-md">
                <span className="text-sm font-medium text-white">JD</span>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-2xl z-50 mt-3 w-56 p-2 shadow-xl border border-gray-100">
              <li className="menu-label px-3 py-2">
                <span className="text-xs font-semibold text-gray-400">ACCOUNT</span>
              </li>
              <li><a className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl py-2.5">My Profile</a></li>
              <li><a className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl py-2.5">My Tickets</a></li>
              <li><a className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl py-2.5">Wishlist</a></li>
              <li><a className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl py-2.5">Settings</a></li>
              <li className="border-t border-gray-100 mt-1 pt-1">
                <a className="text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl py-2.5">Sign Out</a>
              </li>
            </ul>
          </div>

          {/* Login Button (visible when not logged in) */}
          <Link 
            to="/login" 
            className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <LogIn className="h-4 w-4" />
            <span className="text-sm font-medium">Login</span>
          </Link>

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="p-2 bg-gray-50 rounded-xl">
                <Menu className="h-5 w-5 text-gray-700" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-2xl z-50 mt-3 w-56 p-2 shadow-xl border border-gray-100">
              <li><a className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl py-3">Events</a></li>
              <li><a className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl py-3">Categories</a></li>
              <li><a className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl py-3">Pricing</a></li>
              <li><a className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl py-3">About</a></li>
              <li className="border-t border-gray-100 mt-1 pt-1">
                <a className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-xl py-3 font-medium">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;