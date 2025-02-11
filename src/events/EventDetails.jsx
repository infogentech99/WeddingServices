import { useLoaderData, useParams } from "react-router-dom";
import eventsData from "../data/event.json"; // Static data import

export default function EventDetails() {
  const event = useLoaderData(); // Load individual event data

  return (
    <div className="p-8 border-l-orange-600 border-l-4 bg-gray-100">
      <h2>
        <span className="font-bold">Event Name:</span> {event.EventName}
      </h2>
      <small>Event Date: {event.EventDate}</small>
      <p>
        <span className="font-bold">Event Description:</span> {event.Description}
      </p>
      <p>
        <span className="font-bold">Location:</span> {event.Location}
      </p>
      <p>
        <span className="font-bold">Event Organizer Contact:</span> {event.Contact}
      </p>
      <form action="">
        <button className="bg-orange-500 text-white p-2 rounded font-bold mt-4 hover:bg-orange-600">
          Register
        </button>
      </form>
    </div>
  );
}

export const eventLoaderDetails = async ({ params }) => {
  const eventId = parseInt(params.id, 10);
  const event = eventsData.events.find((event) => event.id === eventId);

  if (!event) {
    throw new Error("Event not found");
  }

  return event;
};
