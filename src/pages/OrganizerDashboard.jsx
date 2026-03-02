// pages/OrganizerDashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Eye, 
  Edit, 
  Trash2, 
  PlusCircle,
  Download,
  Filter,
  Search,
  BarChart3,
  Ticket,
  Star,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

const OrganizerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for organizer's events
  const myEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      date: "Mar 15, 2024",
      category: "Conference",
      ticketsSold: 87,
      totalTickets: 150,
      revenue: 26013,
      status: "Published",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Digital Marketing Workshop",
      date: "Feb 25, 2024",
      category: "Workshop",
      ticketsSold: 45,
      totalTickets: 100,
      revenue: 2205,
      status: "Published",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
    },
    {
      id: 3,
      title: "Startup Networking Mixer",
      date: "Mar 2, 2024",
      category: "Networking",
      ticketsSold: 78,
      totalTickets: 150,
      revenue: 1950,
      status: "Draft",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
    },
    {
      id: 4,
      title: "Photography Masterclass",
      date: "Mar 10, 2024",
      category: "Workshop",
      ticketsSold: 0,
      totalTickets: 30,
      revenue: 0,
      status: "Pending Review",
      image: "https://images.unsplash.com/photo-1554048612-b77c3c9e8c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  // Sample data for recent bookings
  const recentBookings = [
    { id: 1, event: "Tech Innovation Summit", customer: "John Smith", tickets: 2, amount: 598, date: "2024-01-15", status: "Confirmed" },
    { id: 2, event: "Digital Marketing Workshop", customer: "Emma Wilson", tickets: 1, amount: 49, date: "2024-01-14", status: "Confirmed" },
    { id: 3, event: "Startup Networking Mixer", customer: "Michael Brown", tickets: 3, amount: 75, date: "2024-01-13", status: "Pending" },
    { id: 4, event: "Tech Innovation Summit", customer: "Sarah Davis", tickets: 2, amount: 598, date: "2024-01-12", status: "Confirmed" }
  ];

  // Statistics
  const stats = {
    totalEvents: 4,
    totalTicketsSold: 210,
    totalRevenue: 30266,
    averageRating: 4.8,
    pageViews: 15420,
    conversionRate: 3.2
  };

  const filteredEvents = myEvents.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch(status) {
      case 'Published':
        return 'bg-green-100 text-green-800';
      case 'Draft':
        return 'bg-gray-100 text-gray-800';
      case 'Pending Review':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Organizer Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your events and track performance</p>
          </div>
          <Link
            to="/organizer-booking"
            className="mt-4 md:mt-0 bg-[#FCEB00] text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-[#FCEB00]/90 transition duration-300 shadow-md flex items-center"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Create New Event
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-[#FCEB00]/30">
            <div className="text-[#FCEB00] text-sm mb-1">Total Events</div>
            <div className="text-2xl font-bold text-gray-900">{stats.totalEvents}</div>
            <div className="text-xs text-gray-500 mt-1">+2 this month</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-[#FCEB00]/30">
            <div className="text-[#FCEB00] text-sm mb-1">Tickets Sold</div>
            <div className="text-2xl font-bold text-gray-900">{stats.totalTicketsSold}</div>
            <div className="text-xs text-green-600 mt-1">↑ 12%</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-[#FCEB00]/30">
            <div className="text-[#FCEB00] text-sm mb-1">Revenue</div>
            <div className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</div>
            <div className="text-xs text-green-600 mt-1">↑ 8%</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-[#FCEB00]/30">
            <div className="text-[#FCEB00] text-sm mb-1">Rating</div>
            <div className="text-2xl font-bold text-gray-900 flex items-center">
              {stats.averageRating}
              <Star className="w-5 h-5 ml-1 text-[#FCEB00]" />
            </div>
            <div className="text-xs text-gray-500 mt-1">from 156 reviews</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-[#FCEB00]/30">
            <div className="text-[#FCEB00] text-sm mb-1">Page Views</div>
            <div className="text-2xl font-bold text-gray-900">{stats.pageViews.toLocaleString()}</div>
            <div className="text-xs text-green-600 mt-1">↑ 23%</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-[#FCEB00]/30">
            <div className="text-[#FCEB00] text-sm mb-1">Conversion</div>
            <div className="text-2xl font-bold text-gray-900">{stats.conversionRate}%</div>
            <div className="text-xs text-gray-500 mt-1">views to sales</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-[#FCEB00]/30 mb-8">
          <div className="flex border-b border-[#FCEB00]/30">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-medium text-sm transition-colors relative ${
                activeTab === 'overview'
                  ? 'text-[#FCEB00] border-b-2 border-[#FCEB00]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-3 font-medium text-sm transition-colors relative ${
                activeTab === 'events'
                  ? 'text-[#FCEB00] border-b-2 border-[#FCEB00]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              My Events
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-6 py-3 font-medium text-sm transition-colors relative ${
                activeTab === 'bookings'
                  ? 'text-[#FCEB00] border-b-2 border-[#FCEB00]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Recent Bookings
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-6 py-3 font-medium text-sm transition-colors relative ${
                activeTab === 'analytics'
                  ? 'text-[#FCEB00] border-b-2 border-[#FCEB00]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Analytics
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-[#FCEB00]/5 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-[#FCEB00]" />
                      Performance Summary
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Total Ticket Sales</span>
                          <span className="font-semibold text-gray-900">210 tickets</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#FCEB00] h-2 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Revenue Target</span>
                          <span className="font-semibold text-gray-900">$30,266 / $50,000</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#FCEB00] h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Customer Satisfaction</span>
                          <span className="font-semibold text-gray-900">4.8/5.0</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#FCEB00] h-2 rounded-full" style={{ width: '96%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#FCEB00]/5 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-[#FCEB00]" />
                      Quick Actions
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        to="/organizer-booking"
                        className="bg-white p-3 rounded-lg text-center hover:shadow-md transition border border-[#FCEB00]/30"
                      >
                        <PlusCircle className="w-5 h-5 mx-auto mb-1 text-[#FCEB00]" />
                        <span className="text-xs font-medium">New Event</span>
                      </Link>
                      <button className="bg-white p-3 rounded-lg text-center hover:shadow-md transition border border-[#FCEB00]/30">
                        <Download className="w-5 h-5 mx-auto mb-1 text-[#FCEB00]" />
                        <span className="text-xs font-medium">Export Data</span>
                      </button>
                      <button className="bg-white p-3 rounded-lg text-center hover:shadow-md transition border border-[#FCEB00]/30">
                        <Eye className="w-5 h-5 mx-auto mb-1 text-[#FCEB00]" />
                        <span className="text-xs font-medium">Preview</span>
                      </button>
                      <button className="bg-white p-3 rounded-lg text-center hover:shadow-md transition border border-[#FCEB00]/30">
                        <Ticket className="w-5 h-5 mx-auto mb-1 text-[#FCEB00]" />
                        <span className="text-xs font-medium">Tickets</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Recent Events Preview */}
                <h3 className="font-semibold text-gray-900 mb-3">Recent Events</h3>
                <div className="space-y-3">
                  {myEvents.slice(0, 2).map(event => (
                    <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <img src={event.image} alt={event.title} className="w-12 h-12 object-cover rounded-lg mr-3" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{event.title}</h4>
                          <p className="text-sm text-gray-500">{event.date} • {event.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{event.ticketsSold}/{event.totalTickets}</p>
                        <p className="text-xs text-gray-500">tickets sold</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* My Events Tab */}
            {activeTab === 'events' && (
              <div>
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                  <div className="relative w-full md:w-64 mb-4 md:mb-0">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FCEB00] w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search events..."
                      className="w-full pl-9 pr-4 py-2 border border-[#FCEB00]/30 rounded-lg focus:ring-2 focus:ring-[#FCEB00] bg-white text-black text-sm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-2 border border-[#FCEB00]/30 rounded-lg hover:bg-[#FCEB00]/10 flex items-center text-sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                    <button className="px-3 py-2 border border-[#FCEB00]/30 rounded-lg hover:bg-[#FCEB00]/10 flex items-center text-sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredEvents.map(event => (
                    <div key={event.id} className="bg-gray-50 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                      <div className="flex items-start md:items-center gap-4">
                        <img src={event.image} alt={event.title} className="w-16 h-16 object-cover rounded-lg" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{event.title}</h4>
                          <p className="text-sm text-gray-500 mb-1">{event.date} • {event.category}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(event.status)}`}>
                            {event.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{event.ticketsSold}/{event.totalTickets}</p>
                          <p className="text-xs text-gray-500">tickets sold</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">${event.revenue.toLocaleString()}</p>
                          <p className="text-xs text-gray-500">revenue</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-white rounded-lg transition">
                            <Eye className="w-4 h-4 text-gray-500" />
                          </button>
                          <button className="p-2 hover:bg-white rounded-lg transition">
                            <Edit className="w-4 h-4 text-gray-500" />
                          </button>
                          <button className="p-2 hover:bg-white rounded-lg transition">
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recent Bookings Tab */}
            {activeTab === 'bookings' && (
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#FCEB00]/30">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Booking ID</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Event</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Customer</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Tickets</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentBookings.map(booking => (
                        <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm text-gray-600">#BK{booking.id}234</td>
                          <td className="py-3 px-4 text-sm font-medium text-gray-900">{booking.event}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{booking.customer}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{booking.tickets}</td>
                          <td className="py-3 px-4 text-sm font-semibold text-gray-900">${booking.amount}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{booking.date}</td>
                          <td className="py-3 px-4">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="text-[#FCEB00] hover:text-[#FCEB00]/80 text-sm font-semibold">
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="text-center py-12">
                <BarChart3 className="w-16 h-16 text-[#FCEB00] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Analytics Coming Soon</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  We're working on bringing you comprehensive analytics to help you understand your event performance better.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerDashboard;