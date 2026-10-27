import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// icon: Simple Icons slug (https://simpleicons.org); null shows a monogram
const skillCategories = [
  {
    title: "AI & LLM",
    color: "from-purple-500/25 to-pink-500/15",
    skills: [
      { name: "LangGraph", icon: "langgraph" },
      { name: "RAG", icon: null },
      { name: "Agent Pipelines", icon: null },
      { name: "Embeddings (bge-m3)", icon: "huggingface" },
      { name: "pgvector", icon: "postgresql" },
      { name: "OpenAI", icon: null },
      { name: "Anthropic Claude", icon: "anthropic" },
      { name: "Gemini", icon: "googlegemini" },
      { name: "Ollama", icon: "ollama" },
    ],
  },
  {
    title: "Languages",
    color: "from-yellow-500/20 to-orange-500/10",
    skills: [
      { name: "Python", icon: "python" },
      { name: "C#", icon: null },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript (ES6+)", icon: "javascript" },
      { name: "SQL", icon: null },
    ],
  },
  {
    title: "Backend & Data",
    color: "from-green-500/20 to-teal-500/10",
    skills: [
      { name: ".NET 8", icon: "dotnet" },
      { name: "ASP.NET Core", icon: "dotnet" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express" },
      { name: "REST API Design", icon: null },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    title: "Frontend",
    color: "from-blue-500/25 to-cyan-500/10",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Redux Toolkit", icon: "redux" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Ant Design", icon: "antdesign" },
      { name: "Micro Frontends", icon: null },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css" },
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "from-sky-500/20 to-indigo-500/15",
    skills: [
      { name: "GCP Cloud Run", icon: "googlecloud" },
      { name: "Cloud SQL", icon: "googlecloud" },
      { name: "Cloud Build", icon: "googlecloud" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "CI/CD", icon: null },
      { name: "Git", icon: "git" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
  {
    title: "Integrations & Data",
    color: "from-rose-500/20 to-purple-500/10",
    skills: [
      { name: "Stripe", icon: "stripe" },
      { name: "OAuth & JWT", icon: "jsonwebtokens" },
      { name: "Firebase", icon: "firebase" },
      { name: "Supabase", icon: "supabase" },
      { name: "Power BI", icon: null },
      { name: "Tableau", icon: null },
      { name: "Excel", icon: null },
    ],
  },
];

const allSkills = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({
    ...skill,
    category: category.title,
    color: category.color,
  })),
);

const filters = ["All", ...skillCategories.map((category) => category.title)];

function SkillIcon({ skill }) {
  const [failed, setFailed] = useState(false);

  if (!skill.icon || failed) {
    const initials = skill.name
      .replace(/[^A-Za-z0-9#+. ]/g, "")
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2);
    return (
      <span className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-[10px] font-bold text-white/80">
        {initials}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${skill.icon}/white`}
      alt=""
      className="w-6 h-6 opacity-90"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleSkills =
    activeFilter === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeFilter);

  return (
    <div className="w-full bg-[#040302]">
      <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              My Skills
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            role="tablist"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {filters.map((filter) => {
              const isActive = filter === activeFilter;
              const count =
                filter === "All"
                  ? allSkills.length
                  : allSkills.filter((skill) => skill.category === filter)
                      .length;

              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skills-filter-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 to-purple-600/40 border border-white/20"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">
                    {filter}
                    <span className="ml-1.5 text-xs text-gray-400">
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
          >
            <AnimatePresence mode="popLayout">
              {visibleSkills.map((skill, index) => (
                <motion.div
                  layout
                  key={`${skill.category}-${skill.name}`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{
                    duration: 0.3,
                    delay: Math.min(index * 0.015, 0.4),
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg border border-white/10 hover:border-white/25 bg-gradient-to-br ${skill.color}`}
                  title={skill.category}
                >
                  <SkillIcon skill={skill} />
                  <span className="text-gray-100 text-sm font-medium leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
