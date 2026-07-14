import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiSend,
} from "react-icons/fi";

const AVAILABLE_FOR = [
  "Frontend Developer",
  "React Developer",
  ".NET Developer",
  "Software Engineer",
  "Immediate Joiner",
];

// Swap this with your own Formspree (or similar) endpoint to receive
// submissions without a custom backend: https://formspree.io
const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    if (FORM_ENDPOINT.includes("your-form-id")) {
      // No real endpoint configured yet — fall back to opening the user's
      // mail client so the message is never silently lost.
      const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("email")}`);
      window.location.href = `mailto:bakyalakshmibalu362@gmail.com?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <p className="eyebrow">Get In Touch</p>
        <h2 className="section-title">
          Let&apos;s build something <span>together.</span>
        </h2>

        <div className="available-row">
          {AVAILABLE_FOR.map((a) => (
            <span className="available-chip" key={a}>
              {a}
            </span>
          ))}
        </div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="contact-info"
          >
            <a className="contact-item" href="mailto:bakyalakshmibalu362@gmail.com">
              <FiMail />
              <div>
                <h4>Email</h4>
                <p>bakyalakshmibalu362@gmail.com</p>
              </div>
            </a>
            <a className="contact-item" href="tel:+919042717546">
              <FiPhone />
              <div>
                <h4>Phone</h4>
                <p>+91 9042717546</p>
              </div>
            </a>
            <div className="contact-item">
              <FiMapPin />
              <div>
                <h4>Location</h4>
                <p>Chennai, India</p>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/bakyalakshmi-balu-5257a2261/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://github.com/Bakyalakshmi-balu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="contact-form bp-frame"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your message here..."
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              <FiSend size={14} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && <p className="form-status success">Message sent — thank you!</p>}
            {status === "error" && (
              <p className="form-status error">
                Something went wrong. Please email me directly instead.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
