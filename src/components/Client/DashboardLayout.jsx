import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  const [events, setEvents] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const storedUser = JSON.parse(localStorage.getItem("currentUser")); // whole object

    setEvents(storedEvents);
    setBookings(storedBookings);
    setUser(storedUser);
  }, []);

  const activeEvents = events.length;

  // ✅ compare booking.email with logged-in user email
  const totalBookings = bookings.filter(
    (b) => b.email === user?.email
  ).length;

  const avgPrice =
    events.length > 0
      ? (
          events.reduce((sum, e) => sum + (parseFloat(e.price) || 0), 0) /
          events.length
        ).toFixed(2)
      : 0;

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div>
      <div className="relative bg-purple-400">
        <header className="flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-white">🎉 EventHub</h1>
          <nav className="flex items-center space-x-6 font-semibold">
            
            <Link to="events" className="hover:text-white">
              Events
            </Link>
            <Link to="bookings" className="hover:text-white">
              My Bookings
            </Link>
              
            <Link to="prof" className="hover:text-white">
              Profile
            </Link>
            {user && (
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            )}
          </nav>
        </header>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center p-8">
        <div>
          <p className="text-3xl font-bold text-purple-400">{activeEvents}</p>
          <p className="text-gray-400">Active Events</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-purple-400">{totalBookings}</p>
          <p className="text-gray-400">Total Bookings</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-purple-400">${avgPrice}</p>
          <p className="text-gray-400">Average Price</p>
        </div>
      </div>

      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}
