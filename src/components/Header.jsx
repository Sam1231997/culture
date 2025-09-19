import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-8 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            <img src="/images/anaguta/logo.jpg" className="h-24" alt="Logo" />
          </div>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex text-l font-bold space-x-8 align-baseline relative">
            <Link to="/" className="text-gray-600 hover:text-black hover:bg-purple-300 px-4">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-black hover:bg-purple-300 px-4">
              About Us
            </Link>

            {/* Places & Culture Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("places")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-600 hover:text-black hover:bg-purple-300 px-4">
                Places & Culture
              </button>

              {activeDropdown === "places" && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                  <Link to="/barkin-ladi" className="block px-4 py-2 text-gray-700 hover:bg-purple-200">
                    Barkin Ladi
                  </Link>
                  <Link to="/bassa" className="block px-4 py-2 text-gray-700 hover:bg-purple-200">
                    Bassa
                  </Link>
                  <Link to="/bokkos" className="block px-4 py-2 text-gray-700 hover:bg-purple-200">
                    Bokkos
                  </Link>
                  <Link to="/jos-east" className="block px-4 py-2 text-gray-700 hover:bg-purple-200">
                    Jos East
                  </Link>
                  <Link to="/jos-north" className="block px-4 py-2 text-gray-700 hover:bg-purple-200">
                    Jos North
                  </Link>
                  <Link to="/jos-south" className="block px-4 py-2 text-gray-700 hover:bg-purple-200">
                    Jos South
                  </Link>
                </div>
              )}
            </div>

            {/* Events Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("events")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-600 hover:text-black hover:bg-purple-300 px-4">
                Events
              </button>

              {activeDropdown === "events" && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                  <Link to="/events" className="block px-4 py-2 text-gray-700 hover:bg-purple-200">
                    Recent Events
                  </Link>
                  <Link to="/upcoming-events" className="block px-4 py-2 text-gray-700 hover:bg-purple-200">
                    Upcoming Events
                  </Link>
                </div>
              )}
            </div>

            <Link to="/hero" className="text-gray-600 hover:text-black hover:bg-purple-300 px-4">
              Traditional Attire
            </Link>
            <Link to="/signup2" className="text-gray-600 hover:text-black hover:bg-purple-300 px-4">
              Signup
            </Link>

            {/* Login Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("login")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-600 hover:text-black hover:bg-purple-300 px-4">
                Login
              </button>

              {activeDropdown === "login" && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                  <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-purple-200">
                    Client
                  </Link>
                  <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-purple-200">
                    Admin
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
