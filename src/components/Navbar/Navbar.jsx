import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const activeStyle = "text-sky-600 font-semibold border-b-2 border-sky-600";
  const mobileActiveStyle = "text-sky-600 bg-sky-50";
  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 h-16 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-20 rounded-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/40";
                }}
              />
              <span className="ml-3 text-xl font-bold text-sky-600">
                BookHub
              </span>
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-medium font-medium transition-colors ${
                  isActive ? activeStyle : "text-gray-700 hover:text-sky-600"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-medium font-medium transition-colors ${
                  isActive ? activeStyle : "text-gray-500 hover:text-sky-600"
                }`
              }
            >
              About
            </NavLink>
            <a
              href="https://github.com/Harshsanas/book-finder-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-sky-600 transition-colors ml-4"
            >
              <FiGithub className="w-5 h-5" />
            </a>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            {!isOpen && (
              <a
                href="https://github.com/Harshsanas/book-finder-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-sky-600 transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-sky-600 focus:outline-none cursor-pointer"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? mobileActiveStyle
                  : "text-gray-700 hover:text-sky-600 hover:bg-sky-50"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? mobileActiveStyle
                  : "text-gray-500 hover:text-sky-600 hover:bg-sky-50"
              }`
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
