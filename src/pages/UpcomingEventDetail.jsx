// pages/UpcomingEventDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, Share2, Heart, ChevronRight } from 'lucide-react';

const UpcomingEventDetail = () => {
  const { id } = useParams();

  // Upcoming Events ডাটা
  const upcomingEvents = [
    {
      id: 1,
      title: "Digital Marketing Workshop",
      date: "Feb 25, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Online (Zoom)",
      price: "Free",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      category: "Workshop",
      availableTickets: 100,
      description: "Learn the latest digital marketing strategies from industry experts. This comprehensive workshop covers SEO, social media marketing, content strategy, and analytics. Perfect for beginners and intermediate marketers looking to upgrade their skills.",
      organizer: "Digital Marketing Institute",
      speakers: [
        { name: "Alex Thompson", role: "SEO Specialist", company: "Google" },
        { name: "Maria Garcia", role: "Social Media Director", company: "Meta" },
        { name: "David Kim", role: "Content Strategist", company: "HubSpot" }
      ],
      schedule: [
        { time: "10:00 AM", activity: "Introduction to Digital Marketing" },
        { time: "11:30 AM", activity: "SEO Best Practices" },
        { time: "1:00 PM", activity: "Lunch Break" },
        { time: "2:00 PM", activity: "Social Media Marketing" },
        { time: "3:30 PM", activity: "Q&A Session" }
      ]
    },
    {
      id: 2,
      title: "Startup Networking Mixer",
      date: "Mar 2, 2024",
      time: "6:30 PM - 9:30 PM",
      location: "Austin Convention Center, Austin, TX",
      price: "$25",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      category: "Networking",
      availableTickets: 150,
      description: "Connect with fellow entrepreneurs, investors, and startup enthusiasts at Austin's premier networking event. Enjoy drinks, appetizers, and meaningful conversations that could lead to your next big opportunity.",
      organizer: "Startup Grind Austin",
      speakers: [
        { name: "Sarah Chen", role: "Venture Partner", company: "500 Startups" },
        { name: "Mike Roberts", role: "Founder", company: "TechStars Alum" }
      ],
      schedule: [
        { time: "6:30 PM", activity: "Registration & Welcome Drinks" },
        { time: "7:00 PM", activity: "Opening Remarks" },
        { time: "7:30 PM", activity: "Structured Networking" },
        { time: "8:30 PM", activity: "Open Networking" }
      ]
    },
    {
      id: 3,
      title: "Photography Masterclass",
      date: "Mar 10, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Seattle Art Museum, Seattle, WA",
      price: "$79",
      image: "https://images.unsplash.com/photo-1554048612-b77c3c9e8c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Workshop",
      availableTickets: 30,
      description: "Master the art of photography with award-winning photographer James Wilson. This hands-on workshop covers composition, lighting, editing techniques, and how to build a photography portfolio.",
      organizer: "Seattle Photography Club",
      speakers: [
        { name: "James Wilson", role: "Professional Photographer", company: "National Geographic Contributor" }
      ],
      schedule: [
        { time: "2:00 PM", activity: "Camera Settings & Techniques" },
        { time: "3:00 PM", activity: "Composition & Lighting" },
        { time: "4:00 PM", activity: "Hands-on Practice" },
        { time: "5:00 PM", activity: "Editing Demo & Review" }
      ]
    }
  ];

  // বর্তমান ইভেন্ট খুঁজে বের করা
  const event = upcomingEvents.find(e => e.id === parseInt(id)) || upcomingEvents[0];
  
  // বাকি ইভেন্টগুলো ফিল্টার করা
  const otherEvents = upcomingEvents.filter(e => e.id !== parseInt(id));

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center text-[#FCEB00] hover:text-[#FCEB00]/80 mb-6">
          ← Back to Home
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Event Details */}
          <div className="lg:col-span-2">
            {/* Event Image */}
            <div className="rounded-xl overflow-hidden h-96 mb-6 shadow-md">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Details Card */}
            <div className="bg-white rounded-xl shadow-sm border border-[#FCEB00]/30 p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-[#FCEB00]/10 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                  </span>
                  <h1 className="text-3xl font-bold mt-3 text-gray-900">{event.title}</h1>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 border border-[#FCEB00]/30 rounded-lg hover:bg-[#FCEB00]/10 text-gray-600">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 border border-[#FCEB00]/30 rounded-lg hover:bg-[#FCEB00]/10 text-gray-600">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2 text-[#FCEB00]" />
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium text-gray-900">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2 text-[#FCEB00]" />
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium text-gray-900">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-[#FCEB00]" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2 text-[#FCEB00]" />
                  <div>
                    <p className="text-sm text-gray-500">Organizer</p>
                    <p className="font-medium text-gray-900">{event.organizer}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#FCEB00]/30 pt-6">
                <h2 className="text-xl font-bold mb-4 text-gray-900">About This Event</h2>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-xl shadow-sm border border-[#FCEB00]/30 p-6 mb-6">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Schedule</h2>
              <div className="space-y-3">
                {event.schedule.map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-semibold w-24 text-gray-900">{item.time}</span>
                    <span className="text-gray-600">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Speakers */}
            <div className="bg-white rounded-xl shadow-sm border border-[#FCEB00]/30 p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Speakers</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-center p-4 border border-[#FCEB00]/30 rounded-lg hover:shadow-md transition">
                    <div className="w-12 h-12 bg-[#FCEB00]/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl text-[#FCEB00] font-bold">
                        {speaker.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{speaker.name}</h3>
                      <p className="text-sm text-gray-500">{speaker.role}</p>
                      <p className="text-sm text-[#FCEB00]">{speaker.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card & Other Events */}
          <div className="lg:col-span-1 space-y-6">
            {/* Booking Card */}
            <div className="bg-white rounded-xl shadow-sm border border-[#FCEB00]/30 p-6">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-[#FCEB00]">{event.price}</span>
                {event.price !== "Free" && <span className="text-gray-500"> per person</span>}
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Availability</span>
                  <span className="font-semibold text-green-600">{event.availableTickets} tickets left</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#FCEB00] h-2 rounded-full"
                    style={{ width: `${(event.availableTickets / 200) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Tickets
                </label>
                <select className="w-full border border-[#FCEB00]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white text-black">
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num} className="text-black">
                      {num} ticket{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <Link
                to={`/booking/${event.id}`}
                className="block w-full bg-[#FCEB00] text-gray-800 text-center px-6 py-3 rounded-lg font-semibold hover:bg-[#FCEB00]/90 transition duration-300 mb-4 shadow-md"
              >
                Book Now
              </Link>
            </div>

            {/* Other Upcoming Events */}
            {otherEvents.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-[#FCEB00]/30 p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Other Upcoming Events</h3>
                <div className="space-y-4">
                  {otherEvents.map((otherEvent) => (
                    <Link
                      key={otherEvent.id}
                      to={`/upcoming-event/${otherEvent.id}`}
                      className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition group"
                    >
                      <img
                        src={otherEvent.image}
                        alt={otherEvent.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-[#FCEB00] transition-colors text-sm">
                          {otherEvent.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {otherEvent.date}
                        </p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-[#FCEB00] font-bold text-sm">
                            {otherEvent.price}
                          </span>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#FCEB00] transition-colors" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  to="/"
                  className="mt-4 block text-center text-[#FCEB00] hover:text-[#FCEB00]/80 font-semibold text-sm border-t border-[#FCEB00]/30 pt-4"
                >
                  View All Events
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventDetail;