import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      title: "AI & LLM",
      skills: [
        "LangGraph",
        "RAG",
        "Agent Pipelines",
        "Embeddings (bge-m3)",
        "pgvector",
        "OpenAI",
        "Anthropic Claude",
        "Gemini",
        "Ollama",
      ],
    },
    {
      title: "Languages",
      skills: ["Python", "C#", "TypeScript", "JavaScript (ES6+)", "SQL"],
    },
    {
      title: "Backend & Data",
      skills: [
        ".NET 8",
        "ASP.NET Core",
        "FastAPI",
        "Node.js",
        "Express.js",
        "REST API Design",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "Ant Design",
        "Micro Frontends",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "GCP Cloud Run",
        "Cloud SQL",
        "Cloud Build",
        "GitHub Actions",
        "CI/CD",
        "Git",
        "Vercel",
      ],
    },
    {
      title: "Integrations & Data",
      skills: [
        "Stripe",
        "OAuth & JWT",
        "Firebase",
        "Supabase",
        "Power BI",
        "Tableau",
        "Excel",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="w-full bg-[#040302]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={titleVariants}>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
              variants={titleVariants}
            >
              My Skills
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              variants={titleVariants}
            >
              Technologies and tools I work with to bring ideas to life
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-white/10"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3
                  className="text-xl font-semibold text-white mb-6 text-center"
                  variants={titleVariants}
                >
                  {category.title}
                </motion.h3>
                <motion.div className="space-y-3" variants={containerVariants}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-2 rounded-lg border border-white/10 text-center"
                      variants={skillVariants}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(59, 130, 246, 0.3)",
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-gray-200 text-sm font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
