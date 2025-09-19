import { useEffect, useState } from "react";

export default function AdminReport() {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
    setFilteredAppointments(storedAppointments);
  }, []);

  // Filter appointments by date range
  const filterByDate = () => {
    if (!startDate && !endDate) {
      setFilteredAppointments(appointments);
      return;
    }

    const filtered = appointments.filter((appt) => {
      const apptDate = new Date(appt.date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      if (start && apptDate < start) return false;
      if (end && apptDate > end) return false;

      return true;
    });

    setFilteredAppointments(filtered);
  };

  // Count statuses
  const stats = {
    total: filteredAppointments.length,
    approved: filteredAppointments.filter((a) => a.status === "Approved").length,
    pending: filteredAppointments.filter((a) => a.status === "Pending").length,
    rejected: filteredAppointments.filter((a) => a.status === "Rejected").length,
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        Appointments Report
      </h2>

      {/* Date Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div>
          <label className="block text-gray-600 text-sm mb-1">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-600 text-sm mb-1">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded-lg px-3 py-2"
          />
        </div>
        <button
          onClick={filterByDate}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-5"
        >
          Apply Filter
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <span className="text-xl font-bold">{stats.total}</span>
          <p className="text-gray-500">Total</p>
        </div>
        <div className="bg-green-100 text-green-700 shadow rounded-lg p-4 text-center">
          <span className="text-xl font-bold">{stats.approved}</span>
          <p>Approved</p>
        </div>
        <div className="bg-yellow-100 text-yellow-700 shadow rounded-lg p-4 text-center">
          <span className="text-xl font-bold">{stats.pending}</span>
          <p>Pending</p>
        </div>
        <div className="bg-red-100 text-red-700 shadow rounded-lg p-4 text-center">
          <span className="text-xl font-bold">{stats.rejected}</span>
          <p>Rejected</p>
        </div>
      </div>

      {/* Table Preview */}
      <div className="bg-white shadow rounded-lg p-6 overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Patient</th>
              <th className="border px-4 py-2">Doctor</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Reason</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appt, idx) => (
                <tr key={idx} className="text-center">
                  <td className="border px-4 py-2">{appt.patientName || "N/A"}</td>
                  <td className="border px-4 py-2">{appt.doctor}</td>
                  <td className="border px-4 py-2">{appt.date}</td>
                  <td className="border px-4 py-2">{appt.time}</td>
                  <td className="border px-4 py-2">{appt.reason || "N/A"}</td>
                  <td
                    className={`border px-4 py-2 font-semibold ${
                      appt.status === "Approved"
                        ? "text-green-600"
                        : appt.status === "Rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {appt.status || "Pending"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-gray-500 py-4">
                  No appointments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
