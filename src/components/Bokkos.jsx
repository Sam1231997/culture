

const Bokkos= () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/anaguta/bokkos.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-sm md:text-base mb-2">
            Home › Bokkos
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-serif">
            BOKKOS
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Left Column */}
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800">
                BOKKOS
              </h2>
            </div>
            
            {/* Right Column */}
            <div className="md:w-2/3 flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3 flex-shrink-0">
                <img
                  src="/images/anaguta/kulere.webp"
                  alt="Map of Bokkos Local Government Area"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <p className="text-gray-700 leading-relaxed lg:w-2/3">
                Bokkos is home to a community of industrious individuals, where the blend
                of natural wonders and human-made attractions converge harmoniously.
                The region enjoys favorable weather conditions and a unique geographical
                landscape that distinguishes it from others.
                <br /><br />
                Tourism thrives in Bokkos, nurtured by the amalgamation of peace,
                captivating sites, rich cultural traditions, delightful cuisine, and the
                exceptional character of its people. The 2006 census reported a total
                population of 178,350. The Local Government Area comprises three ruling
                major Chieftains: Ron, Kulere, and Mushere. Saf Ron holds a distinguished
                position as the First Class traditional ruler, presiding over the region's
                traditional institutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tribes and Festivals Section (Blue background) */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Left Column: Tribes */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-serif">
                TRIBES IN BOKKOS
              </h2>
            </div>
            {/* Right Column: Tribes text */}
            <div className="md:w-2/3">
              <p className="leading-relaxed">
                These three tribes, Ron, Mushere, and Kulere, share certain cultural practices, norms, and values. The
                Ron tribe, primarily found in Bokkos, Daffo, Manguna, and Sha Districts, predominantly speaks the Ron
                language. Meanwhile, the Mushere District hosts the Mushere people, conversing in the Mushere
                language. Additionally, residents of Mche, Kamwai, and Toff Districts converse in the Kulere language.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8 mt-12">
            {/* Left Column: Festivals */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-serif">
                TRADITIONAL FESTIVALS
              </h2>
            </div>
            {/* Right Column: Festivals text */}
            <div className="md:w-2/3">
              <p className="leading-relaxed">
                Bokkos celebrates cultural festivals that are integral to the fabric of its society. The Mushere Chiefdom
                annually hosts the Puus Keng festival between March and May, proudly showcasing the rich Mushere
                culture. In contrast, the Ron and Kulere people do not have a central cultural festival.
              </p>
              <p className="leading-relaxed mt-4">
                Instead, each district and community commemorates its festivals, marking the beginning of the farming
                season. Some notable examples include Nafhwai in Butura, Mudurat in Mbar, Tul in Daffo, Shegeu in
                Kamwai, Hwosh in Tangur, and Dall in Firat, among others. The Kulere Chiefdom features festivals like
                Akand and Arum, while the Ron farming community celebrates Yand and Ron festivals, respectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Traditional Foods Section (White background) */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Left Column */}
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800">
                TRADITIONAL FOODS
              </h2>
            </div>
            {/* Right Column */}
            <div className="md:w-2/3">
              <p className="text-gray-700 leading-relaxed">
                A beloved delicacy in Bokkos is Bibal, a sumptuous dish made from red beans, palm and coconut oil,
                combined with black bene seeds. This culinary delight is commonly prepared and savored during
                festivals, weddings, coronation ceremonies, and various social gatherings. Another cherished food
                among the locals is the flour of Achia, where meat is expertly cooked and spiced with palm oil and achia
                flour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bokkos;