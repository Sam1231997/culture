import { useState, useEffect } from "react";

export default function AdminAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [newDate, setNewDate] = useState("");

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  const openModal = (index, action) => {
    setSelectedIndex(index);
    setSelectedAction(action);
    setShowModal(true);

    if (action === "Reschedule") {
      setNewDate(appointments[index].date || "");
    }
  };

  const confirmAction = () => {
    if (selectedIndex === null || !selectedAction) return;

    const updatedAppointments = [...appointments];

    if (selectedAction === "Approved" || selectedAction === "Rejected") {
      updatedAppointments[selectedIndex].status = selectedAction;
    } else if (selectedAction === "Reschedule") {
      updatedAppointments[selectedIndex].date = newDate;
      updatedAppointments[selectedIndex].status = "Rescheduled";
    }

    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    setShowModal(false);
    setSelectedAction(null);
    setSelectedIndex(null);
    setNewDate("");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Appointments</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                Patient
              </th>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                Doctor
              </th>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                Date
              </th>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                Reason
              </th>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="px-6 py-3 border-b text-center text-sm font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((appt,  index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b">{appt.firstname}</td>
                  <td className="px-6 py-4 border-b">{appt.doctor}</td>
                  <td className="px-6 py-4 border-b">{appt.date}</td>
                  <td className="px-6 py-4 border-b">{appt.reason}</td>
                  <td
                    className={`px-6 py-4 border-b font-medium ${
                      appt.status === "Approved"
                        ? "text-green-600"
                        : appt.status === "Rejected"
                        ? "text-red-600"
                        : appt.status === "Rescheduled"
                        ? "text-blue-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {appt.status || "Pending"}
                  </td>
                  <td className="px-6 py-4 border-b text-center space-x-2">
                    <button
                      onClick={() => openModal(index, "Approved")}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => openModal(index, "Rejected")}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => openModal(index, "Reschedule")}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Reschedule
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-4 text-center text-gray-500"
                >
                  No appointments available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            {selectedAction === "Reschedule" ? (
              <>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Reschedule Appointment
                </h3>
                <input
                  type="datetime-local"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full border rounded-md p-2 mb-4"
                />
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmAction}
                    className="px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white"
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Confirm {selectedAction}
                </h3>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to{" "}
                  <span
                    className={
                      selectedAction === "Approved"
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {selectedAction}
                  </span>{" "}
                  this appointment?
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmAction}
                    className={`px-4 py-2 rounded-md text-white ${
                      selectedAction === "Approved"
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    Yes, {selectedAction}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
