// pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Heart, Shield, Target, Award, ChevronRight, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#FCEB00]/10 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-[#FCEB00] mr-2" />
            <span className="text-sm font-semibold text-gray-700">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We're on a Mission to<br />Connect People Through Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EventBook is your trusted platform for discovering and booking amazing events. 
            We bring people together through unforgettable experiences.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2024, EventBook started with a simple idea: make event discovery and booking 
              seamless for everyone. What began as a small platform has grown into a trusted community 
              of event lovers and organizers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we're proud to host thousands of events across the country, from intimate workshops 
              to large-scale conferences and festivals.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Team collaboration"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#FCEB00] rounded-2xl p-4 shadow-lg">
              <div className="bg-white rounded-xl px-4 py-2">
                <span className="text-2xl font-bold text-gray-900">500+</span>
                <span className="text-sm text-gray-600 ml-2">Events Hosted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#FCEB00]/30">
            <div className="w-12 h-12 bg-[#FCEB00]/10 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-[#FCEB00]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To create memorable experiences by connecting people with events that inspire, 
              educate, and entertain.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#FCEB00]/30">
            <div className="w-12 h-12 bg-[#FCEB00]/10 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-[#FCEB00]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted and user-friendly event platform, where every 
              experience is just a click away.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Calendar, label: "Events", value: "500+" },
            { icon: Users, label: "Happy Users", value: "50K+" },
            { icon: Heart, label: "Reviews", value: "10K+" },
            { icon: Shield, label: "Secure Bookings", value: "100%" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FCEB00]/10 rounded-full mb-3">
                <stat.icon className="w-6 h-6 text-[#FCEB00]" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What We Stand For</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our core values guide everything we do</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Trust & Security",
              description: "Your safety is our priority. All bookings are secure and verified.",
              icon: Shield
            },
            {
              title: "Community First",
              description: "We build features that bring people together and strengthen communities.",
              icon: Users
            },
            {
              title: "Passion for Events",
              description: "We love events as much as you do. Every experience matters.",
              icon: Heart
            }
          ].map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-[#FCEB00]/30 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#FCEB00]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-[#FCEB00]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section - Simplified */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">The passionate people behind EventBook</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            { name: "John Doe", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" },
            { name: "Jane Smith", role: "Head of Events", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" },
            { name: "Mike Johnson", role: "Community Manager", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-[#FCEB00]/30 overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#FCEB00] font-semibold">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#FCEB00] to-yellow-400 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Find Your Next Event?</h2>
            <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">Join thousands of happy users and discover amazing experiences</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/events"
                className="inline-flex items-center bg-black text-[#FCEB00] px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all transform hover:scale-105"
              >
                Browse Events
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;