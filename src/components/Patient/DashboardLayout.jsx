import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [appointments, setAppointments] = useState([]);
  const [stats, setStats] = useState({
    totalVisits: 0,
    upcomingVisits: 0,
    totalDoctors: 0,
  });
  const [patient, setPatient] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("loggedInPatient");
    navigate("/patient"); // redirect to login/home page
  };

  useEffect(() => {
    // Load appointments
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);

    const totalVisits = storedAppointments.length;
    const today = new Date();
    const upcomingVisits = storedAppointments.filter(
      (appt) => new Date(appt.date) >= today
    ).length;
    const uniqueDoctors = new Set(
      storedAppointments.map((appt) => appt.doctor)
    ).size;

    setStats({
      totalVisits,
      upcomingVisits,
      totalDoctors: uniqueDoctors,
    });

    // Load logged-in patient info
    const loggedInEmail = localStorage.getItem("loggedInPatient");
    if (loggedInEmail) {
      const patients = JSON.parse(localStorage.getItem("patients")) || [];
      const foundPatient = patients.find((p) => p.email === loggedInEmail);
      setPatient(foundPatient);
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-lg flex flex-col fixed top-0 left-0 h-full">
        <div className="p-6 border-b">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border"
            />
            <h3 className="mt-3 text-lg font-semibold">
              {patient ? `${patient.firstname} ${patient.lastname}` : "Loading..."}
            </h3>
            <p className="text-gray-500 text-sm">
              {patient ? patient.email : "Loading..."}
            </p>
            <p className="text-gray-500 text-sm">
              {patient ? patient.phone || "No phone" : "Loading..."}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
            <NavLink
            to="profile"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Profile
          </NavLink>
        
          <NavLink
            to="appointments"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Book Appointment
          </NavLink>
          <NavLink
            to="bookedappointments"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Appointments
          </NavLink>
        
          <NavLink
            to="mybills"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Bills
          </NavLink>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-semibold"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-72 flex flex-col">
        {/* Top Summary Cards */}
        <div className="grid grid-cols-3 gap-4 p-6">
          <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold">{stats.totalVisits}</span>
            <span className="text-gray-500">Total Visits</span>
          </div>
          <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold">{stats.upcomingVisits}</span>
            <span className="text-gray-500">Upcoming Visits</span>
          </div>
          <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold">{stats.totalDoctors}</span>
            <span className="text-gray-500">Total Doctors</span>
          </div>
        </div>

        {/* Animated Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
