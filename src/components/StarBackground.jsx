import { useEffect, useState } from "react";

function StarBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateEdgeStars = () => {
      const starArray = [];
      const numStars = 60;

      for (let i = 0; i < numStars; i++) {
        const edge = Math.floor(Math.random() * 4);
        let x, y;

        switch (edge) {
          case 0:
            x = Math.random() * 100;
            y = Math.random() * 15;
            break;
          case 1:
            x = 85 + Math.random() * 15;
            y = Math.random() * 100;
            break;
          case 2:
            x = Math.random() * 100;
            y = 85 + Math.random() * 15;
            break;
          case 3:
            x = Math.random() * 15;
            y = Math.random() * 100;
            break;
        }

        starArray.push({
          id: i,
          x,
          y,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.6 + 0.3,
          twinkleDelay: Math.random() * 4,
        });
      }
      setStars(starArray);
    };

    generateEdgeStars();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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
