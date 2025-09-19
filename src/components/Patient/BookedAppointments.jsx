import { useEffect, useState } from "react";

export default function BookedAppointments() {
  const [appointments, setAppointments] = useState([]);
  const currentPatient =
    JSON.parse(localStorage.getItem("patients")) || null;

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    if (currentPatient) {
      // filter only this patient's appointments
      const myAppointments = storedAppointments.filter(
        (appt) => appt.patientName === currentPatient.name
      );
      setAppointments(myAppointments);
    }
  }, [currentPatient]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Appointments</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
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
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((appt, index) => (
                <tr key={index} className="hover:bg-gray-50">
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
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-4 text-center text-gray-500"
                >
                  No appointments available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
