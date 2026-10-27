import { useState } from "react";
import ConnectDock from "./ConnectDock";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields.");
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address.");
      }

      // Using Formspree
      const formId = import.meta.env.VITE_FORMSPREE_FORM_ID || "manbaeda";
      const formspreeUrl = `https://formspree.io/f/${formId}`;

      const requestBody = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "Contact Form Submission",
        message: formData.message,
        _replyto: formData.email,
      };

      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setIsSubmitting(false);
      setSubmitMessage(
        "Thank you for your message! I'll get back to you soon.",
      );
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitMessage(""), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setIsSubmitting(false);

      let errorMessage =
        "Sorry, there was an error sending your message. Please try again or contact me directly at yousef0magdi1@gmail.com";

      // Provide more specific error messages
      if (error.message) {
        if (
          error.message.includes("required fields") ||
          error.message.includes("valid email")
        ) {
          errorMessage = error.message;
        } else if (
          error.message.includes("network") ||
          error.message.includes("Failed to fetch")
        ) {
          errorMessage =
            "Network error. Please check your internet connection and try again.";
        } else if (error.message.includes("400")) {
          errorMessage =
            "Invalid request. Please check your information and try again.";
        } else if (
          error.message.includes("403") ||
          error.message.includes("401")
        ) {
          errorMessage =
            "Form submission not authorized. Please contact me directly at yousef0magdi1@gmail.com";
        } else if (error.message.includes("404")) {
          errorMessage =
            "Form not found. Please contact me directly at yousef0magdi1@gmail.com";
        } else if (error.message.includes("500")) {
          errorMessage =
            "Server error. Please try again later or contact me directly at yousef0magdi1@gmail.com";
        }
      }

      setSubmitMessage(errorMessage);

      setTimeout(() => setSubmitMessage(""), 10000);
    }
  };

  return (
    <div className="w-full bg-[#040302] pt-20">
      <div className="container mx-auto px-4 py-16 pb-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and
            interesting projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h2>
              <p className="text-gray-300 mb-8">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I'd love to hear from you. Feel free to reach
                out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-gray-300">yousef0magdi1@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Phone</h3>
                  <p className="text-gray-300">+201016423143</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Location</h3>
                  <p className="text-gray-300">Cairo, Egypt</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-medium mb-6">Connect With Me</h3>
              <ConnectDock
                onForm={() => document.getElementById("name")?.focus()}
              />
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h2>

            {submitMessage && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitMessage.includes("error") ||
                  submitMessage.includes("Sorry")
                    ? "bg-red-500/20 border border-red-500/50 text-red-300"
                    : "bg-green-500/20 border border-green-500/50 text-green-300"
                }`}
              >
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cta-glow w-full px-8 py-4 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
