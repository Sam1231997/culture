import { useState } from "react";
import axios from "axios";

const Appointment2 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    phoneNumber: "",
    email: "",
    date: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/submissions", {
        name: `${formData.firstName} ${formData.surname}`,
        email: formData.email,
        message: formData.message,
        phoneNumber: formData.phoneNumber,
        date: formData.date,
      });
      setResponseMessage("Your message has been sent successfully!");
      setFormData({
        firstName: "",
        surname: "",
        phoneNumber: "",
        email: "",
        date: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("There was an error submitting your message.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">You Can Reach Us at</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <span className="text-xl">📍</span>
            <p>
              <strong>Location 1:</strong> Riz Plaza Building, Plot 54 Stadium
              Road, Elekahia.
            </p>
            <p>
              <strong>Location 2:</strong> Cloudy Weather Building, No 2 Ada
              George Road, Gateway Junction, Port Harcourt, Nigeria.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-xl">✉️</span>
            <p>
              <strong>Email:</strong>{" "}
              opticareeyeclinic.oct242007@gmail.com
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-xl">📞</span>
            <p>
              <strong>Phone Number:</strong>
              <br />
              +234 (0) 701 166 1146
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Let's Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="border border-gray-300 rounded-lg p-3 w-full"
              required
            />
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Surname"
              className="border border-gray-300 rounded-lg p-3 w-full"
              required
            />
          </div>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Your Number"
            className="border border-gray-300 rounded-lg p-3 w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg p-3 w-full"
            required
          />
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Date for appointment"
            className="border border-gray-300 rounded-lg p-3 w-full"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="border border-gray-300 rounded-lg p-3 w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
        {responseMessage && (
          <p className="mt-4 text-center text-green-500">{responseMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Appointment2;
