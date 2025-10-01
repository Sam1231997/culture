import { useState } from "react";
// import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const { firstname, lastname, email, password, confirmPassword } = formData;

  if (!firstname || !lastname || !email || !password || !confirmPassword) {
    return toast.error("All fields are required");
  }

  if (password !== confirmPassword) {
    return toast.error("Passwords do not match");
  }

  // Get existing clients from localStorage
  const existingClients = JSON.parse(localStorage.getItem("clients")) || [];

  // Check if email already exists
  const emailExists = existingClients.some((client) => client.email === email);
  if (emailExists) {
    return toast.error("Email already exists!");
  }

  // Create new client with a unique ID
  const newClient = {
    id: Date.now().toString(), // 👈 unique ID
    firstname,
    lastname,
    email,
    password, // ⚠️ in real apps, hash this
  };

  // Save new client in clients array
  existingClients.push(newClient);
  localStorage.setItem("clients", JSON.stringify(existingClients));

  // ✅ Save as currentUser immediately after signup
  localStorage.setItem("currentUser", JSON.stringify(newClient));

  toast.success("Registration successful!");

  // Reset form
  setFormData({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // navigate("/dashboard"); // 👈 uncomment if you want redirect
};


  return (
     <div
      className="flex items-center justify-center min-h-screen bg-cover bg-purple-200 bg-center"
      
    >
      <ToastContainer />
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">Client Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-purple-600 mb-1">First Name</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-purple-600 mb-1">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

         

          <div>
            <label className="block text-purple-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-purple-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-purple-600 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-200 font-semibold"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
