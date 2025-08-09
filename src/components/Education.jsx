function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Higher Technological Institute, 10th of Ramadan",
      period: "2018 - 2021",
      gpa: "3.07/4.0",
      description:
        "Graduated with Very Good grade and achieved excellent degree in the graduation project. Focused on software engineering, data structures, algorithms, and web development.",
      coursework: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Computer Networks",
        "Web Development",
      ],
    },
  ];

  const certificates = [
    {
      name: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2023",
      credentialId: "Certified",
      description:
        "Comprehensive course covering React fundamentals, hooks, context, and advanced patterns.",
      skills: ["React", "Redux", "React Router", "Hooks"],
    },
    {
      name: "JavaScript Programming",
      issuer: "University of Michigan (Coursera)",
      date: "2021",
      credentialId: "9RNHJP7NPEQD",
      description:
        "Comprehensive JavaScript programming course covering fundamentals and advanced concepts.",
      skills: ["JavaScript", "ES6+", "DOM Manipulation", "Event Handling"],
    },
    {
      name: "HTML5 Web Development",
      issuer: "University of Michigan (Coursera)",
      date: "2021",
      credentialId: "EV8GPQ58M6JH",
      description:
        "Complete HTML5 course covering modern web markup and semantic elements.",
      skills: ["HTML5", "Semantic HTML", "Web Standards", "Accessibility"],
    },
    {
      name: "CSS3 Styling and Layout",
      issuer: "University of Michigan (Coursera)",
      date: "2021",
      credentialId: "D53S28PL94AZ",
      description:
        "Advanced CSS3 course covering modern styling techniques and layout methods.",
      skills: ["CSS3", "Flexbox", "Grid", "Animations"],
    },
    {
      name: "Responsive Web Design",
      issuer: "University of Michigan (Coursera)",
      date: "2021",
      credentialId: "EV8GPQ58M6JH",
      description:
        "Course focused on creating responsive websites that work across all devices.",
      skills: [
        "Responsive Design",
        "Media Queries",
        "Mobile-First",
        "Bootstrap",
      ],
    },
    {
      name: "MEAN Stack Development Diploma",
      issuer: "CLS Learning Solutions, Cairo",
      date: "2019",
      credentialId: "Diploma",
      description:
        "Comprehensive full-stack development diploma covering MongoDB, Express.js, Angular, and Node.js.",
      skills: ["MongoDB", "Express.js", "Angular", "Node.js", "Full Stack"],
    },
  ];

  return (
    <div className="w-full bg-[#040302]">
      <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Education
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My educational background and professional certifications
            </p>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">
              Formal Education
            </h2>
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-400 font-medium text-lg">
                      {edu.institution}
                    </p>
                    <p className="text-green-400 font-medium">GPA: {edu.gpa}</p>
                  </div>
                  <span className="text-gray-400 text-lg mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div>
                  <h4 className="text-white font-medium mb-3">
                    Key Coursework:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">
              Professional Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-white/10 hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">
                      {cert.name}
                    </h3>
                    <span className="text-gray-400 text-sm">{cert.date}</span>
                  </div>

                  <p className="text-green-400 font-medium mb-2">
                    {cert.issuer}
                  </p>

                  <p className="text-gray-400 text-xs mb-3">
                    ID: {cert.credentialId}
                  </p>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div>
                    <h4 className="text-white font-medium mb-2 text-sm">
                      Skills Gained:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
