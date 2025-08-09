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

  const updateCursorPosition = useCallback(() => {
    if (cursorRef.current && followerRef.current && spotlightRef.current) {
      const { x, y } = mousePosition;

      cursorRef.current.style.left = `${x}px`;
      cursorRef.current.style.top = `${y}px`;

      setTimeout(() => {
        if (followerRef.current) {
          followerRef.current.style.left = `${x}px`;
          followerRef.current.style.top = `${y}px`;
        }
      }, 50);

      setTimeout(() => {
        if (spotlightRef.current) {
          spotlightRef.current.style.left = `${x}px`;
          spotlightRef.current.style.top = `${y}px`;
        }
      }, 100);
    }
  }, [mousePosition]);

  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

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

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setIsTextHover(false);
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsClicking(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsClicking(false);
  }, []);

  const handleLoadingStart = useCallback(() => {
    setIsLoading(true);
  }, []);

  const handleLoadingEnd = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], .cursor-pointer, p, span, h1, h2, h3, h4, h5, h6, input, textarea'
      );

      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("loadstart", handleLoadingStart);
    document.addEventListener("load", handleLoadingEnd);

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

  useEffect(() => {
    animationRef.current = requestAnimationFrame(updateCursorPosition);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updateCursorPosition]);

  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    if (isMobile) {
      return;
    }
  }, []);

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? "hovering" : ""} ${isClicking ? "clicking" : ""} ${isTextHover ? "text-hover" : ""} ${isLoading ? "loading" : ""}`}
      />

      <div
        ref={followerRef}
        className={`custom-cursor-follower ${isHovering ? "hovering" : ""} ${isClicking ? "clicking" : ""}`}
      />

      <div
        ref={spotlightRef}
        className={`spotlight-effect ${isHovering ? "hovering" : ""} ${isClicking ? "clicking" : ""}`}
      />
    </>
  );
};

export default CustomCursor;
