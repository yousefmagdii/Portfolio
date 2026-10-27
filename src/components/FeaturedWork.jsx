import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlasmaProvider, PlasmaCanvas, Plasma } from "@cruxgarden/plasma-ui";

const stats = [
  {
    label: "Short verse recall",
    from: 23.6,
    to: 80.4,
    decimals: 1,
    unit: "%",
    note: "0 false positives across 5,899 test cases",
  },
  {
    label: "Detection latency",
    from: 75,
    to: 22,
    decimals: 0,
    unit: " ms",
    note: "Deterministic scripture detection",
  },
  {
    label: "Export job pickup",
    from: 97,
    to: 1.9,
    decimals: 1,
    unit: " s",
    note: "Five-minute PDF export moved to a job queue",
  },
  {
    label: "LangGraph agents",
    from: 0,
    to: 28,
    decimals: 0,
    unit: "",
    note: "Translation, review, QC, transcription, dubbing",
  },
];

const nodes = {
  web: {
    name: "Next.js front end",
    tag: "Web app",
    detail:
      "The client-facing app for uploading documents, tracking jobs and managing subscriptions.",
  },
  api: {
    name: ".NET 8 API",
    tag: "Core API",
    detail:
      "Central REST API: tenants, auth, jobs and Stripe billing (Checkout, webhooks, subscriptions).",
  },
  ai: {
    name: "FastAPI AI service",
    tag: "LangGraph",
    detail:
      "Runs the 28-agent LangGraph pipeline across OpenAI, Claude, Gemini and Ollama.",
  },
  embed: {
    name: "Embedding service",
    tag: "bge-m3",
    detail:
      "Generates bge-m3 embeddings for tenant-scoped retrieval-augmented generation.",
  },
  workers: {
    name: "Workers",
    tag: "Job queue",
    detail:
      "Background jobs for layout-preserving DOCX, PDF and InDesign translation and exports.",
  },
  db: {
    name: "PostgreSQL + pgvector",
    tag: "Cloud SQL",
    detail:
      "Relational data and vectors in one place, searched through an HNSW index.",
  },
};

const providers = ["OpenAI", "Claude", "Gemini", "Ollama"];

const highlights = [
  "Layout-preserving DOCX, PDF & InDesign translation",
  "Tenant-scoped RAG with an HNSW index",
  "Stripe billing tested against a simulated Stripe",
  "CI/CD through GitHub Actions & Cloud Build",
];

function useCountUp(from, to, duration = 1600, delay = 0) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setValue(to);
      return;
    }

    let frame;
    let start;
    const timeout = setTimeout(() => {
      const step = (time) => {
        if (start === undefined) start = time;
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(from + (to - from) * eased);
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [from, to, duration, delay]);

  return value;
}

// Plasma is GPU-heavy, so the liquid glass only runs on wide screens with a
// mouse and normal motion settings; everything else gets the plain cards.
// A custom Plasma mood in the site's dark blue and purple, instead of the
// built-in green "aurora".
const portfolioMood = {
  colors: ["#05040c", "#1e1b4b", "#7c3aed"],
  blend: 12,
  spring: { stiffness: 170, damping: 22 },
};

const PLASMA_QUERY =
  "(min-width: 1024px) and (hover: hover) and (prefers-reduced-motion: no-preference)";

function usePlasmaEnabled() {
  const [enabled, setEnabled] = useState(
    () => window.matchMedia?.(PLASMA_QUERY).matches ?? false,
  );

  useEffect(() => {
    const media = window.matchMedia?.(PLASMA_QUERY);
    if (!media) return;
    const update = () => setEnabled(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return enabled;
}

// A Plasma surface when the glass is on, otherwise a plain div.
function Surface({ plasma, plainClassName, children, ...plasmaProps }) {
  if (plasma) return <Plasma {...plasmaProps}>{children}</Plasma>;
  return <div className={plainClassName}>{children}</div>;
}

function StatCard({ stat, index, plasma }) {
  const value = useCountUp(stat.from, stat.to, 1600, 300 + index * 150);
  const improved = stat.from !== 0;

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
    >
      <Surface
        plasma={plasma}
        plainClassName="h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors duration-300"
        className="h-full cursor-grab active:cursor-grabbing select-none"
        padding={20}
        radius={20}
        draggable
        group="stats"
      >
        <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
        <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent tabular-nums">
          {value.toFixed(stat.decimals)}
          {stat.unit}
        </p>
        {improved && (
          <p className="text-xs text-gray-500 mt-1">
            from{" "}
            <span className="line-through">
              {stat.from}
              {stat.unit}
            </span>
          </p>
        )}
        <p className="text-gray-300 text-xs mt-3 leading-relaxed">
          {stat.note}
        </p>
      </Surface>
    </motion.div>
  );
}

function Node({ id, active, onSelect, className = "" }) {
  const node = nodes[id];
  const isActive = active === id;

  return (
    <button
      type="button"
      onMouseEnter={() => onSelect(id)}
      onFocus={() => onSelect(id)}
      onClick={() => onSelect(id)}
      className={`relative w-full px-3 py-3 rounded-lg border text-center transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-blue-400/60 shadow-lg shadow-blue-500/20 scale-[1.03]"
          : "bg-black/40 border-white/10 hover:border-white/30"
      } ${className}`}
    >
      <span className="block text-sm font-medium text-white">{node.name}</span>
      <span className="block text-[11px] uppercase tracking-wider text-blue-300/80 mt-0.5">
        {node.tag}
      </span>
    </button>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-1" aria-hidden="true">
      <div className="relative w-0.5 h-8 bg-gradient-to-b from-blue-500/50 to-purple-500/50 overflow-hidden rounded-full">
        <span className="flow-dot absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_2px_rgba(147,197,253,0.8)]" />
      </div>
    </div>
  );
}

function FeaturedWork() {
  const [active, setActive] = useState("ai");
  const plasma = usePlasmaEnabled();

  const content = (
    <div className="w-full bg-[#040302]">
      {plasma && (
        <PlasmaCanvas
          zIndex={0}
          style={{ position: "fixed", inset: 0, pointerEvents: "none" }}
        />
      )}
      <div className="relative z-10 pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Featured AI Work
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A production LLM translation platform I built at Al-Andalus Group
              LTD
            </p>
          </motion.div>

          {plasma && (
            <p className="text-center text-xs text-gray-400 -mt-8 mb-4">
              Liquid glass: drag the cards and watch them fuse
            </p>
          )}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                stat={stat}
                index={index}
                plasma={plasma}
              />
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Surface
                plasma={plasma}
                plainClassName="relative p-5 sm:p-6 rounded-2xl border border-dashed border-blue-400/30 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                padding={24}
                lean={false}
                frost={0.25}
              >
                <span
                  className={
                    plasma
                      ? "block mb-4 text-xs uppercase tracking-wider text-blue-200"
                      : "absolute -top-3 left-5 px-2 bg-[#040302] text-xs uppercase tracking-wider text-blue-300"
                  }
                >
                  GCP Cloud Run
                </span>

                <div className="max-w-xs mx-auto">
                  <Node id="web" active={active} onSelect={setActive} />
                </div>
                <Connector />
                <div className="max-w-xs mx-auto">
                  <Node id="api" active={active} onSelect={setActive} />
                </div>
                <Connector />
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <Node id="ai" active={active} onSelect={setActive} />
                  <Node id="embed" active={active} onSelect={setActive} />
                  <Node id="workers" active={active} onSelect={setActive} />
                </div>
                <Connector />
                <div className="max-w-xs mx-auto">
                  <Node id="db" active={active} onSelect={setActive} />
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 text-center">
                    LLM providers
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {providers.map((provider) => (
                      <span
                        key={provider}
                        className={`px-3 py-1 rounded-full text-xs border transition-colors duration-300 ${
                          active === "ai"
                            ? "bg-purple-500/25 text-purple-200 border-purple-400/40"
                            : "bg-purple-500/10 text-purple-300/70 border-white/10"
                        }`}
                      >
                        {provider}
                      </span>
                    ))}
                  </div>
                </div>
              </Surface>
            </motion.div>

            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Surface
                plasma={plasma}
                plainClassName="min-h-[150px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-white/10"
                className="min-h-[150px]"
                padding={24}
                lean={6}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Hover or tap a service
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {nodes[active].name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {nodes[active].detail}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </Surface>

              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start text-gray-300 text-sm"
                  >
                    <span className="text-green-400 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );

  if (!plasma) return content;

  return (
    <PlasmaProvider
      mood={portfolioMood}
      theme="dark"
      canvas={false}
      frost={0.1}
      elevation={0.4}
      grain={0.6}
      pointerDrop={false}
      maxSurfaces={8}
    >
      {content}
    </PlasmaProvider>
  );
}

export default FeaturedWork;
