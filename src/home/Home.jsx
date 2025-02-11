import React, { useState } from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { Calendar, Clock, MapPin, ChevronRight, Search } from 'lucide-react';

export default function Home() {
  const events = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'upcoming', 'ceremony', 'reception', 'completed'];

  // Filter events based on search and category
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.EventName.toLowerCase().includes(searchTerm.toLowerCase());
    if (selectedCategory === 'all') return matchesSearch;

    const isUpcoming = new Date(event.EventDate) > new Date();
    const isCeremony = event.category === 'ceremony';
    const isReception = event.category === 'reception';
    const isCompleted = new Date(event.EventDate) < new Date();

    switch (selectedCategory) {
      case 'upcoming': return matchesSearch && isUpcoming;
      case 'ceremony': return matchesSearch && isCeremony;
      case 'reception': return matchesSearch && isReception;
      case 'completed': return matchesSearch && isCompleted;
      default: return matchesSearch;
    }
  });

  // Function to get a random local image
  const getRandomImage = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // 1 to 10
    return `./${randomNumber}.jpg`; // Assuming images are in the root folder
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white/5 backdrop-blur-lg pb-10">
        <div className="max-w-7xl mx-auto py-16 px-4">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600 mb-4 break-words">
              Wedding Management System
            </h1>
            <p className="text-gray-600 text-xl mb-8">Creating Beautiful Wedding Memories</p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search weddings..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent shadow-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex justify-center gap-2 py-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105
              ${selectedCategory === category 
                ? 'bg-rose-600 text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-gray-50'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <div
              key={event.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={getRandomImage()}
                  alt={event.EventName}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Event Details */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-rose-600 text-sm mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{event.EventDate}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
                  {event.EventName}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.Description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{event.EventTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{event.Location}</span>
                  </div>
                </div>

                <Link
                  to={`/events`}
                  className="inline-flex items-center gap-2 w-full justify-center bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-rose-700 hover:to-pink-700 transition-all"
                >
                  View Details <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const eventLoader = async () => {
  const response = await fetch("http://localhost:3000/events");
  if (!response.ok) {
    throw Error("Could not fetch wedding events");
  }
  return response.json();
};
