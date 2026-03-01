import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CreditCard, User, Mail, Phone, Calendar, CheckCircle, Lock } from 'lucide-react';

const Booking = () => {
  const { id } = useParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    tickets: 1,
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const event = {
    id: 1,
    title: "Tech Innovation Summit 2024",
    date: "March 15-17, 2024",
    location: "San Francisco Convention Center",
    price: 299,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 3) {
      alert('Booking confirmed! Check your email for details.');
    } else {
      setStep(step + 1);
    }
  };

  const totalAmount = event.price * formData.tickets;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex-1 text-center">
                <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center font-bold
                  ${step >= num ? 'bg-[#FCEB00] text-gray-800' : 'bg-gray-200 text-gray-500'}`}>
                  {step > num ? <CheckCircle className="w-5 h-5" /> : num}
                </div>
                <p className="text-sm mt-2 font-medium text-gray-600">
                  {num === 1 ? 'Tickets' : num === 2 ? 'Your Info' : 'Payment'}
                </p>
              </div>
            ))}
          </div>
          <div className="relative mt-2">
            <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full"></div>
            <div
              className="absolute top-0 left-0 h-1 bg-[#FCEB00] transition-all duration-300"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-[#FCEB00]/30 p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                {step === 1 && 'Select Tickets'}
                {step === 2 && 'Your Information'}
                {step === 3 && 'Payment Details'}
              </h2>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Tickets
                      </label>
                      <select
                        name="tickets"
                        value={formData.tickets}
                        onChange={handleInputChange}
                        className="w-full border border-[#FCEB00]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num} ticket{num > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>

                    <div className="bg-[#FCEB00]/10 p-4 rounded-lg border border-[#FCEB00]/30">
                      <h3 className="font-semibold mb-2 text-gray-800">Ticket Includes:</h3>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-[#FCEB00]" />
                          Full access to all sessions
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-[#FCEB00]" />
                          Lunch and refreshments
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-[#FCEB00]" />
                          Networking opportunities
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full border text-black border-[#FCEB00]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full text-black border border-[#FCEB00]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full text-black border border-[#FCEB00]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border text-black border-[#FCEB00]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white"
                        required
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full border text-black border-[#FCEB00]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="w-full border text-black border-[#FCEB00]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="w-full text-black border border-[#FCEB00]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        name="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={handleInputChange}
                        className="w-full border text-black border-[#FCEB00]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FCEB00] bg-white"
                        required
                      />
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="text-sm text-yellow-800 flex items-center">
                        <Lock className="w-4 h-4 mr-2" />
                        This is a demo booking system. No actual payment will be processed.
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex gap-3">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition duration-300"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className="flex-1 bg-[#FCEB00] text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-[#FCEB00]/90 transition duration-300 shadow-md"
                  >
                    {step === 3 ? 'Confirm Booking' : 'Continue'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-[#FCEB00]/30 p-6 sticky top-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Order Summary</h3>
              
              <div className="mb-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-gray-900">{event.title}</h4>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="text-sm text-gray-500">{event.location}</p>
              </div>

              <div className="border-t border-[#FCEB00]/30 pt-4">
                <div className="flex justify-between mb-2 text-gray-600">
                  <span>Ticket Price</span>
                  <span>${event.price} × {formData.tickets}</span>
                </div>
                <div className="flex justify-between mb-2 text-gray-600">
                  <span>Subtotal</span>
                  <span>${totalAmount}</span>
                </div>
                <div className="flex justify-between mb-2 text-gray-600">
                  <span>Service Fee</span>
                  <span>$10</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-[#FCEB00]/30 mt-2">
                  <span className="text-gray-900">Total</span>
                  <span className="text-[#FCEB00]">${totalAmount + 10}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;