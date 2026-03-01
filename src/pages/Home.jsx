import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const sliderImages = [
    {
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Conference event"
    },
    {
      url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Music festival"
    },
    {
      url: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Food expo"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

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
    { name: "Conferences", icon: "🎤", count: 12, color: "bg-[#FCEB00]/10 text-gray-800" },
    { name: "Music Festivals", icon: "🎵", count: 8, color: "bg-[#FCEB00]/10 text-gray-800" },
    { name: "Workshops", icon: "💻", count: 15, color: "bg-[#FCEB00]/10 text-gray-800" },
    { name: "Food & Drink", icon: "🍳", count: 6, color: "bg-[#FCEB00]/10 text-gray-800" },
    { name: "Sports", icon: "⚽", count: 4, color: "bg-[#FCEB00]/10 text-gray-800" },
    { name: "Arts & Theater", icon: "🎭", count: 9, color: "bg-[#FCEB00]/10 text-gray-800" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slider */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Slider Images */}
        <div className="absolute inset-0">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text readability */}
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-[#FCEB00]'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex items-center justify-center sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Discover Amazing Events
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100 drop-shadow-md">
              Find and book tickets for the best conferences, concerts, workshops, and festivals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/events"
                className="bg-[#FCEB00] text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-[#FCEB00]/90 transition duration-300 shadow-lg"
              >
                Browse Events
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition duration-300 backdrop-blur-sm">
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
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 cursor-pointer text-center group border border-[#FCEB00]/30"
              >
                <div className={`text-4xl mb-3 w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-[#FCEB00]/10`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-[#FCEB00] transition">{category.name}</h3>
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
            <Link to="/events" className="text-[#FCEB00] hover:text-[#FCEB00]/80 font-semibold flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-gray-600 mb-12">Hand-picked events you don't want to miss</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-[#FCEB00]/30">
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
                  <div className="mt-4 flex gap-2">
                    <Link
                      to={`/event/${event.id}`}
                      className="flex-1 text-center border-2 border-[#FCEB00] text-[#FCEB00] px-4 py-2 rounded-lg font-semibold hover:bg-[#FCEB00]/10 transition duration-300"
                    >
                      Details
                    </Link>
                    <Link
                      to={`/booking/${event.id}`}
                      className="flex-1 text-center bg-[#FCEB00] text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-[#FCEB00]/90 transition duration-300"
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
              <div className="bg-[#FCEB00]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#FCEB00]">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Find Event</h3>
              <p className="text-gray-600">Browse through our curated list of amazing events</p>
            </div>
            <div className="text-center">
              <div className="bg-[#FCEB00]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#FCEB00]">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Book Tickets</h3>
              <p className="text-gray-600">Select your tickets and complete the booking</p>
            </div>
            <div className="text-center">
              <div className="bg-[#FCEB00]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#FCEB00]">3</span>
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
          <button className="bg-[#FCEB00] text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-[#FCEB00]/90 transition duration-300 text-lg shadow-md">
            Start Creating Event
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;