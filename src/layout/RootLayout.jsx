import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-yellow-500 shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            Event Management
          </h1>
          <nav className="space-x-6 text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white underline font-semibold"
                  : "text-white hover:underline hover:text-gray-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="events"
              className={({ isActive }) =>
                isActive
                  ? "text-white underline font-semibold"
                  : "text-white hover:underline hover:text-gray-300"
              }
            >
              Events
            </NavLink>
            <NavLink
              to="create"
              className={({ isActive }) =>
                isActive
                  ? "text-white underline font-semibold"
                  : "text-white hover:underline hover:text-gray-300"
              }
            >
              Create Event
            </NavLink>
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-white underline font-semibold"
                  : "text-white hover:underline hover:text-gray-300"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="profile"
              className={({ isActive }) =>
                isActive
                  ? "text-white underline font-semibold"
                  : "text-white hover:underline hover:text-gray-300"
              }
            >
              Profile
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="container mx-auto">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        © 2025 Event Management System. All rights reserved.
      </footer>
    </div>
  );
}
