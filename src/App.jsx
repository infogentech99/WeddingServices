import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Layouts
import RootLayout from "./layout/RootLayout";
import EventLayout from "./layout/EventsLayout";

// Pages and Components
import NotFound from "./pages/NotFound";
import Home, { eventLoader } from "./home/Home";
import EventDetails, { eventLoaderDetails } from "./events/EventDetails";
import Events from "./events/Events"; // Renamed `Event` to `Events` for clarity
import Create from "./auth/Create";
import Dashboard from "./pages/Dashboard";
import Profile from "./user/Profile";
import EventsError from "./events/EventsError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Home Route with Error Handling */}
      <Route
        index
        loader={eventLoader}
        errorElement={<EventsError />}
        element={<Home />}
      />

      {/* Nested Routes for Events */}
      <Route path="events" element={<EventLayout />}>
        <Route index loader={eventLoader} element={<Events />} />
        <Route
          path=":id"
          loader={eventLoaderDetails}
          errorElement={<EventsError />}
          element={<EventDetails />}
        />
      </Route>

      {/* Other Routes */}
      <Route path="create" element={<Create />} />
      <Route path="dashboard" loader={eventLoader} element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
