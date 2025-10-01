import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function ClientLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // 🔹 Get all registered clients
    const clients = JSON.parse(localStorage.getItem("clients")) || [];

    // 🔹 Find a matching client
    const foundClient = clients.find(
      (c) => c.email === email && c.password === password
    );

    if (!foundClient) {
      return toast.error("Invalid email or password");
    }

    // ✅ Save full client object in localStorage
    localStorage.setItem("currentUser", JSON.stringify(foundClient));

    toast.success("Login successful!");

    // Redirect to dashboard
    navigate("/Client/DashboardLayout");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-purple-200 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/faded.jpg')" }} // 👈 your background image
    >
      <ToastContainer />
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">
          Client Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-purple-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-purple-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-gray-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
