// pages/OrganizerBooking.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, DollarSign, Upload, CheckCircle, AlertCircle } from 'lucide-react';

const OrganizerBooking = () => {
  const [formData, setFormData] = useState({
    eventTitle: '',
    eventCategory: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    venueAddress: '',
    ticketPrice: '',
    totalTickets: '',
    eventDescription: '',
    organizerName: '',
    organizerEmail: '',
    organizerPhone: '',
    termsAccepted: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    'Conference',
    'Music Concert',
    'Workshop',
    'Food Festival',
    'Sports Event',
    'Art Exhibition',
    'Networking',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.eventTitle.trim()) newErrors.eventTitle = 'Event title is required';
    if (!formData.eventCategory) newErrors.eventCategory = 'Please select a category';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
    if (!formData.eventTime) newErrors.eventTime = 'Event time is required';
    if (!formData.eventLocation) newErrors.eventLocation = 'Location is required';
    if (!formData.venueAddress.trim()) newErrors.venueAddress = 'Venue address is required';
    if (!formData.ticketPrice) newErrors.ticketPrice = 'Ticket price is required';
    if (!formData.totalTickets) newErrors.totalTickets = 'Total tickets is required';
    if (!formData.eventDescription.trim()) newErrors.eventDescription = 'Event description is required';
    if (!formData.organizerName.trim()) newErrors.organizerName = 'Organizer name is required';
    if (!formData.organizerEmail.trim()) {
      newErrors.organizerEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.organizerEmail)) {
      newErrors.organizerEmail = 'Email is invalid';
    }
    if (!formData.organizerPhone.trim()) newErrors.organizerPhone = 'Phone number is required';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-[#FCEB00]/30 p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Event Submitted Successfully!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for submitting your event. Our team will review your event details and get back to you within 24-48 hours.
            </p>
            <div className="bg-[#FCEB00]/10 rounded-lg p-4 mb-6 text-left">
              <p className="text-sm text-gray-700">
                <strong>Next steps:</strong>
              </p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-[#FCEB00]" />
                  Review your event details
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-[#FCEB00]" />
                  Verification of organizer information
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-[#FCEB00]" />
                  Event will be published after approval
                </li>
              </ul>
            </div>
            <div className="flex gap-4 justify-center">
              <Link
                to="/"
                className="bg-[#FCEB00] text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-[#FCEB00]/90 transition"
              >
                Go to Home
              </Link>
              <Link
                to="/events"
                className="border-2 border-[#FCEB00] text-[#FCEB00] px-6 py-2 rounded-lg font-semibold hover:bg-[#FCEB00]/10 transition"
              >
                Browse Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Host Your Event With Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to list your event on our platform and reach thousands of potential attendees
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#FCEB00]/30 overflow-hidden">
          <div className="bg-[#FCEB00]/10 px-6 py-4 border-b border-[#FCEB00]/30">
            <h2 className="text-xl font-bold text-gray-900">Event Details</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            {/* Event Title */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="eventTitle"
                value={formData.eventTitle}
                onChange={handleChange}
                className={`w-full border ${errors.eventTitle ? 'border-red-500' : 'border-[#FCEB00]/30'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white text-black`}
                placeholder="e.g., Tech Innovation Summit 2024"
              />
              {errors.eventTitle && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.eventTitle}
                </p>
              )}
            </div>

            {/* Category and Date */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="eventCategory"
                  value={formData.eventCategory}
                  onChange={handleChange}
                  className={`w-full border ${errors.eventCategory ? 'border-red-500' : 'border-[#FCEB00]/30'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white text-black`}
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.eventCategory && (
                  <p className="mt-1 text-sm text-red-500">{errors.eventCategory}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className={`w-full border ${errors.eventDate ? 'border-red-500' : 'border-[#FCEB00]/30'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white text-black`}
                />
                {errors.eventDate && (
                  <p className="mt-1 text-sm text-red-500">{errors.eventDate}</p>
                )}
              </div>
            </div>

            {/* Time and Location */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Time <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  name="eventTime"
                  value={formData.eventTime}
                  onChange={handleChange}
                  className={`w-full border ${errors.eventTime ? 'border-red-500' : 'border-[#FCEB00]/30'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white text-black`}
                />
                {errors.eventTime && (
                  <p className="mt-1 text-sm text-red-500">{errors.eventTime}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City/Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="eventLocation"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  className={`w-full border ${errors.eventLocation ? 'border-red-500' : 'border-[#FCEB00]/30'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white text-black`}
                  placeholder="e.g., San Francisco, CA"
                />
                {errors.eventLocation && (
                  <p className="mt-1 text-sm text-red-500">{errors.eventLocation}</p>
                )}
              </div>
            </div>

            {/* Venue Address */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Venue Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="venueAddress"
                value={formData.venueAddress}
                onChange={handleChange}
                className={`w-full border ${errors.venueAddress ? 'border-red-500' : 'border-[#FCEB00]/30'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white text-black`}
                placeholder="Full venue address"
              />
              {errors.venueAddress && (
                <p className="mt-1 text-sm text-red-500">{errors.venueAddress}</p>
              )}
            </div>

            {/* Price and Tickets */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ticket Price ($) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="ticketPrice"
                  value={formData.ticketPrice}
                  onChange={handleChange}
                  className={`w-full border ${errors.ticketPrice ? 'border-red-500' : 'border-[#FCEB00]/30'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white text-black`}
                  placeholder="0 for free events"
                  min="0"
                />
                {errors.ticketPrice && (
                  <p className="mt-1 text-sm text-red-500">{errors.ticketPrice}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Tickets Available <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="totalTickets"
                  value={formData.totalTickets}
                  onChange={handleChange}
                  className={`w-full border ${errors.totalTickets ? 'border-red-500' : 'border-[#FCEB00]/30'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white text-black`}
                  placeholder="Number of tickets"
                  min="1"
                />
                {errors.totalTickets && (
                  <p className="mt-1 text-sm text-red-500">{errors.totalTickets}</p>
                )}
              </div>
            </div>

            {/* Event Description */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="eventDescription"
                value={formData.eventDescription}
                onChange={handleChange}
                rows="4"
                className={`w-full border ${errors.eventDescription ? 'border-red-500' : 'border-[#FCEB00]/30'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white text-black`}
                placeholder="Describe your event, agenda, special guests, etc."
              ></textarea>
              {errors.eventDescription && (
                <p className="mt-1 text-sm text-red-500">{errors.eventDescription}</p>
              )}
            </div>

            {/* Image Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Image/Banner
              </label>
              <div className="border-2 border-dashed border-[#FCEB00]/30 rounded-lg p-6 text-center hover:border-[#FCEB00] transition cursor-pointer">
                <Upload className="w-8 h-8 text-[#FCEB00] mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>

            {/* Organizer Information - New Section */}
            <div className="bg-[#FCEB00]/5 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Organizer Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organizer Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="organizerName"
                    value={formData.organizerName}
                    onChange={handleChange}
                    className={`w-full border ${errors.organizerName ? 'border-red-500' : 'border-[#FCEB00]/30'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white text-black`}
                    placeholder="Your name or organization name"
                  />
                  {errors.organizerName && (
                    <p className="mt-1 text-sm text-red-500">{errors.organizerName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="organizerEmail"
                    value={formData.organizerEmail}
                    onChange={handleChange}
                    className={`w-full border ${errors.organizerEmail ? 'border-red-500' : 'border-[#FCEB00]/30'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white text-black`}
                    placeholder="your@email.com"
                  />
                  {errors.organizerEmail && (
                    <p className="mt-1 text-sm text-red-500">{errors.organizerEmail}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="organizerPhone"
                  value={formData.organizerPhone}
                  onChange={handleChange}
                  className={`w-full border ${errors.organizerPhone ? 'border-red-500' : 'border-[#FCEB00]/30'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white text-black`}
                  placeholder="Your contact number"
                />
                {errors.organizerPhone && (
                  <p className="mt-1 text-sm text-red-500">{errors.organizerPhone}</p>
                )}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#FCEB00] border-gray-300 rounded focus:ring-[#FCEB00]"
                />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to the <a href="#" className="text-[#FCEB00] hover:underline">Terms and Conditions</a> and <a href="#" className="text-[#FCEB00] hover:underline">Privacy Policy</a> <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.termsAccepted && (
                <p className="mt-1 text-sm text-red-500">{errors.termsAccepted}</p>
              )}
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-[#FCEB00] text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-[#FCEB00]/90 transition duration-300 shadow-md"
              >
                Submit Event
              </button>
              <Link
                to="/"
                className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition duration-300 text-center"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800 flex items-start">
            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> All events are reviewed by our team before publication. 
              You will receive a confirmation email once your event is approved. 
              For urgent inquiries, please contact our support team.
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default OrganizerBooking;