import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Search, Filter, X } from 'lucide-react';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDate, setSelectedDate] = useState('');

  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      date: "March 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco Convention Center",
      price: "$299",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Conference",
      availableTickets: 150
    },
    {
      id: 2,
      title: "Summer Music Festival",
      date: "July 8-10, 2024",
      time: "2:00 PM - 11:00 PM",
      location: "Central Park, NYC",
      price: "$149",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Music",
      availableTickets: 500
    },
    {
      id: 3,
      title: "Food & Wine Expo",
      date: "April 5-7, 2024",
      time: "11:00 AM - 9:00 PM",
      location: "McCormick Place, Chicago",
      price: "$89",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Food & Drink",
      availableTickets: 300
    },
    {
      id: 4,
      title: "Digital Marketing Workshop",
      date: "February 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Online (Zoom)",
      price: "$49",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      category: "Workshop",
      availableTickets: 100
    },
    {
      id: 5,
      title: "Jazz Night",
      date: "March 2, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Blue Note Jazz Club, NYC",
      price: "$75",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      category: "Music",
      availableTickets: 80
    },
    {
      id: 6,
      title: "Startup Pitch Competition",
      date: "March 10, 2024",
      time: "1:00 PM - 6:00 PM",
      location: "WeWork, Austin",
      price: "Free",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Conference",
      availableTickets: 200
    }
  ];

  const categories = ['All', 'Conference', 'Music', 'Workshop', 'Food & Drink'];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedDate('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Discover Events</h1>
          <p className="text-xl text-gray-600">Find and book tickets for amazing events near you</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#FCEB00]/30 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FCEB00] w-5 h-5" />
              <input
                type="text"
                placeholder="Search events by name or location..."
                className="w-full pl-10 pr-4 py-3 border border-[#FCEB00]/30 rounded-lg focus:ring-2 focus:ring-[#FCEB00] focus:border-transparent bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FCEB00] w-4 h-4" />
                <select
                  className="pl-10 pr-8 py-3 border border-[#FCEB00]/30 rounded-lg focus:ring-2 focus:ring-[#FCEB00] focus:border-transparent bg-white appearance-none"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              {(searchTerm || selectedCategory !== 'All') && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 border border-[#FCEB00]/30 rounded-lg hover:bg-[#FCEB00]/10 flex items-center gap-2 text-gray-600"
                >
                  <X className="w-4 h-4" />
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-[#FCEB00]">{filteredEvents.length}</span> events
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm border border-[#FCEB00]/30 overflow-hidden hover:shadow-md transition duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-[#FCEB00]/10 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                  </span>
                  <span className="text-2xl font-bold text-[#FCEB00]">{event.price}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-[#FCEB00]" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-[#FCEB00]" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-[#FCEB00]" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {event.availableTickets} tickets left
                  </span>
                  <Link
                    to={`/event/${event.id}`}
                    className="bg-[#FCEB00] text-gray-800 px-4 py-2 rounded-lg hover:bg-[#FCEB00]/90 transition duration-300 text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-[#FCEB00]/30">
            <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-[#FCEB00] hover:text-[#FCEB00]/80 font-semibold"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;