import { useEffect, useState } from "react";

function StarBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate stars only on the edges
    const generateEdgeStars = () => {
      const starArray = [];
      const numStars = 60; // Not too many stars

      for (let i = 0; i < numStars; i++) {
        const edge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
        let x, y;

        switch (edge) {
          case 0: // Top edge
            x = Math.random() * 100;
            y = Math.random() * 15; // Only top 15% of screen
            break;
          case 1: // Right edge
            x = 85 + Math.random() * 15; // Only right 15% of screen
            y = Math.random() * 100;
            break;
          case 2: // Bottom edge
            x = Math.random() * 100;
            y = 85 + Math.random() * 15; // Only bottom 15% of screen
            break;
          case 3: // Left edge
            x = Math.random() * 15; // Only left 15% of screen
            y = Math.random() * 100;
            break;
        }

        starArray.push({
          id: i,
          x,
          y,
          size: Math.random() * 2 + 1, // Small stars (1-3px)
          opacity: Math.random() * 0.6 + 0.3, // 0.3 to 0.9 opacity
          twinkleDelay: Math.random() * 4,
        });
      }
      setStars(starArray);
    };

    generateEdgeStars();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.twinkleDelay}s`,
            animationDuration: "3s",
            filter: "blur(0.5px)",
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
          }}
        />
      ))}
    </div>
  );
}

export default StarBackground;
