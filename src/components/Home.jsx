import { useState, useEffect } from "react";

function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  const mainText = "Hi, I'm a Front-End Developer";
  const subtitleText =
    "I'm Yousef I build beautiful, fast, and accessible web experiences.";

  // Main title typewriter effect
  useEffect(() => {
    if (currentIndex < mainText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + mainText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100); // Adjust speed here (lower = faster)
      return () => clearTimeout(timeout);
    } else {
      // Start subtitle after main text is complete
      setTimeout(() => setShowSubtitle(true), 500);
    }
  }, [currentIndex, mainText]);

  // Subtitle typewriter effect
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
            <img
              src="/HomeImg.png"
              alt="Profile"
              className="w-[50%] object-cover p-1 relative z-10 "
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 z-20 w-full">
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

            {subtitleIndex >= subtitleText.length && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                <a
                  href="/CV.pdf"
                  download="Youssef_Magdy_CV.pdf"
                  className="cursor-pointer relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden group inline-block text-center"
                >
                  <span className="relative z-10">Download CV</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                </a>
                <div className="text-gray-400 text-sm flex items-center justify-center">
                  <span>Scroll down to explore more</span>
                  <svg
                    className="w-4 h-4 ml-2 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
