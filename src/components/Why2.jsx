

const Why2= () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 p-8 rounded-lg shadow-lg max-w-7xl mx-auto">
      {/* Left Section: Market List */}
      <div className="flex-1 p-4">
        <h1 className="text-4xl font-serif text-gray-800 mb-6 border-b-2 border-gray-300 pb-2">
          Agriculture in Plateau State

        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          The Agricultural Economy of Plateau State is predominantly agrarian, covering an estimated land area of 53,585.89 sq. km, with about two-thirds of it being arable. Major food crops cultivated include Irish potatoes, sweet potatoes, e horticultural crops. Livestock production, particularly poultry (broilers & layers) and cattle breeding, takes precedence.
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 p-4 flex justify-center items-center">
        <div className="w-100 h-100 bg-gray-300 rounded-lg overflow-hidden shadow-xl">
          <img
            src="/images/nwaghavul/nwa5.jpeg"
            alt="Local market scene with people"
            className="w-100 h-100 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Why2;