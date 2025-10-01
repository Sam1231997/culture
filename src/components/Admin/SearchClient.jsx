import { useState, useEffect } from "react";

export default function SearchClient() {
  const [bookings, setBookings] = useState([]);
  const [clientId, setClientId] = useState("");
  const [client, setClient] = useState(null);

  // Load all bookings
  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  // ✅ Handle search
  const handleSearch = () => {
    const foundClient = bookings.find((b) => String(b.id) === String(clientId));
    setClient(foundClient || null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">🔍 Search Client</h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          placeholder="Enter Client ID"
          className="border rounded p-2 flex-1"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Search
        </button>
      </div>

      {/* ✅ Display Client Info */}
      {client ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-purple-600">
            Client Details
          </h3>
          <p><strong>Firstname:</strong> {client.firstname}</p>
          <p><strong>Surname:</strong> {client.surname}</p>
          <p><strong>Email:</strong> {client.email}</p>
          <p><strong>Phone:</strong> {client.phone}</p>
          <p><strong>Event:</strong> {client.eventName}</p>
          <p><strong>Price:</strong> {client.price}</p>
          <p>
            <strong>Status:</strong>{" "}
            <span
              className={`font-semibold ${
                client.status === "Approved"
                  ? "text-green-600"
                  : client.status === "Rejected"
                  ? "text-red-600"
                  : "text-yellow-600"
              }`}
            >
              {client.status}
            </span>
          </p>
        </div>
      ) : (
        clientId && (
          <p className="text-red-600 font-medium">⚠ No client found with this ID.</p>
        )
      )}
    </div>
  );
}
