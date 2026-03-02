import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ChevronRight, Star, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';

const Home = () => {
  // Hero স্লাইডারের জন্য state
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  
  // Featured Events স্লাইডারের জন্য state এবং ref
  const [currentEventSlide, setCurrentEventSlide] = useState(0);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Hero স্লাইডারের ইমেজ ডাটা
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=2070&q=80",
      title: "Discover Amazing Events",
      subtitle: "Find and book tickets for the best concerts, conferences, workshops, and festivals near you"
    },
    {
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=2070&q=80",
      title: "Live Music Experience",
      subtitle: "Enjoy unforgettable moments with world-class artists and bands"
    },
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2070&q=80",
      title: "Business Conferences",
      subtitle: "Network with industry leaders and expand your professional horizons"
    }
  ];

  // Featured Events ডাটা
  const featuredEvents = [
    {
      title: "Tech Innovation Summit",
      date: "Mar 15-17, 2024",
      location: "San Francisco, CA",
      price: "$299",
      attendees: "1.2k+",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Conference"
    },
    {
      title: "Summer Music Festival",
      date: "Jul 8-10, 2024",
      location: "Miami Beach, FL",
      price: "$149",
      attendees: "5k+",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Music"
    },
    {
      title: "Food & Wine Expo",
      date: "Apr 5-7, 2024",
      location: "New York, NY",
      price: "$89",
      attendees: "3k+",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Food"
    },
    {
      title: "Comedy Night Special",
      date: "Feb 20, 2024",
      location: "Chicago, IL",
      price: "$45",
      attendees: "500+",
      image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      category: "Comedy"
    },
    {
      title: "Art & Design Expo",
      date: "May 5-8, 2024",
      location: "Los Angeles, CA",
      price: "$75",
      attendees: "2k+",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
      category: "Art"
    },
    {
      title: "Wellness Retreat",
      date: "Jun 12-15, 2024",
      location: "Boulder, CO",
      price: "$399",
      attendees: "800+",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Wellness"
    }
  ];

  // Upcoming Events ডাটা
  const upcomingEvents = [
    {
      title: "Digital Marketing Workshop",
      date: "Feb 25, 2024",
      time: "10:00 AM",
      location: "Online",
      price: "Free",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
    },
    {
      title: "Startup Networking Mixer",
      date: "Mar 2, 2024",
      time: "6:30 PM",
      location: "Austin, TX",
      price: "$25",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
    },
    {
      title: "Photography Masterclass",
      date: "Mar 10, 2024",
      time: "2:00 PM",
      location: "Seattle, WA",
      price: "$79",
      image: "https://images.unsplash.com/photo-1554048612-b77c3c9e8c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  // Hero স্লাইডার অটো প্লে
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // মাউস ড্র্যাগ ইভেন্ট হ্যান্ডলার
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const itemWidth = sliderRef.current.offsetWidth / 3;
      const activeIndex = Math.round(scrollPosition / itemWidth);
      setCurrentEventSlide(activeIndex);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (!isDragging && sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const itemWidth = sliderRef.current.offsetWidth / 3;
      const activeIndex = Math.round(scrollPosition / itemWidth);
      
      if (activeIndex !== currentEventSlide && activeIndex >= 0 && activeIndex <= featuredEvents.length - 3) {
        setCurrentEventSlide(activeIndex);
      }
    }
  };

  const goToHeroSlide = (index) => {
    setCurrentHeroSlide(index);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      
      {/* Hero Section - স্লাইডার (অপরিবর্তিত) */}
      <section className="relative h-[600px] mx-4 sm:mx-8 lg:mx-12 mt-16 mb-8 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* স্লাইড ইমেজ */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentHeroSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-10000"
            />
          </div>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center px-8 lg:px-16">
          <div className="text-white max-w-2xl animate-fadeIn">
            <div className="inline-flex items-center bg-[#FCEB00]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-[#FCEB00] mr-2" />
              <span className="text-sm font-medium">Your Gateway to Amazing Events</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {heroSlides[currentHeroSlide].title.split(" ").map((word, i, arr) => 
                i === arr.length - 1 ? (
                  <span key={i} className="text-[#FCEB00]">{word}</span>
                ) : (
                  word + " "
                )
              )}
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
              {heroSlides[currentHeroSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/events"
                className="group bg-[#FCEB00] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#FCEB00]/90 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Browse Events
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/organizer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all transform hover:scale-105 text-center"
              >
                Create Event
              </Link>
            </div>

          </div>
        </div>

        {/* স্লাইডার ডট ইন্ডিকেটর */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToHeroSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentHeroSlide 
                  ? "w-10 h-2.5 bg-[#FCEB00]" 
                  : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </section>

      {/* Stats Section - নতুন */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Calendar, label: "Monthly Events", value: "500+" },
            { icon: Users, label: "Happy Attendees", value: "50K+" },
            { icon: TrendingUp, label: "Cities Covered", value: "100+" },
            { icon: Award, label: "Top Organizers", value: "200+" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FCEB00]/10 rounded-full mb-4">
                <stat.icon className="w-6 h-6 text-[#FCEB00]" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Categories - রিডিজাইন */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Popular Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover events across various categories that match your interests</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Music Concerts", icon: "🎵", count: "120+ events", color: "from-purple-500 to-pink-500" },
            { name: "Conferences", icon: "💼", count: "85+ events", color: "from-blue-500 to-cyan-500" },
            { name: "Workshops", icon: "🔧", count: "200+ events", color: "from-green-500 to-emerald-500" },
            { name: "Food Festivals", icon: "🍔", count: "60+ events", color: "from-orange-500 to-red-500" },
          ].map((category, index) => (
            <Link
              key={index}
              to="/events"
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative z-10 text-center">
                <span className="text-5xl mb-4 block transform group-hover:scale-110 transition-transform">{category.icon}</span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{category.name}</h3>
                <p className="text-sm text-[#FCEB00] font-semibold">{category.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Events - স্লাইডার */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Events</h2>
            <p className="text-gray-600">Most popular events handpicked for you</p>
          </div>
          <Link to="/events" className="group inline-flex items-center text-[#FCEB00] font-semibold hover:underline mt-4 md:mt-0">
            View All Events
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* স্লাইডার কন্টেইনার */}
        <div 
          ref={sliderRef}
          className={`flex overflow-x-auto gap-6 pb-8 cursor-grab ${
            isDragging ? "cursor-grabbing select-none" : ""
          }`}
          style={{ 
            scrollBehavior: isDragging ? "auto" : "smooth",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onScroll={handleScroll}
        >
          {/* CSS for hiding scrollbar */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {featuredEvents.map((event, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FCEB00] text-black text-xs font-bold px-3 py-1 rounded-full">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-[#FCEB00] transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-[#FCEB00]" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-[#FCEB00]" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-[#FCEB00]" />
                      <span className="text-sm">{event.attendees} attending</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-bold text-[#FCEB00]">{event.price}</span>
                      <span className="text-gray-400 text-sm ml-1">/person</span>
                    </div>
                    <Link 
                      to={`/event/${index + 1}`} 
                      className="bg-[#FCEB00] text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#FCEB00]/90 transition transform hover:scale-105"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* স্লাইডার ডট ইন্ডিকেটর */}
        <div className="flex justify-center mt-2 space-x-2">
          {Array.from({ length: featuredEvents.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (sliderRef.current) {
                  const itemWidth = sliderRef.current.offsetWidth / 3;
                  sliderRef.current.scrollLeft = index * itemWidth;
                }
                setCurrentEventSlide(index);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentEventSlide 
                  ? "w-8 h-2 bg-[#FCEB00]" 
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to event group ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Upcoming Events Section - নতুন */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't miss out on these exciting events happening soon</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                    <span className="mx-2">•</span>
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#FCEB00] transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2 text-[#FCEB00]" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#FCEB00] font-bold text-lg">{event.price}</span>
                  <Link 
                    to={`/event/upcoming/${index + 1}`}
                    className="text-sm font-semibold text-gray-700 hover:text-[#FCEB00] transition-colors flex items-center"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section - নতুন */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#FCEB00] to-yellow-400 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Host Your Own Event?</h2>
            <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">Join thousands of organizers who are creating amazing experiences on our platform</p>
            <Link
              to="/organizer"
              className="inline-flex items-center bg-black text-[#FCEB00] px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all transform hover:scale-105"
            >
              Start Creating
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;