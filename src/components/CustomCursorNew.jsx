import { useState, useEffect, useRef, useCallback } from "react";
import "./CustomCursorNew.css";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTextHover, setIsTextHover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const spotlightRef = useRef(null);
  const animationRef = useRef(null);

  // Smooth cursor following with RAF
  const updateCursorPosition = useCallback(() => {
    if (cursorRef.current && followerRef.current && spotlightRef.current) {
      const { x, y } = mousePosition;

      // Main cursor (immediate)
      cursorRef.current.style.left = `${x}px`;
      cursorRef.current.style.top = `${y}px`;

      // Follower (slight delay)
      setTimeout(() => {
        if (followerRef.current) {
          followerRef.current.style.left = `${x}px`;
          followerRef.current.style.top = `${y}px`;
        }
      }, 50);

      // Spotlight (more delay for smooth effect)
      setTimeout(() => {
        if (spotlightRef.current) {
          spotlightRef.current.style.left = `${x}px`;
          spotlightRef.current.style.top = `${y}px`;
        }
      }, 100);
    }
  }, [mousePosition]);

  // Handle mouse movement
  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  // Handle mouse enter on interactive elements
  const handleMouseEnter = useCallback((e) => {
    const target = e.target;
    const tagName = target.tagName.toLowerCase();
    const isInteractive =
      tagName === "a" ||
      tagName === "button" ||
      target.onclick ||
      target.getAttribute("role") === "button" ||
      target.classList.contains("cursor-pointer") ||
      window.getComputedStyle(target).cursor === "pointer";

    const isText =
      tagName === "p" ||
      tagName === "span" ||
      tagName === "h1" ||
      tagName === "h2" ||
      tagName === "h3" ||
      tagName === "h4" ||
      tagName === "h5" ||
      tagName === "h6" ||
      tagName === "input" ||
      tagName === "textarea";

    if (isInteractive) {
      setIsHovering(true);
      setIsTextHover(false);
    } else if (isText) {
      setIsTextHover(true);
      setIsHovering(false);
    }
  }, []);

  // Handle mouse leave
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setIsTextHover(false);
  }, []);

  // Handle mouse down
  const handleMouseDown = useCallback(() => {
    setIsClicking(true);
  }, []);

  // Handle mouse up
  const handleMouseUp = useCallback(() => {
    setIsClicking(false);
  }, []);

  // Handle loading states (you can trigger this from parent components)
  const handleLoadingStart = useCallback(() => {
    setIsLoading(true);
  }, []);

  const handleLoadingEnd = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Set up event listeners
  useEffect(() => {
    // Mouse events
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Add event listeners for all interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], .cursor-pointer, p, span, h1, h2, h3, h4, h5, h6, input, textarea'
      );

      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Initial setup
    addHoverListeners();

    // Re-run when DOM changes (for dynamic content)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // Handle page loading states
    document.addEventListener("loadstart", handleLoadingStart);
    document.addEventListener("load", handleLoadingEnd);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("loadstart", handleLoadingStart);
      document.removeEventListener("load", handleLoadingEnd);
      observer.disconnect();
    };
  }, [
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    handleMouseEnter,
    handleMouseLeave,
    handleLoadingStart,
    handleLoadingEnd,
  ]);

  // Update cursor position with RAF
  useEffect(() => {
    animationRef.current = requestAnimationFrame(updateCursorPosition);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updateCursorPosition]);

  // Don't render on mobile devices
  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    if (isMobile) {
      return;
    }
  }, []);

  // Check if mobile device
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? "hovering" : ""} ${isClicking ? "clicking" : ""} ${isTextHover ? "text-hover" : ""} ${isLoading ? "loading" : ""}`}
      />

      {/* Cursor follower */}
      <div
        ref={followerRef}
        className={`custom-cursor-follower ${isHovering ? "hovering" : ""} ${isClicking ? "clicking" : ""}`}
      />

      {/* Spotlight effect */}
      <div
        ref={spotlightRef}
        className={`spotlight-effect ${isHovering ? "hovering" : ""} ${isClicking ? "clicking" : ""}`}
      />
    </>
  );
};

export default CustomCursor;
