import { useState, useEffect } from 'react';
// Import your local images
import image1 from '/images/book2.jpg';
import image2 from '/images/book1.jpg';
import image3 from '/images/book3.jpg';
import Appointment2 from './Appointment2';





const ImageSlider = () => {
  // Define an array of local images
  const images = [image1, image2,image3];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // UseEffect hook to change the image every X seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
    <div className="flex justify-center relative items-center h-screen border-slate-600 border-y-2">
      {/* Image container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute transition-opacity duration-1000 ease-in-out w-full h-full object-cover ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <button className="p-2 font-bold text-white absolute bottom-0 right-12 rounded-full w-40 bg-purple-300 hover:scale-95">
          See All
        </button>
    </div>
    <Appointment2/>
    </>
  );
};

export default ImageSlider;
