

const Why = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 p-8 rounded-lg shadow-lg max-w-7xl mx-auto">
      {/* Left Section: Market List */}
      <div className="flex-1 p-4">
        <h1 className="text-4xl font-serif text-gray-800 mb-6 border-b-2 border-gray-300 pb-2">
          LOCAL MARKETS IN BARKIN LADI LOCAL GOVERNMENT
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          {/* Danrowa Tsoho Market */}
          <div className="flex items-start space-x-3">
            <svg
              className="w-6 h-6 text-green-500 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-bold text-lg text-gray-700">Danrowa Tsoho Market</p>
              <p className="text-sm text-gray-600">(Tuesday): Crops Sold: Maize, Vegetables, Tomatoes.</p>
            </div>
          </div>

          {/* Bakin Kogi Market */}
          <div className="flex items-start space-x-3">
            <svg
              className="w-6 h-6 text-green-500 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-bold text-lg text-gray-700">Bakin Kogi Market</p>
              <p className="text-sm text-gray-600">(Wednesday): Crops Sold: Yams, Cassava Flour, Maize.</p>
            </div>
          </div>

          {/* Barkin Ladi (Saturday) */}
          <div className="flex items-start space-x-3">
            <svg
              className="w-6 h-6 text-green-500 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-bold text-lg text-gray-700">Barkin Ladi (Saturday)</p>
              <p className="text-sm text-gray-600">: Maize, Irish Potatoes.</p>
            </div>
          </div>

          {/* Kasuwan Tomatoes */}
          <div className="flex items-start space-x-3">
            <svg
              className="w-6 h-6 text-green-500 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-bold text-lg text-gray-700">Kasuwan Tomatoes</p>
              <p className="text-sm text-gray-600">(Seasonal -- Daily Market).</p>
            </div>
          </div>

          {/* Gashish Kura Falls (Friday) */}
          <div className="flex items-start space-x-3">
            <svg
              className="w-6 h-6 text-green-500 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-bold text-lg text-gray-700">Gashish Kura Falls (Friday)</p>
              <p className="text-sm text-gray-600"></p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 p-4 flex justify-center items-center">
        <div className="w-full h-full bg-gray-300 rounded-lg overflow-hidden shadow-xl">
          <img
            src="/images/berom/berom6.jpeg"
            alt="Local market scene with people"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Why;