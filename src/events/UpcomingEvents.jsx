// src/pages/UpcomingEvents.jsx
import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    setEvents(storedEvents);
    setUser(storedUser);
  }, []);

  const handleBookEvent = (eventId) => {
    if (!user) {
      alert("Please login to book events.");
      return;
    }

    const newBooking = {
      id: Date.now(),
      user: user.email,
      eventId,
      status: "Pending",
    };

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Event booked successfully!");
  };

  // Filter events by search
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-yellow-300 p-6">
      <h1 className="text-2xl font-bold mb-2">Upcoming Events</h1>
      <p className="text-gray-700 mb-6">
        Discover and book amazing events happening near you
      </p>

      {/* Search + Filter */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow px-4 py-2 rounded-md border focus:outline-none"
        />
        <button className="bg-white px-4 py-2 rounded-md border hover:bg-gray-100">
          Filters
        </button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={event.image || "/images/default-event.jpg"}
                alt={event.title}
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <span className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded-full">
                  {event.category || "General"}
                </span>

                <h2 className="text-lg font-bold mt-2">{event.title}</h2>

                <div className="flex items-center text-sm text-gray-600 mt-2 space-x-2">
                  <FaCalendarAlt /> <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1 space-x-2">
                  <FaClock /> <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1 space-x-2">
                  <FaMapMarkerAlt /> <span>{event.location}</span>
                </div>

                <p className="text-gray-800 font-semibold mt-2">
                  ${event.price || 99} <span className="text-sm">per person</span>
                </p>

                <button
                  onClick={() => handleBookEvent(event.id)}
                  className="mt-3 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
                >
                  <Link to="/signup">
                  Book Now
                  </Link>
                </button>
                
              </div>
            </div>
          ))
        ) : (
          <p>No events available right now.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
