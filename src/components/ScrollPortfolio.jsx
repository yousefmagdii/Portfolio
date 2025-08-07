import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import CustomCursor from "./CustomCursorNew";
import StarBackground from "./StarBackground";

const sections = [
  { id: "home", path: "/", component: Home, name: "Home" },
  { id: "about", path: "/about", component: About, name: "About" },
  { id: "skills", path: "/skills", component: Skills, name: "Skills" },
  { id: "projects", path: "/projects", component: Projects, name: "Projects" },
  {
    id: "experience",
    path: "/experience",
    component: Experience,
    name: "Experience",
  },
  {
    id: "education",
    path: "/education",
    component: Education,
    name: "Education",
  },
  { id: "contact", path: "/contact", component: Contact, name: "Contact" },
];

function ScrollPortfolio() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const containerRef = useRef();
  const lastScrollTime = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const sectionIndex = sections.findIndex(
      (section) => section.path === location.pathname
    );
    if (sectionIndex !== -1 && sectionIndex !== currentSection) {
      setCurrentSection(sectionIndex);
    }
  }, [location.pathname, currentSection]);

  const isContentScrollable = useCallback(() => {
    const contentElement = containerRef.current?.querySelector(".page-content");
    if (!contentElement) return false;

    return contentElement.scrollHeight > contentElement.clientHeight;
  }, []);

  const isAtTop = useCallback(() => {
    const contentElement = containerRef.current?.querySelector(".page-content");
    if (!contentElement) return true;

    return contentElement.scrollTop <= 0;
  }, []);

  const isAtBottom = useCallback(() => {
    const contentElement = containerRef.current?.querySelector(".page-content");
    if (!contentElement) return true;

    const { scrollTop, scrollHeight, clientHeight } = contentElement;
    return scrollTop + clientHeight >= scrollHeight - 5;
  }, []);

  const navigateToSection = useCallback(
    (index, direction = null) => {
      if (index >= 0 && index < sections.length && index !== currentSection) {
        setIsScrolling(true);
        setScrollDirection(direction);
        setCurrentSection(index);
        navigate(sections[index].path);

        setTimeout(() => {
          setIsScrolling(false);
          setScrollDirection(null);
        }, 1000);
      }
    },
    [currentSection, navigate]
  );

  const handleWheel = (e) => {
    const contentElement = containerRef.current?.querySelector(".page-content");
    const isScrollableContent = isContentScrollable();

    if (isScrollableContent && contentElement) {
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if (scrollingDown && !isAtBottom()) {
        return;
      }

      if (scrollingUp && !isAtTop()) {
        return;
      }
    }

    e.preventDefault();

    const now = Date.now();
    if (isScrolling || now - lastScrollTime.current < 1000) return;

    lastScrollTime.current = now;

    if (e.deltaY > 0) {
      if (!isScrollableContent || isAtBottom()) {
        navigateToSection(currentSection + 1, "down");
      }
    } else {
      if (!isScrollableContent || isAtTop()) {
        navigateToSection(currentSection - 1, "up");
      }
    }
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (isScrolling) return;

    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;
    const isScrollableContent = isContentScrollable();

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        if (!isScrollableContent || isAtBottom()) {
          navigateToSection(currentSection + 1, "down");
        }
      } else {
        if (!isScrollableContent || isAtTop()) {
          navigateToSection(currentSection - 1, "up");
        }
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isScrolling) return;

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          e.preventDefault();
          navigateToSection(currentSection + 1, "down");
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          navigateToSection(currentSection - 1, "up");
          break;
        case "Home":
          e.preventDefault();
          navigateToSection(0, currentSection > 0 ? "up" : null);
          break;
        case "End":
          e.preventDefault();
          navigateToSection(
            sections.length - 1,
            currentSection < sections.length - 1 ? "down" : null
          );
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, isScrolling, navigateToSection]);

  const pageVariants = {
    initial: (direction) => ({
      y: direction === "down" ? "100%" : direction === "up" ? "-100%" : 0,
      opacity: 0,
    }),
    in: {
      y: 0,
      opacity: 1,
    },
    out: (direction) => ({
      y: direction === "down" ? "-100%" : direction === "up" ? "100%" : 0,
      opacity: 0,
    }),
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8,
  };

  const CurrentComponent = sections[currentSection].component;

  return (
    <div className="min-h-screen bg-[#040302] w-full overflow-hidden relative">
      <StarBackground />
      <CustomCursor />
      <Navbar
        currentSection={currentSection}
        onNavigate={navigateToSection}
        sections={sections}
      />

      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-3">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => navigateToSection(index)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                index === currentSection
                  ? "bg-white border-white scale-125"
                  : "bg-transparent border-gray-400 hover:border-white hover:scale-110"
              }`}
              title={section.name}
            />
          ))}
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-screen z-10"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait" custom={scrollDirection}>
          <motion.div
            key={currentSection}
            custom={scrollDirection}
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
            className="absolute inset-0 w-full h-full"
          >
            <div className="page-content w-full h-full overflow-y-auto relative z-10">
              <CurrentComponent />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex items-center space-x-4 text-gray-400 text-sm">
          {currentSection > 0 && (
            <div className="flex items-center space-x-1">
              <span>↑</span>
              <span>Scroll up</span>
            </div>
          )}
          {currentSection < sections.length - 1 && (
            <div className="flex items-center space-x-1">
              <span>↓</span>
              <span>Scroll down</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScrollPortfolio;
