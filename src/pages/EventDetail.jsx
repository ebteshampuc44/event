import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, Share2, Heart, CheckCircle } from 'lucide-react';

const EventDetail = () => {
  const { id } = useParams();

  const event = {
    id: 1,
    title: "Tech Innovation Summit 2024",
    date: "March 15-17, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "San Francisco Convention Center",
    price: "$299",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    category: "Conference",
    availableTickets: 150,
    description: "Join us for the largest tech innovation summit of the year. Connect with industry leaders, discover cutting-edge technologies, and network with like-minded professionals.",
    organizer: "Tech Events Inc.",
    schedule: [
      { time: "9:00 AM", activity: "Registration & Breakfast" },
      { time: "10:00 AM", activity: "Keynote Speech" },
      { time: "11:30 AM", activity: "Panel Discussion: Future of AI" },
      { time: "1:00 PM", activity: "Lunch Break" },
      { time: "2:00 PM", activity: "Workshop Sessions" },
      { time: "4:00 PM", activity: "Networking Reception" }
    ],
    speakers: [
      { name: "Dr. Sarah Johnson", role: "AI Research Director", company: "Tech Labs" },
      { name: "Michael Chen", role: "CTO", company: "Innovate Corp" },
      { name: "Emily Rodriguez", role: "Product Lead", company: "Future Systems" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link to="/events" className="inline-flex items-center text-[#FCEB00] hover:text-[#FCEB00]/80 mb-6">
          ← Back to Events
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Event Image */}
            <div className="rounded-xl overflow-hidden h-96 mb-6 shadow-md">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Details */}
            <div className="bg-white rounded-xl shadow-sm border border-[#FCEB00]/30 p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-[#FCEB00]/10 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                  </span>
                  <h1 className="text-3xl font-bold mt-3 text-black">{event.title}</h1>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 border border-[#FCEB00]/30 rounded-lg hover:bg-[#FCEB00]/10 text-black">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 border border-[#FCEB00]/30 rounded-lg hover:bg-[#FCEB00]/10 text-black">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-black">
                  <Calendar className="w-5 h-5 mr-2 text-[#FCEB00]" />
                  <div>
                    <p className="text-sm text-black/70">Date</p>
                    <p className="font-medium text-black">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center text-black">
                  <Clock className="w-5 h-5 mr-2 text-[#FCEB00]" />
                  <div>
                    <p className="text-sm text-black/70">Time</p>
                    <p className="font-medium text-black">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center text-black">
                  <MapPin className="w-5 h-5 mr-2 text-[#FCEB00]" />
                  <div>
                    <p className="text-sm text-black/70">Location</p>
                    <p className="font-medium text-black">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center text-black">
                  <Users className="w-5 h-5 mr-2 text-[#FCEB00]" />
                  <div>
                    <p className="text-sm text-black/70">Organizer</p>
                    <p className="font-medium text-black">{event.organizer}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#FCEB00]/30 pt-6">
                <h2 className="text-xl font-bold mb-4 text-black">About This Event</h2>
                <p className="text-black leading-relaxed">{event.description}</p>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-xl shadow-sm border border-[#FCEB00]/30 p-6 mb-6">
              <h2 className="text-xl font-bold mb-4 text-black">Schedule</h2>
              <div className="space-y-3">
                {event.schedule.map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-semibold w-24 text-black">{item.time}</span>
                    <span className="text-black">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Speakers */}
            <div className="bg-white rounded-xl shadow-sm border border-[#FCEB00]/30 p-6">
              <h2 className="text-xl font-bold mb-4 text-black">Speakers</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="text-center p-4 border border-[#FCEB00]/30 rounded-lg hover:shadow-md transition">
                    <div className="w-20 h-20 bg-[#FCEB00]/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl text-[#FCEB00] font-bold">
                        {speaker.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-bold text-black">{speaker.name}</h3>
                    <p className="text-sm text-black/70">{speaker.role}</p>
                    <p className="text-sm text-[#FCEB00]">{speaker.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-[#FCEB00]/30 p-6 sticky top-6">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-[#FCEB00]">{event.price}</span>
                <span className="text-black/70"> per person</span>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-black/70">Availability</span>
                  <span className="font-semibold text-green-600">{event.availableTickets} tickets left</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#FCEB00] h-2 rounded-full"
                    style={{ width: `${(event.availableTickets / 500) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Number of Tickets Field - Text Black */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-black mb-2">
                  Number of Tickets
                </label>
                <select className="w-full border border-[#FCEB00]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white text-black">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num} ticket{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              {/* Email Address Field - Added */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-black mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full border border-[#FCEB00]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white text-black placeholder:text-black/50"
                />
              </div>

              {/* Phone Number Field - Added */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-black mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  placeholder="+880 1234 567890"
                  className="w-full border border-[#FCEB00]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white text-black placeholder:text-black/50"
                />
              </div>

              <Link
                to={`/booking/${event.id}`}
                className="block w-full bg-[#FCEB00] text-black text-center px-6 py-3 rounded-lg font-semibold hover:bg-[#FCEB00]/90 transition duration-300 mb-4 shadow-md"
              >
                Book Now
              </Link>

              <button className="w-full border-2 border-[#FCEB00] text-[#FCEB00] px-6 py-3 rounded-lg font-semibold hover:bg-[#FCEB00]/10 transition duration-300">
                Save to Wishlist
              </button>

              <div className="mt-6 pt-6 border-t border-[#FCEB00]/30">
                <h3 className="font-semibold mb-3 text-black">What's included:</h3>
                <ul className="space-y-2 text-sm text-black/70">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Full access to all sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Lunch and refreshments
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Networking opportunities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Event materials and swag
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;