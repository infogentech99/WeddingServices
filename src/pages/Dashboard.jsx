import { useLoaderData } from "react-router-dom";
import { Calendar, Clock, MapPin, Phone, Heart, Edit, Trash2, PlusCircle, Filter, Search } from 'lucide-react';

export default function Dashboard() {
  const events = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Wedding Management Dashboard</h1>
          <p className="text-sm text-gray-500">Manage and monitor all wedding events</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-rose-600 mb-2">
            <Calendar className="h-6 w-6" />
          </div>
          <p className="text-sm text-gray-600">Upcoming Events</p>
          <h3 className="text-2xl font-bold text-gray-800">{events.length}</h3>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-pink-600 mb-2">
            <Heart className="h-6 w-6" />
          </div>
          <p className="text-sm text-gray-600">Ceremonies</p>
          <h3 className="text-2xl font-bold text-gray-800">
            {events.filter(e => e.category === 'ceremony').length}
          </h3>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-purple-600 mb-2">
            <Clock className="h-6 w-6" />
          </div>
          <p className="text-sm text-gray-600">Receptions</p>
          <h3 className="text-2xl font-bold text-gray-800">
            {events.filter(e => e.category === 'reception').length}
          </h3>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-blue-600 mb-2">
            <MapPin className="h-6 w-6" />
          </div>
          <p className="text-sm text-gray-600">Total Venues</p>
          <h3 className="text-2xl font-bold text-gray-800">
            {new Set(events.map(e => e.Location)).size}
          </h3>
        </div>
      </div>

      {/* Action Bar */}
      <div className="px-6 py-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-4 w-full md:w-auto">
          <button className="inline-flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg">
            <PlusCircle className="h-4 w-4" />
            Add Event
          </button>
          <button className="inline-flex items-center gap-2 border bg-white text-gray-700 px-4 py-2 rounded-lg">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search events..."
            className="w-full pl-9 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>
      </div>

      {/* Events Table */}
      <div className="px-6 py-4">
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {events.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{event.EventName}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{event.EventDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{event.EventTime}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{event.Location}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800">
                      {event.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}