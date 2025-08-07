import { useState } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      title: "Film Fever",
      description:
        "Movie & TV browser app with search, trailer viewing, and personal watchlist management. Built using React, Axios, and Tailwind with data fetched from movie APIs.",
      technologies: ["React", "Axios", "Tailwind CSS", "Movie API"],
      image: "/Film-Fever.png",
      liveUrl: "https://film-fever-omega.vercel.app/",
      githubUrl: "https://github.com/yousefmagdii/FilmFever",
    },
    {
      title: "La Dolce Vita Pizzas",
      description:
        "React-based pizza store with React Router, Redux, and Leaflet for dynamic content and real-time delivery. Tailwind CSS enhances the responsive, visually appealing interface.",
      technologies: [
        "React",
        "Redux",
        "React Router",
        "Leaflet",
        "Tailwind CSS",
      ],
      image: "/La_Dolce.png",
      liveUrl: "https://la-dolce-vita-pizzas.vercel.app/",
      githubUrl: "https://github.com/yousefmagdii/La-Dolce-Vita-Pizzas",
    },
    {
      title: "The Wild Oasis",
      description:
        "Cabin booking platform with React Query and Supabase for dynamic booking and secure authentication. Modular compound components allow customization with dark mode and interactive charts.",
      technologies: ["React", "React Query", "Supabase", "Charts"],
      image: "/The_Wild.png",
      liveUrl: "https://the-wild-oasis-sigma-teal.vercel.app/",
      githubUrl: "https://github.com/yousefmagdii/The-Wild-Oasis",
    },
    {
      title: "Use-popcorn",
      description:
        "Movie & TV Show Ratings Website with rating/review capabilities using custom hooks and data fetching. Responsive design ensures seamless user experience across devices.",
      technologies: ["React", "Custom Hooks", "Responsive Design"],
      image: "/Use_Popcorn.png",
      liveUrl: "https://usepopcorn-teal.vercel.app/",
      githubUrl: "https://github.com/yousefmagdii/usepopcorn",
    },
    {
      title: "Fast React Pizza",
      description:
        "Online pizza store utilizing React, Redux, and dedicated Cart/Order pages for streamlined navigation. Real-time delivery tracking ensures an efficient and user-friendly experience.",
      technologies: ["React", "Redux", "Real-time Tracking"],
      image: "/Fast_Pizza.png",
      liveUrl: "https://fast-react-pizza-self.vercel.app/",
      githubUrl: "https://github.com/yousefmagdii/Fast-React-Pizza",
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleModalClick = () => {
    setShowModal(false);
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
    if (selectedProject?.liveUrl && selectedProject.liveUrl !== "#") {
      window.open(selectedProject.liveUrl, "_blank");
    }
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };

  return (
    <div className="w-full bg-[#040302]">
      <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10 overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, "_blank");
                      }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-white px-3 py-2 rounded-lg text-sm transition-all duration-300 transform active:scale-95 font-medium"
                    >
                      Live Demo
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, "_blank");
                      }}
                      className="flex-1 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/25 text-white px-3 py-2 rounded-lg text-sm transition-all duration-300 transform active:scale-95 font-medium border border-white/10"
                    >
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={handleModalClick}
        >
          <div className="relative max-w-4xl w-full mx-auto animate-slideUp">
            <button
              onClick={closeModal}
              className="absolute top-8 sm:top-5 right-2 md:-top-12 md:right-0 text-white hover:text-gray-300 text-3xl md:text-2xl z-10 transition-colors duration-200 bg-black/50 rounded-full w-10 h-10 md:w-auto md:h-auto md:bg-transparent flex items-center justify-center"
            >
              ✕
            </button>

            <div
              className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-white/20 overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
              onClick={handleModalContentClick}
            >
              <div className="h-96 bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center relative overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <div className="text-2xl mb-2">🚀</div>
                    <p className="text-sm">Click to view live demo</p>
                  </div>
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {selectedProject.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 justify-center mb-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(selectedProject.liveUrl, "_blank");
                    }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/30 text-white px-8 py-3 rounded-xl transition-all duration-300 transform active:scale-95 flex items-center gap-3 font-medium"
                  >
                    🚀 Live Demo
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(selectedProject.githubUrl, "_blank");
                    }}
                    className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 hover:scale-110 hover:shadow-xl hover:shadow-gray-500/30 text-white px-8 py-3 rounded-xl transition-all duration-300 transform active:scale-95 flex items-center gap-3 font-medium border border-white/10"
                  >
                    📁 GitHub
                  </button>
                </div>

                <p className="text-blue-300 text-sm">
                  Click on the image or buttons to explore the project
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
