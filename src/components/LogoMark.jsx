import { useId } from "react";

// "Hidden Y" mark: an M whose centre drops into a Y. Masters live in /public/brand.
const MARK_PATH =
  "M32 32 H62 L128 98 L194 32 H224 V208 H188 V89 L146 131 V224 H110 V131 L68 89 V208 H32 Z";

function LogoMark({ className = "", title = "Yousef Magdy" }) {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 256 256"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="32"
          y1="32"
          x2="224"
          y2="224"
        >
          <stop offset="0" stopColor="#60A5FA" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <path fill={`url(#${gradientId})`} d={MARK_PATH} />
    </svg>
  );
}

export default LogoMark;
