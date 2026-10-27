import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoMark from "./LogoMark";

const suggestions = [
  "What has Yousef built with AI?",
  "Which tech stack does he use?",
  "Is he open to remote roles?",
  "How can I contact him?",
];

const greeting = {
  role: "assistant",
  content:
    "Hi! I'm Yousef's AI assistant. Ask me anything about his experience, AI work, skills or projects.",
};

function SparkIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
    </svg>
  );
}

function AskAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([greeting]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const ask = async (question) => {
    const text = question.trim();
    if (!text || isLoading) return;

    const history = [...messages, { role: "user", content: text }];
    setMessages(history);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // The greeting is UI copy, not part of the conversation.
        body: JSON.stringify({ messages: history.slice(1) }),
      });
      const data = await response.json().catch(() => ({}));
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            data.error ||
            "Something went wrong. Please try again, or email Yousef directly.",
          isError: !data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I couldn't reach the assistant. Check your connection and try again.",
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ask(input);
  };

  const showSuggestions = messages.length === 1 && !isLoading;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-label="Ask my AI"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed z-[60] bottom-24 right-4 left-4 sm:left-auto sm:right-6 sm:w-[380px] h-[min(560px,calc(100vh-8rem))] flex flex-col text-left rounded-2xl border border-white/10 bg-[#0b0a12]/95 backdrop-blur-md shadow-2xl shadow-purple-950/40 overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <LogoMark className="h-7 w-7" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white">Ask my AI</p>
                <p className="text-xs text-gray-400">
                  Answers about Yousef, powered by Gemini
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div
              ref={listRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
              aria-live="polite"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <p
                    className={`max-w-[85%] whitespace-pre-wrap px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-md"
                        : message.isError
                          ? "bg-red-500/10 border border-red-400/20 text-red-200 rounded-bl-md"
                          : "bg-white/[0.06] border border-white/10 text-gray-100 rounded-bl-md"
                    }`}
                  >
                    {message.content}
                  </p>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start" aria-label="Thinking">
                  <span className="flex gap-1 px-4 py-3 rounded-2xl rounded-bl-md bg-white/[0.06] border border-white/10">
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: `${dot * 0.15}s` }}
                      />
                    ))}
                  </span>
                </div>
              )}

              {showSuggestions && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => ask(suggestion)}
                      className="px-3 py-1.5 rounded-full text-xs text-blue-200 border border-blue-400/30 bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 p-3 border-t border-white/10"
            >
              <label htmlFor="ask-ai-input" className="sr-only">
                Your question
              </label>
              <input
                id="ask-ai-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={600}
                placeholder="Ask about Yousef's work"
                autoComplete="off"
                className="flex-1 min-w-0 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/60"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send question"
                className="p-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* .cta-glow sets position: relative, so the wrapper does the fixing. */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        className="fixed z-[60] bottom-6 right-4 sm:right-6"
      >
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close Ask my AI" : "Open Ask my AI"}
          className="cta-glow flex items-center gap-2 p-3 sm:px-4 rounded-full text-sm font-medium"
        >
          <SparkIcon className="relative z-10 w-5 h-5 text-purple-300" />
          <span className="relative z-10 hidden sm:inline">
            {isOpen ? "Close" : "Ask my AI"}
          </span>
        </button>
      </motion.div>
    </>
  );
}

export default AskAI;
