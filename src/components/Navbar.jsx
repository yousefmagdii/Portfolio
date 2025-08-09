import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar({ currentSection, onNavigate, sections }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLogoAnimationComplete(false);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  const handleNavClick = (index) => {
    onNavigate(index);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#040302]/80 backdrop-blur-md text-white fixed w-full top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick(0)}
              className="flex items-center space-x-3"
            >
              <motion.img
                src="/Logo.webp"
                alt="Youssef Magdy Logo"
                className="h-10 w-10 rounded-full object-cover"
                loading="lazy"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                onAnimationComplete={() => setLogoAnimationComplete(true)}
              />

              <motion.h1
                className="text-xl font-semibold text-white tracking-tight"
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: logoAnimationComplete ? 0 : -100,
                  opacity: logoAnimationComplete ? 1 : 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: logoAnimationComplete ? 0.2 : 1.2,
                }}
              >
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Youssef
                </span>
                Magdy
              </motion.h1>
            </button>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => handleNavClick(0)}
                className={`font-medium text-sm relative group transition-colors duration-200 ${
                  isActive("/")
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Home
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform transition-transform duration-200 ${
                    isActive("/")
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
              <button
                onClick={() => handleNavClick(1)}
                className={`font-medium text-sm relative group transition-colors duration-200 ${
                  isActive("/about")
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                About
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform transition-transform duration-200 ${
                    isActive("/about")
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
              <button
                onClick={() => handleNavClick(2)}
                className={`font-medium text-sm relative group transition-colors duration-200 ${
                  isActive("/skills")
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Skills
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform transition-transform duration-200 ${
                    isActive("/skills")
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
              <button
                onClick={() => handleNavClick(3)}
                className={`font-medium text-sm relative group transition-colors duration-200 ${
                  isActive("/projects")
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Projects
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform transition-transform duration-200 ${
                    isActive("/projects")
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
              <button
                onClick={() => handleNavClick(4)}
                className={`font-medium text-sm relative group transition-colors duration-200 ${
                  isActive("/experience")
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Experience
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform transition-transform duration-200 ${
                    isActive("/experience")
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
              <button
                onClick={() => handleNavClick(5)}
                className={`font-medium text-sm relative group transition-colors duration-200 ${
                  isActive("/education")
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Education
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform transition-transform duration-200 ${
                    isActive("/education")
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>

              <button
                onClick={() => handleNavClick(6)}
                className={`font-medium text-sm relative group transition-colors duration-200 ${
                  isActive("/contact")
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Contact
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform transition-transform duration-200 ${
                    isActive("/contact")
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>

              <a
                href="/CV.pdf"
                download="Youssef_Magdy_CV.pdf"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                <span className="relative z-10">Download CV</span>
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-300 hover:text-white p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-5 w-5`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-5 w-5`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden border-t border-white/10`}
        id="mobile-menu"
      >
        <div className="px-4 pt-4 pb-6 space-y-1 bg-black/90 backdrop-blur-md">
          <button
            onClick={() => handleNavClick(0)}
            className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive("/")
                ? "text-white bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick(1)}
            className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive("/about")
                ? "text-white bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick(2)}
            className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive("/skills")
                ? "text-white bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => handleNavClick(4)}
            className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive("/experience")
                ? "text-white bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => handleNavClick(5)}
            className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive("/education")
                ? "text-white bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Education
          </button>
          <button
            onClick={() => handleNavClick(3)}
            className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive("/projects")
                ? "text-white bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick(6)}
            className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive("/contact")
                ? "text-white bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Contact
          </button>
          <a
            href="/CV.pdf"
            download="Youssef_Magdy_CV.pdf"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:from-blue-600 hover:to-purple-700 text-center mt-2"
            onClick={toggleMenu}
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
