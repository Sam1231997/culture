

const Bassa = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/anaguta/bassa.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-sm md:text-base mb-2">
            Home › Bassa
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-serif">
            BASSA
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Left Column */}
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800">
                BASSA
              </h2>
            </div>
            
            {/* Right Column */}
            <div className="md:w-2/3 flex flex-col lg:flex-row gap-8">
              <p className="text-gray-700 leading-relaxed lg:w-2/3">
                Bassa, a vibrant Local Government Area located in the northern region of
                Plateau State, Nigeria, boasts a rich cultural tapestry and an abundance of
                natural beauty. Nestled along the borders of Kaduna and Bauchi States, its
                administrative center lies in the town of Bassa, situated at coordinates
                9°58'00"N 8°44'00"E.
                <br /><br />
                Spanning an expansive area of 1,743 square kilometers, Bassa is home to a
                diverse population that counted 186,850 residents during the 2006 census.
                Within this melting pot of cultures, numerous languages find voice, including
                Irigwe, Afizere, Rukuba, Buji, Chawai, Jere, Gusu, Kurama, Limoro, Taroh, Sanga,
                Jing, Duguri, and Chekakube.
              </p>
              <div className="lg:w-1/3 flex-shrink-0">
                <img
                  src="/images/anaguta/bassa.jpg"
                  alt="Map of Bassa Local Government Area"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Festivals Section (Blue background) */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Left Column */}
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-serif">
                TRADITIONAL FESTIVALS
              </h2>
            </div>
            
            {/* Right Column */}
            <div className="md:w-2/3">
              <p className="leading-relaxed mb-6">
                Beyond its culinary offerings, Bassa Local Government Area comes alive with an array of festivals that
                resonate with the local culture. These festivals not only celebrate traditions but also provide a glimpse into
                the heart and soul of the community. Some of the notable festivals in Bassa include:
              </p>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-white border-opacity-30 pb-2">
                  <span className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Remaze (Buji)</span>
                  </span>
                  <span>+</span>
                </li>
                <li className="flex justify-between items-center border-b border-white border-opacity-30 pb-2">
                  <span className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Irigwe New Year Celebration</span>
                  </span>
                  <span>+</span>
                </li>
                 <li className="flex justify-between items-center border-b border-white border-opacity-30 pb-2">
                  <span className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Anchoncho</span>
                  </span>
                  <span>+</span>
                </li>
                 <li className="flex justify-between items-center border-b border-white border-opacity-30 pb-2">
                  <span className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Arno New Year Celebration</span>
                  </span>
                  <span>+</span>
                </li>
              </ul>
              <p className="leading-relaxed mt-6">
                 Bassa Local Government Area stands as a testament to the diversity, cultural richness, and culinary
                 artistry of its people. Its festivals and traditions not only celebrate the past but also lay the foundation for
                 a vibrant future, where the flavors of tradition and the spirit of unity continue to thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bassa;