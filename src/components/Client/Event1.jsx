import { useState } from "react";
import BookingModal from "./BookingModal";

const products = [
  {
    id: 1,
    name: "Internal Cofee Festival",
    description: "Farin Gada, Jos Plateau State Nigeria.",
    price: "$250",
    image: "/images/events/event1.jpeg",
  },
  {
    id: 2,
    name: "World Bank Contracts",
    description: "Inside University of Jos, Jos Plateau State Nigeria.",
    price: "$180",
    image: "/images/events/event2.jpeg",
  },
  {
    id: 3,
    name: "Reigal Renaissance",
    description: "Behind Jos Golf Course, Jos Plateau State Nigeria.",
    price: "$220",
    image: "/images/events/event3.jpeg",
  },
  {
    id: 4,
    name: "Royal Heritage Africa",
    description: "Opposite Jos Golf Course, Jos Plateau State Nigeria.",
    price: "$300",
    image: "/images/events/event4.jpeg",
  },
  {
    id: 5,
    name: "Widows Mite 7.0",
    description: "Behind Ewa Church, Jos Plateau State.",
    price: "$280",
    image: "/images/events/event5.jpg",
  },
  {
    id: 6,
    name: "Nzeberom Festival",
    description: "Jos, Plateau State Nigeria.",
    price: "$200",
    image: "/images/events/event6.jpeg",
  },
];

const Event1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleBookNow = (event) => {
    setSelectedEvent(event); // ✅ pass the whole object
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <span className="text-2xl font-bold text-green-600">
                {product.price}
              </span>
              <button
                onClick={() => handleBookNow(product)}
                className="mt-4 w-full bg-purple-600 text-white font-semibold py-2 rounded-full hover:bg-purple-700 transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedEvent={selectedEvent}
      />
    </div>
  );
};

export default Event1;
