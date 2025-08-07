function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Redux",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind",
        "Bootstrap",
        "Angular",
      ],
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub"],
    },
    {
      title: "Backend Basics",
      skills: ["REST APIs", "SQL", "MySQL"],
    },
    {
      title: "Tools",
      skills: [
        "Axios",
        "Supabase",
        "Firebase",
        "Leaflet",
        "Ant Design",
        "Excel",
      ],
    },
  ];

  return (
    <div className="w-full bg-[#040302]">
      <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              My Skills
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-white/10"
              >
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-2 rounded-lg border border-white/10 text-center"
                    >
                      <span className="text-gray-200 text-sm font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
