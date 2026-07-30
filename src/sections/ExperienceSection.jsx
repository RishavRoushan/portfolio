import React, { useState } from "react";
import { motion } from "framer-motion";
import { experience } from "../data.js";

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, duration: 0.45 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="section experience-section">
      <div className="section-head">
        <span className="section-num">02</span>
        <h2>Experience</h2>
      </div>
      <motion.div className="timeline" variants={container} initial="hidden" animate="visible">
        {experience.map((entry, index) => (
          <motion.article key={entry.role + entry.date} className="timeline-card" variants={item}>
            <div className="timeline-card-header">
              <div className="timeline-badge">{entry.logo}</div>
              <div>
                <p className="timeline-role">{entry.role}</p>
                <p className="timeline-company">{entry.company} · {entry.location}</p>
              </div>
              <button
                type="button"
                className="timeline-toggle"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
              >
                {openIndex === index ? "Hide details" : "Show details"}
              </button>
            </div>
            <div className="timeline-meta">
              <span>{entry.date}</span>
            </div>
            <p className="timeline-summary">{entry.summary}</p>
            <div className={`timeline-details ${openIndex === index ? "open" : ""}`}>
              <div className="timeline-block">
                <h3>Responsibilities</h3>
                <ul>
                  {entry.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline-block">
                <h3>Achievements</h3>
                <ul>
                  {entry.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline-tags">
                {entry.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default React.memo(ExperienceSection);
