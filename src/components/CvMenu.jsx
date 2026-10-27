import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const cvs = [
  {
    title: "AI Application Engineer",
    subtitle: "LLM, RAG, LangGraph, Python, .NET",
    file: "/cv/Yousef_Magdy_AI_Application_Engineer_CV.pdf",
  },
  {
    title: "Frontend Developer",
    subtitle: "React, Next.js, TypeScript, Redux Toolkit",
    file: "/cv/Yousef_Magdy_Frontend_React_CV.pdf",
  },
  {
    title: "Technical Support Engineer",
    subtitle: "Troubleshooting, REST APIs, SQL",
    file: "/cv/Yousef_Magdy_Technical_Support_Solutions_Engineer_CV.pdf",
  },
];

function CvMenu({ buttonClassName, align = "right", direction = "down" }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const alignClass =
    align === "center" ? "left-1/2 -translate-x-1/2" : "right-0";
  const directionClass =
    direction === "up" ? "bottom-full mb-3" : "top-full mt-3";

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className={`${buttonClassName} inline-flex items-center gap-2`}
      >
        <span className="relative z-10">Download CV</span>
        <svg
          className={`relative z-10 w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="menu"
            initial={{
              opacity: 0,
              y: direction === "up" ? 8 : -8,
              scale: 0.97,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: direction === "up" ? 8 : -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={`absolute ${alignClass} ${directionClass} w-72 z-50 bg-[#0b0a12]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl shadow-blue-500/10 p-2 text-left`}
          >
            <p className="px-3 pt-2 pb-1 text-xs uppercase tracking-wider text-gray-500">
              Choose a CV
            </p>
            {cvs.map((cv) => (
              <a
                key={cv.file}
                href={cv.file}
                download
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/15 hover:to-purple-500/15 transition-colors duration-200 group"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-blue-300 group-hover:text-white transition-colors duration-200">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v12m0 0l-4-4m4 4l4-4M5 20h14"
                    />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm font-medium text-white">
                    {cv.title}
                  </span>
                  <span className="block text-xs text-gray-400">
                    {cv.subtitle}
                  </span>
                </span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CvMenu;
