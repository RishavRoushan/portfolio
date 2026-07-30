import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data.js";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-head">
        <span className="section-num">03</span>
        <h2>Projects</h2>
      </div>
      <motion.div className="project-grid" variants={container} initial="hidden" animate="visible">
        {projects.map((project) => (
          <motion.article key={project.title} className="project-card" variants={item} whileHover={{ y: -4, boxShadow: "0 32px 90px rgba(0,0,0,0.2)" }}>
            <div className="project-screenshot">
              <div className="project-screenshot-label">Live preview</div>
              <div className="project-screenshot-faux" aria-hidden="true" />
            </div>
            <div className="project-card-content">
              <span className="project-chip">{project.subtitle || project.file}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-feature-list">
                {project.highlights.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
              <div className="project-meta-row">
                <div className="project-tags">
                  {project.stack.map((tech) => (
                    <span key={tech} className="project-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.links.github} target="_blank" rel="noreferrer">GitHub</a>
                  <a href={project.links.demo}>Demo</a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default React.memo(ProjectsSection);
