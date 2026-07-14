import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { featuredExperience as fe } from "../data/experience";

export default function FeaturedExperience() {
  return (
    <section id="experience" className="section featured-exp">
      <div className="container">
        <p className="eyebrow">Currently</p>
        <div className="fx-grid">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="fx-main bp-frame"
          >
            <div className="fx-header">
              <h3>{fe.role}</h3>
              <span className="fx-badge">Active</span>
            </div>
            <p className="fx-company">{fe.company}</p>
            <p className="fx-duration">{fe.duration}</p>
            <p className="fx-summary">{fe.summary}</p>

            <div className="fx-tags">
              {fe.tech.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="fx-highlights"
          >
            <h4>What this work involves</h4>
            <ul>
              {fe.highlights.map((h) => (
                <li key={h}>
                  <FiCheck className="fx-check" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
