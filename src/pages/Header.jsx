import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="p-4 flex items-center justify-between">
        {/* Chawal Wala Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://chawalwala.com.pk/wp-content/uploads/2024/07/Chawal-wala-3-2-e1673259549441.png"
              alt="Chawal Wala Logo"
              className="h-16 w-auto ml-10"
            />
          </Link>
        </div>

        {/* Customer Info Link */}
        <nav className="flex items-center space-x-4">
          <Link
            to="/salesChart"
            className="px-4 py-2 text-white font-semibold rounded-md hover:bg-gray-400 bg-gray-500 transition-colors duration-300"
          >
            Customer Info
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
