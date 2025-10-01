import { useState, useEffect } from "react";

export default function BookingModal({ isOpen, onClose, selectedEvent }) {
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    email: "",
    phone: "",
    eventName: "",
    price: "",
  });

  useEffect(() => {
    if (selectedEvent) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      setFormData((prev) => ({
        ...prev,
        eventName: selectedEvent.name,
        price: selectedEvent.price, // ✅ get price
        email: currentUser?.email || "",
      }));
    }
  }, [selectedEvent]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const newBooking = { id: Date.now(), ...formData, status: "Pending" };
    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    alert("Booking submitted successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4 text-purple-700">
          Book: {formData.eventName}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formData.surname}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          {/* ✅ Uneditable Price */}
          <input
            type="text"
            value={formData.price}
            disabled
            className="w-full p-2 border rounded bg-gray-100 font-semibold text-gray-700"
          />

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
}
