import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import CvMenu, { cvs } from "./CvMenu";
import LogoMark from "./LogoMark";

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
              <motion.span
                className="h-9 w-9 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                onAnimationComplete={() => setLogoAnimationComplete(true)}
              >
                <LogoMark className="h-9 w-9" />
              </motion.span>

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
                  Yousef
                </span>{" "}
                Magdy
              </motion.h1>
            </button>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-6">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(index)}
                  className={`font-medium text-sm relative group transition-colors duration-200 ${
                    isActive(section.path)
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {section.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform transition-transform duration-200 ${
                      isActive(section.path)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </button>
              ))}

              <CvMenu buttonClassName="cta-glow px-6 py-2.5 rounded-full text-sm font-medium" />
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-300 hover:text-white p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
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
        className={`${isMenuOpen ? "block" : "hidden"} lg:hidden border-t border-white/10`}
        id="mobile-menu"
      >
        <div className="px-4 pt-4 pb-6 space-y-1 bg-black/90 backdrop-blur-md">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(index)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(section.path)
                  ? "text-white bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {section.name}
            </button>
          ))}
          <p className="px-4 pt-4 pb-1 text-xs uppercase tracking-wider text-gray-500">
            Download CV
          </p>
          {cvs.map((cv) => (
            <a
              key={cv.file}
              href={cv.file}
              download
              className="block px-4 py-3 rounded-lg text-sm transition-all duration-200 text-gray-300 hover:text-white bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 border border-white/5"
              onClick={toggleMenu}
            >
              <span className="font-medium text-white">{cv.title}</span>
              <span className="block text-xs text-gray-400">{cv.subtitle}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
