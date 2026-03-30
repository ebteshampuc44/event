// pages/Events.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Search, Filter, X, Loader } from 'lucide-react';
import api from '../services/api';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    fetchEvents();
    fetchCategories();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('🔍 API Base URL:', api.defaults.baseURL);
      console.log('🔍 Fetching events from API...');
      
      const response = await api.get('/events');
      console.log('📦 Full API Response:', response);
      console.log('📄 Response data:', response.data);
      
      // Handle different response formats
      let eventsData = [];
      
      if (response.data && response.data.success) {
        eventsData = response.data.data || [];
      } else if (response.data && Array.isArray(response.data.data)) {
        eventsData = response.data.data;
      } else if (Array.isArray(response.data)) {
        eventsData = response.data;
      } else if (response.data && response.data.events) {
        eventsData = response.data.events;
      } else {
        eventsData = [];
      }
      
      console.log('✅ Events loaded:', eventsData.length, 'events');
      setEvents(eventsData);
      
    } catch (err) {
      console.error('❌ Error fetching events:', err);
      
      let errorMessage = 'Failed to load events. ';
      
      if (err.code === 'ECONNABORTED') {
        errorMessage += 'Request timeout. Please check your connection.';
      } else if (err.message === 'Network Error') {
        errorMessage += `Cannot connect to server. Make sure Laravel is running on ${api.defaults.baseURL}`;
      } else if (err.response) {
        if (err.response.status === 404) {
          errorMessage += 'API endpoint not found. Please check if Laravel is running.';
        } else if (err.response.status === 500) {
          errorMessage += 'Server error. Please check Laravel logs.';
        } else {
          errorMessage += `Server error: ${err.response.status}`;
        }
        console.error('Server response:', err.response.data);
      } else {
        errorMessage += err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      console.log('🔍 Fetching categories...');
      const response = await api.get('/categories');
      console.log('📦 Categories response:', response.data);
      
      let categoriesData = [];
      
      if (response.data && response.data.success && response.data.data) {
        categoriesData = response.data.data;
      } else if (Array.isArray(response.data)) {
        categoriesData = response.data;
      } else if (response.data && response.data.categories) {
        categoriesData = response.data.categories;
      }
      
      if (categoriesData.length > 0) {
        setCategories(['All', ...categoriesData.map(cat => cat.name)]);
      } else {
        // Fallback categories
        setCategories(['All', 'Conference', 'Music', 'Workshop', 'Food & Drink']);
      }
      
    } catch (err) {
      console.error('❌ Error fetching categories:', err);
      setCategories(['All', 'Conference', 'Music', 'Workshop', 'Food & Drink']);
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category?.name === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-[#FCEB00] animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading events...</p>
          <p className="text-sm text-gray-400 mt-2">Connecting to {api.defaults.baseURL}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 font-semibold mb-2">Error Loading Events</p>
            <p className="text-red-600 mb-4">{error}</p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4 text-left">
              <p className="text-sm text-gray-600 mb-1">Debug Info:</p>
              <p className="text-xs text-gray-500">API URL: {api.defaults.baseURL}/events</p>
              <p className="text-xs text-gray-500">Make sure Laravel is running: php artisan serve --host=192.168.68.110 --port=8000</p>
              <p className="text-xs text-gray-500 mt-2">To test API, open in browser:</p>
              <p className="text-xs text-blue-600">{api.defaults.baseURL}/events</p>
            </div>
            <button
              onClick={fetchEvents}
              className="mt-4 bg-[#FCEB00] text-gray-800 px-6 py-2 rounded-lg hover:bg-[#FCEB00]/90"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Discover Events</h1>
            <p className="text-xl text-gray-600">Find and book tickets for amazing events near you</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-[#FCEB00]/30 p-12 text-center">
            <Calendar className="w-16 h-16 text-[#FCEB00] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Events Found</h3>
            <p className="text-gray-500 mb-4">There are no events available at the moment.</p>
            <p className="text-sm text-gray-400">Check back later for exciting events!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Discover Events</h1>
          <p className="text-xl text-gray-600">Find and book tickets for amazing events near you</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#FCEB00]/30 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FCEB00] w-5 h-5" />
              <input
                type="text"
                placeholder="Search events by name or location..."
                className="w-full pl-10 text-black pr-4 py-3 border border-[#FCEB00]/30 rounded-lg focus:ring-2 focus:ring-[#FCEB00] focus:border-transparent bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FCEB00] w-4 h-4" />
                <select
                  className="pl-10 pr-8 py-3 border border-[#FCEB00]/30 rounded-lg focus:ring-2 focus:ring-[#FCEB00] focus:border-transparent text-black bg-white appearance-none"
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

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-[#FCEB00]">{filteredEvents.length}</span> events
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm border border-[#FCEB00]/30 overflow-hidden hover:shadow-md transition duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={event.image ? `http://192.168.68.110:8000/storage/${event.image}` : 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
                  }}
                />
                {event.is_featured && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#FCEB00] text-gray-800 text-xs font-bold px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-[#FCEB00]/10 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category?.name || 'Uncategorized'}
                  </span>
                  <span className="text-2xl font-bold text-[#FCEB00]">
                    {event.price === 0 ? 'Free' : `$${event.price}`}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-1">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-[#FCEB00]" />
                    <span className="text-sm">{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-[#FCEB00]" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-[#FCEB00]" />
                    <span className="text-sm line-clamp-1">{event.location}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {event.available_tickets} tickets left
                  </span>
                  <Link
                    to={`/event/${event.id}`}
                    className="bg-[#FCEB00] text-gray-800 px-4 py-2 rounded-lg hover:bg-[#FCEB00]/90 transition duration-300 text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;