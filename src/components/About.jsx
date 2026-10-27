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
                My Story as a Developer
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Software and AI Engineer at Al-Andalus Group LTD, where I built
                a production LLM translation platform: a LangGraph pipeline of
                28 agents across OpenAI, Claude, Gemini and Ollama, tenant-scoped
                RAG on PostgreSQL with pgvector, and a five-service deployment on
                GCP Cloud Run.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Before that I was a Frontend Developer at VODO, shipping React
                applications for ERP, e-commerce and event platforms and owning
                the ERP Warehouse module end to end, and a Technical Support
                Specialist at Teleperformance. Based in Cairo, open to remote,
                hybrid and on-site roles in Egypt and the GCC.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  LangGraph
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  RAG
                </span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                  .NET 8
                </span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                  React & Next.js
                </span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                  GCP
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Quick Facts
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>🤖 Software & AI Engineer at Al-Andalus Group LTD</li>
                <li>🧠 Built a 28-agent LangGraph LLM pipeline</li>
                <li>📈 Raised recall from 23.6% to 80.4% with no false positives</li>
                <li>⚛️ Shipped production React apps at VODO</li>
                <li>🎓 B.Sc. Computer Science, GPA 3.07 / 4.0</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
