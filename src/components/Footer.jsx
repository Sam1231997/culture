
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo and Description Section */}
        <div className="col-span-1 lg:col-span-2">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-green-500 mr-2"></div> {/* Placeholder for the logo image */}
            <span className="text-xl font-bold text-gray-800">CULTURE CONNECT</span>
          </div>
          <p className="text-sm text-gray-600 mb-4 max-w-sm">
            Bringing together visionaries and innovators to shape a stronger, more vibrant Jos community.
          </p>
          <div className="flex space-x-2">
            <a href="#" className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
              <FaTiktok size={20} />
            </a>
          </div>
        </div>

        {/* Organisation Section */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Organisation</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">About We Jos Rock</a></li>
            <li><a href="#" className="hover:text-gray-900">About Jos, Plateau</a></li>
            <li><a href="#" className="hover:text-gray-900">Our Team</a></li>
            <li><a href="#" className="hover:text-gray-900">News & Events</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
          </ul>
        </div>

        {/* Popular LGA Section */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Popular LGA</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Jos East</a></li>
            <li><a href="#" className="hover:text-gray-900">Jos North</a></li>
            <li><a href="#" className="hover:text-gray-900">Jos South</a></li>
            <li><a href="#" className="hover:text-gray-900">Barkin Ladi</a></li>
            <li><a href="#" className="hover:text-gray-900">Bassa</a></li>
          </ul>
        </div>

        {/* Directories Section */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Directories</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Hotels & Resorts</a></li>
            <li><a href="#" className="hover:text-gray-900">The Marketplace</a></li>
            <li><a href="#" className="hover:text-gray-900">Agriculture</a></li>
            <li><a href="#" className="hover:text-gray-900">Mineral Resources</a></li>
            <li><a href="#" className="hover:text-gray-900">Business Hub</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="tel:+2349030062026" className="hover:text-gray-900">+2349030062026</a></li>
            <li><a href="tel:+2347033368362" className="hover:text-gray-900">+2347033368362</a></li>
            <li><a href="mailto:info@wejosrock.org" className="hover:text-gray-900">info@wejosrock.org</a></li>
            <li>Shop 17, PPC Shopping Complex, Standard Building, Jos - Plateau State, Nigeria.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;