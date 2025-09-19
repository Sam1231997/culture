import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function AdminDashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [stats, setStats] = useState({
    totalPatients: 0,
    totalAppointments: 0,
  });

  const handleLogout = () => {
    localStorage.removeItem("loggedInAdmin");
    navigate("/admin"); // redirect to admin login
  };

  useEffect(() => {
    // Load patients
    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    setStats({
      totalPatients: patients.length,
      totalAppointments: appointments.length,
    });
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-lg flex flex-col fixed top-0 left-0 h-full">
        <div className="p-6 border-b">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/admin.jpg"
              alt="Admin Profile"
              className="w-24 h-24 rounded-full object-cover border"
            />
            <h3 className="mt-3 text-lg font-semibold">Admin Panel</h3>
            <p className="text-gray-500 text-sm">Administrator</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <NavLink
            to="records"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Patients
          </NavLink>
          <NavLink
            to="adminappointments"
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
            to="report"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Generate Report
          </NavLink>
          <NavLink
            to="bills"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Generate Bills
          </NavLink>
          <NavLink
            to="billslist"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Manage Bills
          </NavLink>
           <NavLink
            to="notice"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Notice
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
        <div className="grid grid-cols-2 gap-4 p-6">
          <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold">{stats.totalPatients}</span>
            <span className="text-gray-500">Patients</span>
          </div>
          <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold">{stats.totalAppointments}</span>
            <span className="text-gray-500">Appointments</span>
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
