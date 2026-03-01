import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Ticket, Clock, ArrowRight } from 'lucide-react';

const Home = () => {
  const featuredEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      date: "March 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco Convention Center",
      price: "$299",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Conference"
    },
    {
      id: 2,
      title: "Summer Music Festival",
      date: "July 8-10, 2024",
      time: "2:00 PM - 11:00 PM",
      location: "Central Park, NYC",
      price: "$149",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Music"
    },
    {
      id: 3,
      title: "Food & Wine Expo",
      date: "April 5-7, 2024",
      time: "11:00 AM - 9:00 PM",
      location: "McCormick Place, Chicago",
      price: "$89",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Food & Drink"
    }
  ];

  const categories = [
    { name: "Conferences", icon: "🎤", count: 12, color: "bg-blue-50 text-blue-600" },
    { name: "Music Festivals", icon: "🎵", count: 8, color: "bg-purple-50 text-purple-600" },
    { name: "Workshops", icon: "💻", count: 15, color: "bg-green-50 text-green-600" },
    { name: "Food & Drink", icon: "🍳", count: 6, color: "bg-orange-50 text-orange-600" },
    { name: "Sports", icon: "⚽", count: 4, color: "bg-red-50 text-red-600" },
    { name: "Arts & Theater", icon: "🎭", count: 9, color: "bg-pink-50 text-pink-600" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-white/10 pattern-dots"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Amazing Events
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Find and book tickets for the best conferences, concerts, workshops, and festivals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/events"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition duration-300 shadow-lg"
              >
                Browse Events
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                Create Event
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Browse by Category</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore events across different categories and find what interests you most
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 cursor-pointer text-center group"
              >
                <div className={`text-4xl mb-3 ${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.count} events</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
            <Link to="/events" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-gray-600 mb-12">Hand-picked events you don't want to miss</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {event.category}
                    </span>
                    <span className="text-2xl font-bold text-blue-600">{event.price}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{event.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Link
                      to={`/event/${event.id}`}
                      className="flex-1 text-center border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
                    >
                      Details
                    </Link>
                    <Link
                      to={`/booking/${event.id}`}
                      className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">How It Works</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Three simple steps to book your favorite events
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Find Event</h3>
              <p className="text-gray-600">Browse through our curated list of amazing events</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Book Tickets</h3>
              <p className="text-gray-600">Select your tickets and complete the booking</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Enjoy Event</h3>
              <p className="text-gray-600">Show your ticket and have a great time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Host Your Own Event?</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Join thousands of event organizers who use our platform to sell tickets and manage registrations
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-lg shadow-md">
            Start Creating Event
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;