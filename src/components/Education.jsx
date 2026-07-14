import { motion } from "framer-motion";
import { FiAward, FiBookOpen } from "react-icons/fi";
import { education, achievements, certifications } from "../data/skills";

export default function Education() {
  return (
    <section id="education" className="section bp-grid">
      <div className="container">
        <p className="eyebrow">Background</p>
        <h2 className="section-title">
          Education &amp; <span>Achievements</span>
        </h2>

        <div className="edu-grid">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="edu-card bp-frame"
            >
              <FiBookOpen size={20} className="edu-icon" />
              <h3>{e.degree}</h3>
              <p className="edu-institution">{e.institution}</p>
              <div className="edu-meta">
                <span>{e.period}</span>
                <span>{e.score}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="achievements-row">
          <div className="achievements-col">
            <h4>Achievements</h4>
            {achievements.map((a) => (
              <div className="achievement-item" key={a.title}>
                <FiAward className="achievement-icon" />
                <div>
                  <p className="achievement-title">{a.title}</p>
                  <p className="achievement-org">{a.org}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="achievements-col">
            <h4>Certifications</h4>
            <div className="cert-grid">
              {certifications.map((c) => (
                <div className="cert-card" key={c.title}>
                  <p className="cert-title">{c.title}</p>
                  <p className="cert-org">{c.org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
