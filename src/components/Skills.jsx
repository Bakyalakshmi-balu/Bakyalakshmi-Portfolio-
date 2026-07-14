import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section skills bp-grid">
      <div className="container">
        <p className="eyebrow">Toolbox</p>
        <h2 className="section-title">
          Skills &amp; <span>Technologies</span>
        </h2>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="skill-card bp-frame"
            >
              <span className="skill-index">0{i + 1}</span>
              <h3>{group.label}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
