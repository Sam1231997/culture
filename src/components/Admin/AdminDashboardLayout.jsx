import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchClient from "./SearchClient"; // ✅ Import Search component

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("profile");
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Load bookings from localStorage
  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  const handleApproveClick = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const handleApproveConfirm = () => {
    if (!selectedBooking) return;

    const updatedBookings = bookings.map((booking) =>
      booking.id === selectedBooking.id
        ? { ...booking, status: "Approved" }
        : booking
    );

    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    // ✅ Store congratulatory message separately
    const approvedBooking = updatedBookings.find(
      (b) => b.id === selectedBooking.id
    );

    if (approvedBooking) {
      const messages = JSON.parse(localStorage.getItem("messages")) || [];
      messages.push({
        bookingId: approvedBooking.id,
        email: approvedBooking.email,
        message:
          message ||
          `🎉 Congratulations ${approvedBooking.firstname}! Your booking for "${approvedBooking.eventName}" has been approved. Please print this confirmation for your records.`,
        date: new Date().toLocaleString(),
      });
      localStorage.setItem("messages", JSON.stringify(messages));
    }

    // ✅ Close modal and reset
    setShowModal(false);
    setMessage("");
    setSelectedBooking(null);
  };

  const handleReject = (id) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: "Rejected" } : booking
    );
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-purple-500 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className={`text-xl font-bold ${!isSidebarOpen && "hidden"}`}>
            Admin
          </h2>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white focus:outline-none"
          >
            {isSidebarOpen ? "←" : "→"}
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1 px-2 space-y-2">
          <button
            onClick={() => setActiveMenu("profile")}
            className={`w-full text-left px-4 py-2 rounded-md transition ${
              activeMenu === "profile"
                ? "bg-purple-400"
                : "hover:bg-purple-400"
            }`}
          >
            {isSidebarOpen ? "Profile" : "👤"}
          </button>

          <button
            onClick={() => setActiveMenu("requests")}
            className={`w-full text-left px-4 py-2 rounded-md transition ${
              activeMenu === "requests"
                ? "bg-purple-400"
                : "hover:bg-purple-400"
            }`}
          >
            {isSidebarOpen ? "View Requests" : "📋"}
          </button>

          {/* ✅ NEW Search Menu */}
          <button
            onClick={() => setActiveMenu("search")}
            className={`w-full text-left px-4 py-2 rounded-md transition ${
              activeMenu === "search"
                ? "bg-purple-400"
                : "hover:bg-purple-400"
            }`}
          >
            {isSidebarOpen ? "Search Client" : "🔍"}
          </button>
        </nav>

        {/* Logout */}
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-400 py-2 rounded-md hover:bg-red-500"
          >
            {isSidebarOpen ? "Logout" : "🚪"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Profile */}
        {activeMenu === "profile" && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-600">
              Welcome to your Dashboard 🎉
            </h2>
            <p className="text-gray-700 text-lg">
              Use the sidebar to manage event booking requests.
            </p>
          </div>
        )}

        {/* Requests */}
        {activeMenu === "requests" && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-purple-700">
              Event Booking Requests
            </h2>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-300 text-white">
                    <th className="py-3 px-4 text-left">Firstname</th>
                    <th className="py-3 px-4 text-left">Surname</th>
                    <th className="py-3 px-4 text-left">Email</th>
                    <th className="py-3 px-4 text-left">Phone</th>
                    <th className="py-3 px-4 text-left">Event</th>
                    <th className="py-3 px-4 text-left">Price</th>
                    <th className="py-3 px-4 text-left">Status</th>
                    <th className="py-3 px-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.length > 0 ? (
                    bookings.map((booking) => (
                      <tr key={booking.id} className="border-b">
                        <td className="py-2 px-4">{booking.firstname}</td>
                        <td className="py-2 px-4">{booking.surname}</td>
                        <td className="py-2 px-4">{booking.email}</td>
                        <td className="py-2 px-4">{booking.phone}</td>
                        <td className="py-2 px-4">{booking.eventName}</td>
                        <td className="py-2 px-4">{booking.price}</td>
                        <td
                          className={`py-2 px-4 font-semibold ${
                            booking.status === "Approved"
                              ? "text-green-600"
                              : booking.status === "Rejected"
                              ? "text-red-600"
                              : "text-yellow-600"
                          }`}
                        >
                          {booking.status}
                        </td>
                        <td className="py-2 px-4 space-x-2">
                          {booking.status === "Pending" ? (
                            <>
                              <button
                                onClick={() => handleApproveClick(booking)}
                                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => handleReject(booking.id)}
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                              >
                                Reject
                              </button>
                            </>
                          ) : (
                            <span className="text-gray-500">✔</span>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="8"
                        className="text-center py-6 text-gray-500 font-medium"
                      >
                        No booking requests
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ✅ Search Client */}
        {activeMenu === "search" && <SearchClient />}
      </div>

      {/* Modal for congratulatory message */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-xl font-bold mb-4 text-purple-600">
              Send Congratulations 🎉
            </h3>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your congratulatory message here..."
              className="w-full border rounded p-2 mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleApproveConfirm}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Approve & Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
