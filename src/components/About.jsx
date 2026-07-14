import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "../data/skills";

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1000;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="stat-value">
      {display}+
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">About</p>
          <h2 className="section-title">
            Building the interfaces <span>engineers rely on.</span>
          </h2>
          <p className="about-copy">
            Frontend developer with hands-on experience building desktop and
            web applications using React.js, Electron.js, ASP.NET Core, C#,
            and SQL Server.
          </p>
          <p className="about-copy">
            Currently contributing to industrial CAD/CAM software at ESAB
            India by developing reusable UI components, dynamic data grids,
            REST APIs, and DXF visualization features used daily by design
            engineers.
          </p>
          <p className="about-copy">
            Outside of internships, I explore blockchain and cloud security,
            and I enjoy turning messy real-world problems into clean,
            maintainable code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="stats-grid"
        >
          {stats.map((s) => (
            <div className="stat-card bp-frame" key={s.label}>
              <Counter value={s.value} />
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
