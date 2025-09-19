const Gallery = () => {
    const images = [
      "/images/image1.jpg",
      "/images/image2.jpg",
      "/images/image3.jpg",
      "/images/image4.jpg",
      "images/image5.jpg",
      "images/image6.jpg",
      "images/image8.jpg",
      "images/image9.jpg",
      "images/image10.jpg",
      
      
    ];
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-sm">View Image</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;
  