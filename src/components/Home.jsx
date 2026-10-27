import { useState, useEffect } from "react";
import ConnectDock from "./ConnectDock";

function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [startTypewriter, setStartTypewriter] = useState(false);

  const mainText = "Hi, I'm Yousef Magdy";
  const subtitleText =
    "Software & AI Engineer building LLM platforms and fast web apps";
  const handleImageLoad = () => {
    setImageLoaded(true);
    setTimeout(() => setStartTypewriter(true), 300);
  };

  // Don't let a slow photo hold the intro hostage: start typing anyway.
  useEffect(() => {
    const fallback = setTimeout(() => setStartTypewriter(true), 900);
    return () => clearTimeout(fallback);
  }, []);

  useEffect(() => {
    if (startTypewriter && currentIndex < mainText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + mainText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (startTypewriter && currentIndex >= mainText.length) {
      setTimeout(() => setShowSubtitle(true), 500);
    }
  }, [startTypewriter, currentIndex, mainText]);

  useEffect(() => {
    if (showSubtitle && subtitleIndex < subtitleText.length) {
      const timeout = setTimeout(() => {
        setDisplayedSubtitle((prev) => prev + subtitleText[subtitleIndex]);
        setSubtitleIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [showSubtitle, subtitleIndex, subtitleText]);

  return (
    <div className="w-full bg-[#040302]">
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center relative w-full max-w-4xl">
          <div className="relative group flex justify-center">
            {!imageLoaded && <div className=""></div>}

            <img
              src="/HomeImg-newest.webp"
              alt="Yousef Magdy"
              width={1202}
              height={1309}
              className={`hero-photo w-[90%] sm:w-[70%] md:w-[60%] h-auto max-h-[calc(100vh-8rem)] object-contain p-1 relative z-10 transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              fetchPriority="high"
              decoding="async"
              onLoad={handleImageLoad}
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 z-20 w-full">
            {startTypewriter && (
              <>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent min-h-[80px] flex items-center justify-center w-full">
                  {displayedText}
                  {displayedText.length !== mainText.length && (
                    <span className="animate-pulse text-blue-400">|</span>
                  )}
                </h1>
                <div className="min-h-[60px] flex items-center justify-center w-full">
                  {showSubtitle && (
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto hover:text-gray-100 transition-colors duration-300 px-4">
                      {displayedSubtitle}
                      {subtitleIndex < subtitleText.length && (
                        <span className="animate-pulse text-gray-400">|</span>
                      )}
                    </p>
                  )}
                </div>

                <div className="min-h-[56px] sm:min-h-[70px] flex justify-center">
                  {subtitleIndex >= subtitleText.length && (
                    <div className="animate-fade-in-up">
                      <ConnectDock />
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
