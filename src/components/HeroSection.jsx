import  { useState, useEffect, } from 'react';
import { Link } from "react-router-dom";
import Product from './Product';

const images = [
  '/images/attire/atta1.jpg',
  '/images/attire/atta2.jpeg',
  '/images/attire/atta3.jpeg',
  '/images/attire/atta4.jpg',
  '/images/attire/atta5.jpg',
  // Add more image paths as needed
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set an interval to change the image every 5 seconds (5000 milliseconds)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // The empty dependency array ensures this runs once on mount

  return (
    <>
    <div
      className="relative h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Embrace Your Heritage</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Discover our exclusive collection of authentic traditional attire, handcrafted with care and tradition.
        </p>
        <Link to="/product" className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
          Shop the Collection
        </Link>
      </div>
    
    </div>
     <Product/>
     </>
  );
};

export default HeroSection;