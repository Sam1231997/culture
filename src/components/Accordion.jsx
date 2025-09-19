import { useState } from "react";
import PropTypes from "prop-types";

const Accordion = ({ title, content, imageUrl, symptoms, symptoms2}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg shadow-sm mb-4 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 bg-gray-800 text-white text-left font-semibold focus:outline-none"
      >
        <div className="flex items-center">
          <span className="mr-2 text-xl">{isOpen ? "-" : "+"}</span>
          {title}
        </div>
        <span
          className={`text-xl transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          &gt;
        </span>
      </button>
      {isOpen && (
        <div className="px-4 py-4 bg-gray-100">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="h-40 w-50 mb-4 rounded-lg"
            />
          )}
          <p className="text-gray-700 mb-2">{content}</p>
          <h3 className="text-gray-800 font-semibold">Symptoms</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>{symptoms}</li>
            <li>{symptoms2}</li>
           
          </ul>
        
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  symptoms: PropTypes.string.isRequired,
  symptoms2: PropTypes.string.isRequired,
  imageUrl: PropTypes.string, // Optional image URL
};

const AccordionList = () => {
  const items = [
    {
      title: "Glaucoma",
      content:
        "Glaucoma is an eye disease that can cause vision loss and blindness by damaging a nerve in the back of your eye called the optic nerve.",
      imageUrl: "/images/glaucoma.jpg",
      symptoms: "Blurred Vission",
      symptoms2: "Distorted vission or vission loss"

    },
    {
      title: "Cataract",
      content: "A cataract is a condition that causes the lens of the eye to become cloudy, which can lead to vision loss if left untreated",
      imageUrl: "/images/cataract.jpg",
      symptoms: "Vission Changes: cloudy, blurry, or dim vission, or difficult to seeing at night",
      symptoms2: "Double vission: You may see double in one eye"
    },
    {
      title: "Refractive",
      content: "Refractive errors occur when the shape of the eye prevents light from focusing directly on the retina.",
      imageUrl: "/images/refractive.jpg",
      symptoms: "Eye strain: Can occur with refractive errors",
      symptoms2: "Headaches: Can be a symptom of refractive errors"
    },
    {
      title: "Retinal Detachment",
      content: "Retinal detachment describes an emergency situation in which a thin layer of tissue (the retina) at the back of the eye pulls away from its normal position.",
      imageUrl: "/images/retinal.jpg",
      symptoms: "Gradually reduced side (peripheral) vision",
      symptoms2: "A curtain-like shadow over your visual field"
    },
    {
      title: "Diabetic and retinopathy",
      content: "Diabetic retinopathy (DR) is a condition that damages the retina, the light-sensitive tissue at the back of the eye, due to high blood sugar levels from diabetes. It's a leading cause of blindness in developed countries and a leading cause of sight loss worldwide. ",
      imageUrl: "/images/retino.jpg",
      symptoms: "Pain or pressure in the eye",
      symptoms2: "Reduced color identification"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {items.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          content={item.content}
          imageUrl={item.imageUrl}
          symptoms={item.symptoms}
          symptoms2={item.symptoms2}
        />
      ))}
    </div>
  );
};

export default AccordionList;
