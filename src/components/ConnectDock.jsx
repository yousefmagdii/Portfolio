import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cvs } from "./CvMenu";

const PHONE = "201016423143";

const icons = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  email: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  call: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  ),
  cv: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
  form: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
      />
    </svg>
  ),
};

const items = [
  {
    id: "github",
    letter: "C",
    label: "GitHub",
    color: "#ffffff",
    href: "https://github.com/yousefmagdii",
  },
  {
    id: "linkedin",
    letter: "O",
    label: "LinkedIn",
    color: "#3b9cff",
    href: "https://www.linkedin.com/in/yousef-magdii/",
  },
  {
    id: "email",
    letter: "N",
    label: "Email",
    color: "#ff5a4f",
    href: "mailto:yousef0magdi1@gmail.com",
  },
  {
    id: "whatsapp",
    letter: "N",
    label: "WhatsApp",
    color: "#25d366",
    href: `https://wa.me/${PHONE}`,
  },
  {
    id: "call",
    letter: "E",
    label: "Call",
    color: "#38bdf8",
    href: `tel:+${PHONE}`,
  },
  { id: "cv", letter: "C", label: "Download CV", color: "#a78bfa" },
  { id: "form", letter: "T", label: "Send a message", color: "#f472b6" },
];

function ConnectDock({ onForm, className = "" }) {
  const navigate = useNavigate();
  const listRef = useRef(null);
  const buttonRefs = useRef([]);
  const [hovered, setHovered] = useState(null);
  const [engaged, setEngaged] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [cvOpen, setCvOpen] = useState(false);
  const [touch] = useState(
    () => window.matchMedia?.("(hover: none)").matches ?? false,
  );

  const showIcons = engaged || touch || cvOpen;

  useEffect(() => {
    if (hovered === null) return;
    const el = buttonRefs.current[hovered];
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [hovered]);

  useEffect(() => {
    if (!cvOpen) return;
    const close = (e) => {
      if (listRef.current && !listRef.current.contains(e.target)) {
        setCvOpen(false);
      }
    };
    const escape = (e) => e.key === "Escape" && setCvOpen(false);
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", escape);
    };
  }, [cvOpen]);

  const handleAction = (item) => {
    if (item.id === "cv") {
      setCvOpen((open) => !open);
    } else if (item.id === "form") {
      if (onForm) onForm();
      else navigate("/contact");
    }
  };

  const release = () => {
    setEngaged(false);
    setHovered(null);
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setEngaged(true)}
      onMouseLeave={release}
      onFocus={() => setEngaged(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) release();
      }}
    >
      <AnimatePresence>
        {hovered !== null && !cvOpen && (
          <motion.div
            key="tooltip"
            className="absolute -top-9 z-20 pointer-events-none"
            initial={{ opacity: 0, y: 6 }}
            animate={{
              opacity: 1,
              y: 0,
              left: indicator.left + indicator.width / 2,
            }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ type: "spring", stiffness: 500, damping: 34 }}
            style={{ translateX: "-50%" }}
          >
            <span className="block whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium text-white bg-[#111]/95 border border-white/15 shadow-lg">
              {items[hovered].label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        ref={listRef}
        className="relative flex items-center gap-1.5 sm:gap-3 p-2 sm:p-2.5 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_40px_-10px_rgba(0,0,0,0.9)]"
      >
        <motion.span
          aria-hidden="true"
          className="absolute -top-px h-px rounded-full bg-gradient-to-r from-transparent via-white to-transparent"
          initial={false}
          animate={{
            left: hovered === null ? "35%" : indicator.left,
            width: hovered === null ? "30%" : indicator.width,
            opacity: engaged ? 1 : 0.5,
          }}
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        />

        {items.map((item, index) => {
          const isHovered = hovered === index;
          const glow = isHovered
            ? {
                color: item.color,
                borderColor: item.color,
                boxShadow: `0 0 0 1px ${item.color}55, 0 0 22px 2px ${item.color}88, inset 0 0 12px ${item.color}33`,
              }
            : {};
          const Tag = item.href ? "a" : "button";
          const linkProps = item.href
            ? {
                href: item.href,
                target: item.href.startsWith("http") ? "_blank" : undefined,
                rel: item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined,
              }
            : {
                type: "button",
                onClick: () => handleAction(item),
                "aria-expanded": item.id === "cv" ? cvOpen : undefined,
              };

          return (
            <Tag
              key={item.id}
              ref={(el) => (buttonRefs.current[index] = el)}
              aria-label={item.label}
              onMouseEnter={() => setHovered(index)}
              onFocus={() => setHovered(index)}
              className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#151515] border border-white/10 text-gray-300 transition-[color,border-color,box-shadow,transform] duration-300 hover:scale-110 focus:outline-none focus-visible:scale-110 [perspective:400px]"
              style={glow}
              {...linkProps}
            >
              <AnimatePresence mode="wait" initial={false}>
                {showIcons ? (
                  <motion.span
                    key="icon"
                    className="flex"
                    initial={{ rotateX: -90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: 90, opacity: 0 }}
                    transition={{ duration: 0.18, delay: index * 0.035 }}
                  >
                    {icons[item.id]}
                  </motion.span>
                ) : (
                  <motion.span
                    key="letter"
                    className="font-mono text-sm sm:text-base font-semibold tracking-widest text-gray-200"
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: -90, opacity: 0 }}
                    transition={{ duration: 0.18, delay: index * 0.035 }}
                  >
                    {item.letter}
                  </motion.span>
                )}
              </AnimatePresence>
            </Tag>
          );
        })}

        <AnimatePresence>
          {cvOpen && (
            <motion.div
              role="menu"
              className="absolute bottom-full mb-4 right-0 w-72 z-30 bg-[#0b0a12]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl shadow-purple-500/10 p-2 text-left"
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.97 }}
              transition={{ duration: 0.18 }}
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
                  onClick={() => setCvOpen(false)}
                  className="block px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors duration-200"
                >
                  <span className="block text-sm font-medium text-white">
                    {cv.title}
                  </span>
                  <span className="block text-xs text-gray-400">
                    {cv.subtitle}
                  </span>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ConnectDock;
