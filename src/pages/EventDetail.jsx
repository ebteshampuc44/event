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
        <Link to="/events" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
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
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                  </span>
                  <h1 className="text-3xl font-bold mt-3 text-gray-900">{event.title}</h1>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-600">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-600">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium text-gray-900">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium text-gray-900">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Organizer</p>
                    <p className="font-medium text-gray-900">{event.organizer}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-xl font-bold mb-4 text-gray-900">About This Event</h2>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
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
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Speakers</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                    <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl text-blue-600 font-bold">
                        {speaker.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900">{speaker.name}</h3>
                    <p className="text-sm text-gray-500">{speaker.role}</p>
                    <p className="text-sm text-blue-600">{speaker.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-blue-600">{event.price}</span>
                <span className="text-gray-500"> per person</span>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Availability</span>
                  <span className="font-semibold text-green-600">{event.availableTickets} tickets left</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(event.availableTickets / 500) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Tickets
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 bg-white">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num} ticket{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <Link
                to={`/booking/${event.id}`}
                className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mb-4 shadow-md"
              >
                Book Now
              </Link>

              <button className="w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
                Save to Wishlist
              </button>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold mb-3 text-gray-900">What's included:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
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