import { useEffect, useState } from "react";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    setBookings(storedBookings);
    setUser(storedUser);
  }, []);

  // ✅ Show only current user’s bookings
  const myBookings = bookings.filter((b) => b.email === user?.email);

  // ✅ Delete Booking
  const handleDelete = (id) => {
    const updatedBookings = bookings.filter((b) => b.id !== id);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  // ✅ Print Congratulatory Message
  const handlePrint = (booking) => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Booking Confirmation</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .header { color: purple; font-size: 22px; font-weight: bold; margin-bottom: 20px; }
            .details { margin-bottom: 15px; }
            .message { padding: 15px; background: #f3e8ff; border-left: 4px solid purple; font-style: italic; }
          </style>
        </head>
        <body>
          <div class="header">🎉 Booking Confirmation</div>
          <div class="details"><b>Name:</b> ${booking.firstname} ${booking.surname}</div>
          <div class="details"><b>Email:</b> ${booking.email}</div>
          <div class="details"><b>Event:</b> ${booking.eventName}</div>
          <div class="details"><b>Price:</b> ${booking.price}</div>
          <div class="details"><b>Unique:</b> ${booking.id}</div>
          <div class="message">${booking.message || "Congratulations! Your booking has been approved."}</div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">📌 My Bookings</h2>

      {myBookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow-md">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="px-4 py-2 border">First Name</th>
                <th className="px-4 py-2 border">Surname</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Event</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {myBookings.map((booking) => (
                <tr key={booking.id} className="text-center">
                  <td className="px-4 py-2 border">{booking.firstname}</td>
                  <td className="px-4 py-2 border">{booking.surname}</td>
                  <td className="px-4 py-2 border">{booking.email}</td>
                  <td className="px-4 py-2 border">{booking.phone}</td>
                  <td className="px-4 py-2 border">{booking.eventName}</td>
                  <td className="px-4 py-2 border">{booking.price}</td>
                  <td className="px-4 py-2 border font-semibold">
                    <span
                      className={`px-2 py-1 rounded ${
                        booking.status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : booking.status === "Approved"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 border space-x-2">
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>

                    {/* ✅ Show Print button only when approved */}
                    {booking.status === "Approved" && (
                      <button
                        onClick={() => handlePrint(booking)}
                        className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-700"
                      >
                        Print
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          
        </div>
      )}
    </div>
  );
}
