import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const timeoutRef = useRef(null);

  // Desktop dropdown handlers
  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  // Mobile dropdown handler
  const handleMobileDropdownClick = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Places & Culture",
      submenu: [
        { name: "Barkin Ladi", path: "/barkin-ladi" },
        { name: "Bassa", path: "/bassa" },
        { name: "Bokkos", path: "/bokkos" },
        { name: "Jos East", path: "/jos-east" },
        { name: "Jos North", path: "/jos-north" },
        { name: "Jos South", path: "/jos-south" },
      ],
    },
    {
      name: "Events",
      submenu: [
        { name: "Recent Events", path: "/events" },
        { name: "Upcoming Events", path: "/upcoming-events" },
      ],
    },
    { name: "Traditional Attire", path: "/hero" },
    { name: "Signup", path: "/signup" },
    {
      name: "Login",
      submenu: [
        { name: "Client", path: "/client" },
        { name: "Admin", path: "/Admin" },
      ],
    },
  ];

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
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="flex items-center text-gray-600 hover:text-black hover:bg-purple-300 px-4">
                      {item.name} <ChevronDownIcon className="h-4 w-4 ml-1" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-purple-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-black hover:bg-purple-300 px-4"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } shadow-md`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => handleMobileDropdownClick(item.name)}
                    className="w-full flex justify-between items-center text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                  >
                    {item.name}
                    {mobileDropdown === item.name ? (
                      <ChevronUpIcon className="h-5 w-5" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5" />
                    )}
                  </button>
                  {mobileDropdown === item.name && (
                    <div className="flex flex-col pl-6 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-2 text-gray-700 hover:bg-purple-200 rounded-md"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
