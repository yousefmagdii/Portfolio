import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

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
      achievements: ["Completed the Data Analyst Bootcamp by Alex the Analyst"],
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

  const toggle = (index) =>
    setOpenIndex((current) => (current === index ? null : index));

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

          <div className="relative">
            <motion.div
              className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent origin-top"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              aria-hidden="true"
            />

            <ol className="space-y-6">
              {experiences.map((exp, index) => {
                const isOpen = openIndex === index;
                const isCurrent = exp.period.includes("Present");

                return (
                  <motion.li
                    key={index}
                    className="relative pl-10 md:pl-14"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  >
                    <span
                      className="absolute left-0 md:left-1 top-6 flex items-center justify-center w-6 h-6"
                      aria-hidden="true"
                    >
                      {isCurrent && (
                        <span className="absolute inline-flex w-full h-full rounded-full bg-blue-400 opacity-60 animate-ping"></span>
                      )}
                      <span
                        className={`relative w-4 h-4 rounded-full border-2 ${
                          isCurrent
                            ? "bg-blue-400 border-blue-200"
                            : "bg-[#040302] border-purple-400"
                        }`}
                      ></span>
                    </span>

                    <div
                      className={`bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border transition-all duration-300 ${
                        isOpen
                          ? "border-blue-500/40"
                          : "border-white/10 hover:border-blue-500/30"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggle(index)}
                        aria-expanded={isOpen}
                        className="w-full text-left p-6"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-blue-400 font-medium">
                              {exp.company}
                            </p>
                            {exp.location && (
                              <p className="text-gray-400 text-sm">
                                {exp.location}
                              </p>
                            )}
                          </div>
                          <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-2 flex-shrink-0">
                            <span
                              className={`text-sm px-3 py-1 rounded-full ${
                                isCurrent
                                  ? "bg-blue-500/20 text-blue-200"
                                  : "bg-white/5 text-gray-400"
                              }`}
                            >
                              {exp.period}
                            </span>
                            <span className="text-xs text-gray-400 inline-flex items-center gap-1">
                              {isOpen ? "Hide details" : "Show details"}
                              <svg
                                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-300 mt-4 leading-relaxed">
                          {exp.description}
                        </p>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="details"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 space-y-5">
                              <div>
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
                                <div>
                                  <h4 className="text-white font-medium mb-3">
                                    Key Projects:
                                  </h4>
                                  <div className="grid sm:grid-cols-2 gap-3">
                                    {exp.projects.map((project, projIndex) => (
                                      <div
                                        key={projIndex}
                                        className="bg-black/20 p-4 rounded-lg border border-white/5"
                                      >
                                        <div className="flex flex-col mb-2">
                                          <h5 className="text-base font-medium text-white">
                                            {project.name}
                                          </h5>
                                          {project.status && (
                                            <span className="text-green-400 text-xs mt-1">
                                              {project.status}
                                            </span>
                                          )}
                                        </div>
                                        <p className="text-gray-300 text-sm mb-2">
                                          {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                          {project.tech
                                            .split(", ")
                                            .map((tech, techIdx) => (
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
                                  {exp.achievements.map(
                                    (achievement, achIndex) => (
                                      <li
                                        key={achIndex}
                                        className="text-gray-300 text-sm flex items-start"
                                      >
                                        <span className="text-green-400 mr-2">
                                          ✓
                                        </span>
                                        {achievement}
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
