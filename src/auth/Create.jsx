import { useState } from "react";
import { Calendar, Clock, MapPin, Phone, Users, Heart, Mail } from 'lucide-react';

export default function Create() {
  const [formData, setFormData] = useState({
    eventName: "",
    eventLocation: "",
    eventTime: "",
    eventDate: "",
    description: "",
    schedule: "",
    contact: "",
    capacity: "",
    category: "ceremony"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3003/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(() => {
      console.log("new wedding event added");
      // Reset form
      setFormData({
        eventName: "",
        eventLocation: "",
        eventTime: "",
        eventDate: "",
        description: "",
        schedule: "",
        contact: "",
        capacity: "",
        category: "ceremony"
      });
    });
  };

  return (
    <div className="min-h-screen bg-rose-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Form Header */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-8 text-white">
          <h1 className="text-3xl font-bold text-center flex items-center justify-center gap-2">
            <Heart className="h-8 w-8" />
            Create Wedding Event
          </h1>
          <p className="text-center mt-2 text-rose-100">Plan your perfect celebration</p>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Event Name */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Event Name</label>
            <input
              type="text"
              name="eventName"
              required
              placeholder="Enter couple's names (e.g., Sarah & John's Wedding)"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
              value={formData.eventName}
              onChange={handleChange}
            />
          </div>

          {/* Event Type */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Event Type</label>
            <select
              name="category"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="ceremony">Wedding Ceremony</option>
              <option value="reception">Wedding Reception</option>
              <option value="engagement">Engagement Party</option>
              <option value="rehearsal">Rehearsal Dinner</option>
            </select>
          </div>

          {/* Date and Time Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">Event Date</label>
              <input
                type="date"
                name="eventDate"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                value={formData.eventDate}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">Event Time</label>
              <input
                type="time"
                name="eventTime"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                value={formData.eventTime}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Venue Location</label>
            <input
              type="text"
              name="eventLocation"
              required
              placeholder="Enter venue name and address"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
              value={formData.eventLocation}
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Event Description</label>
            <textarea
              name="description"
              required
              placeholder="Describe your special day..."
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* Schedule */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Event Schedule</label>
            <textarea
              name="schedule"
              required
              placeholder="Outline the wedding day schedule..."
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
              value={formData.schedule}
              onChange={handleChange}
            />
          </div>

          {/* Contact and Capacity Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">Contact Information</label>
              <input
                type="text"
                name="contact"
                required
                placeholder="Enter contact details"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">Guest Capacity</label>
              <input
                type="number"
                name="capacity"
                required
                placeholder="Maximum number of guests"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                value={formData.capacity}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-4 rounded-lg font-medium hover:from-rose-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2"
          >
            <Heart className="h-5 w-5" />
            Create Wedding Event
          </button>
        </form>
      </div>
    </div>
  );
}