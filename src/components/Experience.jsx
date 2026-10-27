function Experience() {
  const experiences = [
    {
      title: "Software and AI Engineer",
      company: "Al-Andalus Group LTD for Islamic Translation",
      location: "United Kingdom (Remote from Cairo, Egypt)",
      period: "06/2026 – Present",
      description:
        "Building a production LLM translation platform: a multi-agent LangGraph pipeline, tenant-scoped RAG and a five-service deployment on GCP Cloud Run (Next.js front end, .NET 8 API, FastAPI, embedding service and workers) on PostgreSQL.",
      technologies: [
        "LangGraph",
        "Python",
        "FastAPI",
        ".NET 8",
        "Next.js",
        "PostgreSQL",
        "pgvector",
        "GCP Cloud Run",
        "GitHub Actions",
        "Stripe",
      ],
      achievements: [
        "Built a LangGraph pipeline of 28 agents (translation, review, QC, transcription, dubbing) across OpenAI, Claude, Gemini and Ollama",
        "Raised short Bible verse recall from 23.6% to 80.4% with no false positives (5,899 test cases) and cut latency from 75 ms to 22 ms",
        "Implemented tenant-scoped RAG with bge-m3 embeddings and an HNSW index on PostgreSQL with pgvector",
        "Built layout-preserving DOCX, PDF and InDesign translation",
        "Moved a five-minute PDF export to a job queue, cutting job pickup time from 97 s to 1.9 s",
        "Built Stripe billing (Checkout, webhooks, subscriptions) with CI/CD through GitHub Actions and Cloud Build",
      ],
    },
    {
      title: "Technical Support Specialist",
      company: "Teleperformance (TP)",
      location: "Cairo, Egypt",
      period: "10/2025 – 06/2026",
      description:
        "Provided English-language Tier 1 technical support for a major telecommunications client.",
      technologies: ["Troubleshooting", "CRM Systems", "SLA KPIs"],
      achievements: [
        "Documented cases in CRM systems",
        "Worked to SLA KPIs: AHT, FCR and CSAT",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      location: "Remote",
      period: "03/2025 – 10/2025",
      description:
        "Delivered freelance web development projects while completing a Data Analyst Bootcamp.",
      technologies: ["React", "SQL", "Power BI", "Tableau", "Excel"],
      achievements: [
        "Completed the Data Analyst Bootcamp by Alex the Analyst",
      ],
    },
    {
      title: "Front-End Developer",
      company: "VODO",
      location: "Riyadh, Saudi Arabia (Remote from Cairo, Egypt)",
      period: "01/2024 – 03/2025",
      description:
        "Built React applications for ERP, e-commerce and event platforms in a microfrontend architecture. Designed and consumed REST API contracts with backend engineers (endpoint shape, schema validation, pagination, filtering and error states) and delivered in Agile sprints.",
      technologies: [
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
        "Ant Design",
        "Firebase",
        "Stripe",
      ],
      projects: [
        {
          name: "LEAP Event Platform",
          description: "Large-scale event booking system with QR generation",
          tech: "React, Redux Toolkit, Tailwind CSS",
          status: "Completed (not public)",
        },
        {
          name: "ERP System – Warehouse, POS & HR Modules",
          description:
            "Built Warehouse module solo and contributed to POS & HR",
          tech: "React, Redux Toolkit, Ant Design",
          role: "Lead on Warehouse",
        },
        {
          name: "Klar Platform",
          description: "SPA booking and e-commerce site with online payment",
          tech: "React, Firebase, Stripe",
          status: "Production",
        },
        {
          name: "Layers Kiosk SPA",
          description:
            "Touch-enabled kiosk app for booking/purchasing in-store",
          tech: "React, Stripe, Responsive Design",
          status: "Production",
        },
      ],
      achievements: [
        "Delivered several production-level projects",
        "Led development of Warehouse module in ERP system",
        "Optimized application performance and cross-browser compatibility",
        "Integrated Stripe, Firebase and Supabase into React applications",
      ],
    },
  ];

  return (
    <div className="w-full bg-[#040302]">
      <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Experience
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My professional journey and work experience
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                    {exp.location && (
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    )}
                  </div>
                  <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {exp.projects && (
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-3">
                      Key Projects:
                    </h4>
                    <div className="space-y-3">
                      {exp.projects.map((project, projIndex) => (
                        <div
                          key={projIndex}
                          className="bg-black/20 p-4 rounded-lg border border-white/5"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                            <h5 className="text-lg font-medium text-white">
                              {project.name}
                            </h5>
                            {project.status && (
                              <span className="text-green-400 text-sm mt-1 sm:mt-0">
                                {project.status}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-300 text-sm mb-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.split(", ").map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          {project.role && (
                            <p className="text-yellow-400 text-sm mt-2">
                              Role: {project.role}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-white font-medium mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-gray-300 text-sm flex items-start"
                      >
                        <span className="text-green-400 mr-2">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
