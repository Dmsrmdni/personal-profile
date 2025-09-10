"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setAlert(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://usebasin.com/f/f867465cb576", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        setAlert({ type: "success", message: "Message sent! I’ll get back to you soon." });
        form.reset();
      } else {
        setAlert({ type: "error", message: "Failed to send message. Please try again." });
      }
    } catch {
      setAlert({ type: "error", message: "Network error. Please try again." });
    } finally {
      setLoading(false);
      setTimeout(() => setAlert(null), 4000);
    }
  }

  return (
    <section id="contact" className="pb-10 relative">
      {/* Alert / Toast */}
      <AnimatePresence>
        {alert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-5 z-50 right-5 px-4 py-3 rounded-lg shadow-lg text-white ${
              alert.type === "success" ? "bg-green-500" : "bg-red-600"
            }`}
          >
            {alert.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl md:text-4xl text-almost-black font-semibold">Let’s Work Together</h2>
          <p className="text-md md:text-lg text-gray-600 leading-relaxed">
            I’m always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out 👋
          </p>
        </div>

        <form className="space-y-4 text-md md:text-lg text-gray-800" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New message from portfolio contact form" />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full py-3 px-1 border-b-2 border-gray-300 focus:outline-none focus:border-gray-800 transition-all duration-300"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full py-3 px-1 border-b-2 border-gray-300 focus:outline-none focus:border-gray-800 transition-all duration-300"
            />
          </div>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            className="w-full py-3 px-1 border-b-2 border-gray-300 focus:outline-none focus:border-gray-800 transition-all duration-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full py-3 px-1 border-b-2 border-gray-300 focus:outline-none focus:border-gray-800 transition-all duration-300"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-max bg-gray-800 hover:bg-gray-900 px-6 py-3 rounded-full font-medium text-white transition cursor-pointer disabled:opacity-60 flex items-center gap-1"
          >
            {loading ? "Sending..." : "Send Message"}
            <svg className="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z" fill="currentColor" />
                        </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
