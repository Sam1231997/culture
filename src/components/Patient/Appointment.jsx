import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Appointment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing appointments
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    // Add new appointment
    const updatedAppointments = [...storedAppointments, formData];

    // Save to localStorage
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    alert("✅ Appointment booked successfully!");
    navigate("/patient/dashboard"); // redirect back to dashboard
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Book Appointment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Doctor */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Select Doctor
          </label>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="">-- Choose a Doctor --</option>
            <option value="Dr. Smith (Cardiologist)">
              Dr. Smith (Cardiologist)
            </option>
            <option value="Dr. Johnson (Dermatologist)">
              Dr. Johnson (Dermatologist)
            </option>
            <option value="Dr. Brown (Dentist)">Dr. Brown (Dentist)</option>
          </select>
        </div>
        <div className="w-1/2">
              <label className="block text-gray-600 mb-1">Your firstname</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

        {/* Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Appointment Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Appointment Time
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        {/* Reason */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Reason for Visit
          </label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Describe your concern..."
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}
