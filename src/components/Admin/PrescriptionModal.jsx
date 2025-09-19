// src/components/AdminDashboard/PrescriptionModal.jsx
import { useState } from "react";
import PropTypes from "prop-types";

export default function PrescriptionModal({ patient, onClose }) {
  const [formData, setFormData] = useState({
    name: patient.name || "",
    age: "",
    dob: "",
    prescription: "",
    payment: "",
    date: patient.date || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing records
    const existing = JSON.parse(localStorage.getItem("patientRecords")) || [];

    // Add new one
    const newRecord = { ...formData, id: Date.now(), email: patient.email };
    const updatedRecords = [...existing, newRecord];

    localStorage.setItem("patientRecords", JSON.stringify(updatedRecords));

    alert("Prescription saved successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        <h2 className="text-xl font-bold text-blue-700 mb-4">Add Prescription for {patient.name}</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium">Patient Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              readOnly
              className="w-full border px-3 py-2 rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Prescription</label>
            <textarea
              name="prescription"
              value={formData.prescription}
              onChange={handleChange}
              required
              rows="3"
              className="w-full border px-3 py-2 rounded"
              placeholder="e.g., Amoxicillin 500mg twice daily"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Payment Made (₦)</label>
            <input
              type="number"
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div className="flex justify-end space-x-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

PrescriptionModal.propTypes = {
  patient: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
