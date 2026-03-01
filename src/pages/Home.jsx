import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[650px] mx-6 mt-6 rounded-3xl overflow-hidden">
        
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=2070&q=80"
          alt="Concert Crowd"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content - Centered */}
        <div className="relative z-10 h-full flex items-center justify-center px-10">
          <div className="text-white max-w-2xl text-center">
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Amazing <span className="text-[#FCEB00]">Events</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Find and book tickets for the best concerts, conferences, workshops, and festivals near you
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/events"
                className="bg-[#FCEB00] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#FCEB00]/90 transition"
              >
                Browse Events
              </Link>

              <Link
                to="/organizer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                Create Event
              </Link>
            </div>

          </div>
        </div>

      </section>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Music Concerts", icon: "🎵", count: "120+ events" },
            { name: "Conferences", icon: "💼", count: "85+ events" },
            { name: "Workshops", icon: "🔧", count: "200+ events" },
            { name: "Food Festivals", icon: "🍔", count: "60+ events" },
          ].map((category, index) => (
            <Link
              key={index}
              to="/events"
              className="bg-white p-6 rounded-xl shadow-sm border border-[#FCEB00]/30 text-center hover:shadow-md transition"
            >
              <span className="text-4xl mb-3 block">{category.icon}</span>
              <h3 className="font-semibold text-gray-900">{category.name}</h3>
              <p className="text-sm text-[#FCEB00]">{category.count}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Events Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
          <Link to="/events" className="text-[#FCEB00] font-semibold hover:underline">
            View All →
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Tech Innovation Summit",
              date: "Mar 15-17",
              price: "$299",
              image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            },
            {
              title: "Summer Music Festival",
              date: "Jul 8-10",
              price: "$149",
              image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            },
            {
              title: "Food & Wine Expo",
              date: "Apr 5-7",
              price: "$89",
              image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            }
          ].map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-[#FCEB00]/30 overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-[#FCEB00] font-bold">{event.price}</span>
                  <Link to={`/event/${index + 1}`} className="text-sm bg-[#FCEB00]/10 px-3 py-1 rounded-full text-gray-700 hover:bg-[#FCEB00]/20 transition">
                    Book Now
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

export default Home;