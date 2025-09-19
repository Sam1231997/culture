
import { useState } from 'react';
const AgriculturalSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-7xl my-10">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-2">
          EXPLORE THE WONDERS OF PLATAEU STATE
        </h2>
        <p className="text-gray-600 max-w-2xl">
          Delve into the agricultural sector of Plateau State, highlighting the cultivation and production
          activities that contribute to the region's agricultural prowess.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Image */}
        <div className="lg:w-1/2 flex-shrink-0">
          <img
            src="/images/anaguta/ana6.jpeg"
            alt="A woman holding a basket of fresh produce"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Right: Text Content */}
        <div className="lg:w-1/2">
          <p className="text-gray-700 leading-relaxed mb-4">
            The Agricultural Economy of Plateau State is predominantly agrarian, covering an
            estimated land area of 53,585.89 sq. km, with about two-thirds of it being arable.
            Major food crops cultivated include Irish potatoes, sweet potatoes, chili pepper,
            tomatoes, various vegetables, cereals, legumes, roots and tubers, and tree crops
            such as coffee, gum Arabic, cashew, citrus, mangoes, guava, and olives.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Livestock activities encompass cattle breeding & fattening, poultry production,
            sheep and goat breeding & fattening, quail production, turkey & rabbit production,
            and fish farming. The agricultural potential for supporting manufacturing activities
            remains largely untapped, hindering agro-industrial development. Notably, recent
            efforts on cassava and maize production indicate the untapped possibilities, with a
            focus on meeting the needs of poultry and livestock feeds.
          </p>
          <div className={`${isExpanded ? 'block' : 'hidden'} text-gray-700 leading-relaxed mb-4`}>
            {/* The rest of the content goes here, which is initially hidden */}
            The Geographical Distribution of Major Crops, Forest, and Livestock Products
            reveals that cereal crops represent 34%, root and tuber crops 32%, horticultural
            crops 21%, and forestry 13%. Irish potatoes dominate the root/tuber crops, while
            tomatoes lead the horticultural crops. Livestock production, particularly poultry
            (broilers & layers) and cattle breeding, takes precedence. There is potential for
            the establishment of agro-allied industries to leverage the state's agricultural
            resources, but this is yet to be fully realized.
          </div>
          <button
            onClick={toggleReadMore}
            className="flex items-center text-green-600 font-semibold mt-4"
          >
            <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
            <svg
              className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgriculturalSection;