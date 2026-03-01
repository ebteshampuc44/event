import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Ticket, User, Menu } from 'lucide-react';

const Navbar = () => {
    return (
     <div className="navbar bg-white shadow-sm border-b border-gray-200 px-4 md:px-8">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl text-blue-600">
            EventHub
          </Link>
        </div>
        <div className="flex-none gap-4">
          <div className="hidden md:flex items-center gap-6">
            <Link to="/events" className="text-gray-700 hover:text-blue-600 transition font-medium">Events</Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600 transition font-medium">Categories</Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600 transition font-medium">Pricing</Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600 transition font-medium">About</Link>
          </div>
          
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <Ticket className="h-5 w-5 text-gray-700" />
                <span className="badge badge-sm indicator-item bg-blue-600 text-white border-none">2</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-white z-50 mt-3 w-64 shadow-lg border border-gray-200">
              <div className="card-body">
                <span className="text-lg font-bold text-gray-900">2 Tickets in Cart</span>
                <div className="text-sm text-gray-600">
                  <p>Tech Summit 2024 - $299</p>
                  <p>Music Festival - $149</p>
                </div>
                <span className="text-blue-600 font-semibold mt-2">Total: $448</span>
                <div className="card-actions mt-2">
                  <button className="btn bg-blue-600 text-white hover:bg-blue-700 btn-block border-none">View Cart</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <User className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-gray-200">
              <li><a className="text-gray-700 hover:text-blue-600">My Tickets</a></li>
              <li><a className="text-gray-700 hover:text-blue-600">Profile Settings</a></li>
              <li><a className="text-gray-700 hover:text-blue-600">Create Event</a></li>
              <li><a className="text-gray-700 hover:text-blue-600">Logout</a></li>
            </ul>
          </div>

          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <Menu className="h-5 w-5 text-gray-700" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-gray-200">
              <li><a className="text-gray-700 hover:text-blue-600">Events</a></li>
              <li><a className="text-gray-700 hover:text-blue-600">Categories</a></li>
              <li><a className="text-gray-700 hover:text-blue-600">Pricing</a></li>
              <li><a className="text-gray-700 hover:text-blue-600">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;