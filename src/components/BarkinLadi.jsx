

const BarkinLadi = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Jarawa/ja8.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-sm md:text-base mb-2">
            Home › Barkin Ladi
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-serif">
            BARKIN LADI
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
                BARKIN LADI
              </h2>
            </div>
            
            {/* Right Column */}
            <div className="md:w-2/3 flex flex-col lg:flex-row gap-8">
              <p className="text-gray-700 leading-relaxed lg:w-2/3">
                Plateau State, often referred to as the "Home of Peace and Tourism,"
                is also a powerhouse of agricultural potential. With agriculture
                contributing significantly to the state's economy and employing
                approximately 75% of the population, this sector is vital for
                livelihoods, food security, and economic growth. Despite its
                importance, the agricultural sector currently operates at only 20% of
                its potential, offering immense opportunities for innovation and
                investment.
              </p>
              <div className="lg:w-1/3 flex-shrink-0">
                <img
                  src="/images/anaguta/kulere.webp"
                  alt="Map of Barkin Ladi"
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
                Barkin Ladi is steeped in rich cultural traditions, and it celebrates several traditional festivals that are
                significant in heralding the farming season and expressing gratitude to the gods for a bountiful harvest.
                Two of the major festivals in the region are:
              </p>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-white border-opacity-30 pb-2">
                  <span className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mandyeng Festival</span>
                  </span>
                  <span>+</span>
                </li>
                <li className="flex justify-between items-center border-b border-white border-opacity-30 pb-2">
                  <span className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Vwana Festival</span>
                  </span>
                  <span>+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarkinLadi;