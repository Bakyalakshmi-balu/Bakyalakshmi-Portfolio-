import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiDotnet, SiElectron } from "react-icons/si";
import { TbDatabase, TbBrandCSharp } from "react-icons/tb";
import profile from "../assets/profile.jpg";

const ROLES = ["Full Stack Software Developer", "Frontend Developer", "React Developer", " .Net Developer"];

function useTypewriter(words, typeMs = 70, deleteMs = 35, holdMs = 1600) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? deleteMs : typeMs);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeMs, deleteMs, holdMs]);

  return text;
}

const FLOATERS = [
  { Icon: FaReact, top: "12%", left: "6%", delay: 0, color: "#61DAFB" },
  { Icon: SiDotnet, top: "70%", left: "10%", delay: 0.6, color: "#8B5CF6" },
  { Icon: SiElectron, top: "18%", left: "82%", delay: 1.1, color: "#9FEAF9" },
  { Icon: TbBrandCSharp, top: "60%", left: "86%", delay: 0.3, color: "#3B82F6" },
  { Icon: TbDatabase, top: "88%", left: "60%", delay: 0.9, color: "#F8FAFC" },
];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section id="home" className="hero bp-grid">
      <div className="hero-fade" />

      {FLOATERS.map(({ Icon, top, left, delay, color }, i) => (
        <motion.div
          key={i}
          className="hero-floater"
          style={{ top, left, color }}
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon size={28} />
        </motion.div>
      ))}

      <div className="container hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-copy"
        >
          <p className="eyebrow">Hi, I&apos;m</p>
          <h1 className="hero-name">Bakyalakshmi B</h1>
          <h2 className="hero-role">
            <span className="hero-typed">{typed}</span>
            <span className="hero-cursor">|</span>
          </h2>
          <p className="hero-stack">
            React.js · JavaScript · ASP.NET Core · Electron.js
          </p>
          <p className="hero-current">
            Currently building industrial CAD/CAM software at{" "}
            <strong>ESAB India</strong>
          </p>
          <div className="hero-buttons">
            <a href="/BakyalakshmiBalu.pdf" className="btn btn-primary" download>
              Download Resume
            </a>
            <a href="#projects" className="btn btn-ghost">
              View Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hero-portrait-wrap"
        >
          <div className="hero-portrait bp-frame">
            <img src={profile} alt="Bakyalakshmi B" />
          </div>
          <svg className="hero-draw" viewBox="0 0 200 200" fill="none">
            <motion.circle
              cx="100" cy="100" r="96"
              stroke="var(--primary)"
              strokeWidth="1"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </div>

      <a href="#experience" className="scroll-cue" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
