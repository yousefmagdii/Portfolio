function About() {
  return (
    <div className="w-full bg-[#040302]">
      <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Learn more about my journey, skills, and passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Hi, I'm a Frontend Developer
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate frontend developer with over 1 year of
                professional experience building modern, responsive web
                applications. I specialize in creating intuitive user interfaces
                and seamless user experiences using cutting-edge technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My expertise lies in React ecosystem and state management, where
                I've built scalable applications with clean, maintainable code.
                I'm dedicated to writing efficient, performance-optimized
                solutions and staying current with the latest frontend
                development trends.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Redux Toolkit
                </span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                  HTML
                </span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                  CSS
                </span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Quick Facts
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>🎓 Frontend Development Specialist</li>
                <li>💻 1+ Years Professional Experience</li>
                <li>⚛️ React & Redux Toolkit Expert</li>
                <li>� Responsive Design Enthusiast</li>
                <li>🚀 Modern JavaScript Developer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
