import { useState } from 'react';
import { User, Mail, Phone, Camera, Edit2, MapPin, Calendar, Heart } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  
  // Example profile data
  const [profileData, setProfileData] = useState({
    name: "Sarah Johnson",
    role: "Wedding Planner",
    email: "sarah.johnson@email.com",
    phone: "+255 623 216 660",
    location: "Dar Es Salaam, Tanzania",
    experience: "5 years",
    specialization: "Luxury Weddings",
    eventsManaged: "50+",
    profileImage: "/1.jpg" // Using one of your existing images
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Cover Image */}
          <div className="h-48 bg-gradient-to-r from-rose-400 to-pink-500" />

          {/* Profile Content */}
          <div className="relative px-6 pb-6">
            {/* Profile Image */}
            <div className="absolute -top-16 left-6">
              <div className="relative">
                <img 
                  src={profileData.profileImage} 
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
                <button className="absolute bottom-0 right-0 bg-rose-500 p-2 rounded-full text-white hover:bg-rose-600">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Edit Button */}
            <div className="text-right pt-4">
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-600 rounded-lg hover:bg-rose-200"
              >
                <Edit2 className="h-4 w-4" />
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>

            {/* Profile Info */}
            <div className="mt-8 space-y-6">
              {/* Basic Info */}
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-800">{profileData.name}</h1>
                <div className="flex items-center gap-2 text-rose-600">
                  <Heart className="h-5 w-5" />
                  <span>{profileData.role}</span>
                </div>
              </div>

              {/* Contact & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span>{profileData.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span>{profileData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span>{profileData.location}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span>{profileData.experience} Experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Heart className="h-5 w-5 text-gray-400" />
                    <span>{profileData.specialization}</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="bg-rose-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-rose-600">{profileData.eventsManaged}</div>
                  <div className="text-sm text-gray-600">Events Managed</div>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-pink-600">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-600">Active Projects</div>
                </div>
              </div>

              {/* Bio Section */}
              <div className="pt-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">About Me</h2>
                <p className="text-gray-600">
                  Dedicated wedding planner with 5 years of experience creating memorable celebrations. 
                  Specialized in luxury weddings and cultural ceremonies. Committed to turning dreams 
                  into reality with attention to detail and personalized service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Events Section */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Events</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((event) => (
              <div key={event} className="flex items-center gap-4 p-4 border rounded-lg">
                <img 
                  src={`/${event}.jpg`} 
                  alt="Event" 
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-800">Emma & Michael's Wedding</h3>
                  <p className="text-sm text-gray-500">December 15, 2024</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}