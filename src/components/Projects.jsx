import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiGrid,
  FiEye,
  FiUsers,
  FiImage,
  FiGlobe,
  FiCopy,
} from "react-icons/fi";
import { projects } from "../data/projects";

const ICONS = {
  cad: FiLayers,
  grid: FiGrid,
  viewer: FiEye,
  employees: FiUsers,
  image: FiImage,
  web: FiGlobe,
  clone: FiCopy,
};

const ALL = "All";

export default function Projects() {
  const filters = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return [ALL, ...Array.from(set)];
  }, []);

  const [active, setActive] = useState(ALL);

  const visible =
    active === ALL ? projects : projects.filter((p) => p.tech.includes(active));

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">Selected Work</p>
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="filter-row">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-chip ${active === f ? "active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => {
              const Icon = ICONS[p.icon] || FiLayers;
              return (
                <motion.div
                  layout
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="project-card bp-frame"
                >
                  <div className="project-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{p.title}</h3>
                  <p className="project-subtitle">{p.subtitle}</p>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-tags">
                    {p.tech.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {p.links.live && (
                      <a href={p.links.live} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink size={14} /> Live
                      </a>
                    )}
                    {p.links.code && (
                      <a href={p.links.code} target="_blank" rel="noopener noreferrer">
                        <FiGithub size={14} /> Code
                      </a>
                    )}
                    {p.links.case && !p.links.live && !p.links.code && (
                      <span className="project-note">Confidential — internal ESAB project</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
