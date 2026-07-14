import { motion } from "framer-motion";
import { FiCode, FiPenTool, FiGlobe, FiLayers } from "react-icons/fi";
import { timeline } from "../data/experience";

const ICONS = { code: FiCode, design: FiPenTool, web: FiGlobe, cad: FiLayers };

export default function Timeline() {
  return (
    <section id="work" className="section timeline-section">
      <div className="container">
        <p className="eyebrow">Journey</p>
        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>

        <div className="timeline">
          <div className="timeline-line" />
          {timeline.map((item, i) => {
            const Icon = ICONS[item.icon] || FiCode;
            return (
              <motion.div
                key={item.company + item.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="timeline-item"
              >
                <div className="timeline-node">
                  <Icon size={16} />
                </div>
                <div className="timeline-card bp-frame">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p className="timeline-period">{item.period}</p>
                  <ul>
                    {item.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
