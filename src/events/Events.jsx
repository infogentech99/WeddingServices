import { useLoaderData, NavLink } from "react-router-dom";
import { Calendar, Clock, MapPin, Heart, Search } from "lucide-react";
import { useState } from "react";

export default function Events() {
  const events = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter((event) =>
    event.EventName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getEventImage = (eventId) => {
    const imageNumber = ((eventId - 1) % 10) + 1;
    return `/${imageNumber}.jpg`; // Ensure images 1.jpg to 10.jpg exist in the public folder.
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-rose-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Wedding Events Calendar
          </h1>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="flex bg-white border border-rose-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="w-64 h-48 relative">
                <img src={getEventImage(event.id)} alt={event.EventName} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 text-rose-600 text-sm mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{event.EventDate}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {event.EventName}
                </h2>
                <p className="text-gray-600 mb-4">{event.Description}</p>
                <NavLink to={`${event.id}`} className="text-rose-600 hover:text-rose-700 font-medium">
                  View Event Details
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const eventLoader = async () => {
  const eventsData = await import("../data/event.json");
  return eventsData.events;
};
