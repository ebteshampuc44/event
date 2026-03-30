// pages/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ChevronRight, Star, Users, TrendingUp, Award, ArrowRight, Loader } from 'lucide-react';
import api from '../services/api';

const Home = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentEventSlide, setCurrentEventSlide] = useState(0);
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [stats, setStats] = useState({
    monthlyEvents: "500+",
    happyAttendees: "50K+",
    citiesCovered: "100+",
    topOrganizers: "200+"
  });
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const categoriesList = [
    { name: "Music Concerts", icon: "🎵", count: "120+ events", color: "from-purple-500 to-pink-500" },
    { name: "Conferences", icon: "💼", count: "85+ events", color: "from-blue-500 to-cyan-500" },
    { name: "Workshops", icon: "🔧", count: "200+ events", color: "from-green-500 to-emerald-500" },
    { name: "Food Festivals", icon: "🍔", count: "60+ events", color: "from-orange-500 to-red-500" },
  ];

  useEffect(() => {
    fetchFeaturedEvents();
    fetchUpcomingEvents();
    fetchStats();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const fetchFeaturedEvents = async () => {
    try {
      const response = await api.get('/events/featured');
      console.log('Featured events:', response.data);
      
      if (response.data && response.data.success) {
        setFeaturedEvents(response.data.data || []);
      } else if (Array.isArray(response.data)) {
        setFeaturedEvents(response.data);
      } else if (response.data && response.data.data) {
        setFeaturedEvents(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching featured events:', error);
      // Fallback featured events
      setFeaturedEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchUpcomingEvents = async () => {
    try {
      const response = await api.get('/events/upcoming');
      console.log('Upcoming events:', response.data);
      
      if (response.data && response.data.success) {
        setUpcomingEvents(response.data.data || []);
      } else if (Array.isArray(response.data)) {
        setUpcomingEvents(response.data);
      } else if (response.data && response.data.data) {
        setUpcomingEvents(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching upcoming events:', error);
      setUpcomingEvents([]);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await api.get('/stats');
      if (response.data && response.data.success) {
        setStats(response.data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

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

  if (loading) {
    return (
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-[#FCEB00] animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading amazing events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[600px] mx-4 sm:mx-8 lg:mx-12 mt-16 mb-8 rounded-3xl overflow-hidden shadow-2xl">
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
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

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

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Calendar, label: "Monthly Events", value: stats.monthlyEvents },
            { icon: Users, label: "Happy Attendees", value: stats.happyAttendees },
            { icon: TrendingUp, label: "Cities Covered", value: stats.citiesCovered },
            { icon: Award, label: "Top Organizers", value: stats.topOrganizers }
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

      {/* Popular Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Popular Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover events across various categories that match your interests</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categoriesList.map((category, index) => (
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

      {/* Featured Events */}
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
        
        {featuredEvents.length > 0 ? (
          <>
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
              <style>{`
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
                        src={event.image ? `http://127.0.0.1:8000/storage/${event.image}` : 'https://via.placeholder.com/400x300?text=Event+Image'} 
                        alt={event.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x300?text=Event+Image';
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#FCEB00] text-black text-xs font-bold px-3 py-1 rounded-full">
                          {event.category?.name || 'Event'}
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
                          <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-[#FCEB00]" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-2 text-[#FCEB00]" />
                          <span className="text-sm">{event.available_tickets} tickets left</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                        <div>
                          <span className="text-2xl font-bold text-[#FCEB00]">${event.price}</span>
                          <span className="text-gray-400 text-sm ml-1">/person</span>
                        </div>
                        <Link 
                          to={`/event/${event.id}`} 
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

            {featuredEvents.length > 3 && (
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
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-[#FCEB00]/30">
            <p className="text-gray-500">No featured events available at the moment.</p>
          </div>
        )}
      </div>

      {/* Upcoming Events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't miss out on these exciting events happening soon</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <Link
                key={event.id}
                to={`/upcoming-event/${event.id}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image ? `http://127.0.0.1:8000/storage/${event.image}` : 'https://via.placeholder.com/400x300?text=Event+Image'} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=Event+Image';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FCEB00] text-black text-xs font-bold px-3 py-1 rounded-full">
                      {event.category?.name || 'Event'}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
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
                    <span className="text-[#FCEB00] font-bold text-lg">
                      {event.price === 0 ? 'Free' : `$${event.price}`}
                    </span>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-[#FCEB00] transition-colors flex items-center">
                      View Details
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-3 text-center py-12 bg-white rounded-xl border border-[#FCEB00]/30">
              <p className="text-gray-500">No upcoming events available at the moment.</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
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

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;