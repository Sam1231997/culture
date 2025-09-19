// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Why2 from "./Why2";
import AgriculturalSection from "./AgriculturalSection";
export default function Cards() {
  // Background + right image array
  const images = [
    "/images/berom/berom10.jpg",
   "/images/berom/berom10.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
    <div className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
      {/* Background Image */}
      <motion.div
        key={currentIndex} // triggers fade effect on change
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content */}
      <div className="relative grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        {/* Left Section with Animations */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-blue-600 font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            CULTURE CONNECT
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Discover how Culture Connect is transforming Plateau State.
          </motion.h1>

          <motion.p
            className="text-gray-700 text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Easily sell tickets, manage tours, book group visits, and organize
            events, creating a seamless experience for your guests.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link
              to="/get-started"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/features"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition"
            >
              Explore Features
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Section - Sync Image */}
        <motion.div
          key={currentIndex} // re-renders with background
          className="flex justify-center w-auto h-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={images[currentIndex]}
            alt="Cultural work"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

    </div>
    <Why2/>
    <AgriculturalSection/>
    </>
    
  );
}
