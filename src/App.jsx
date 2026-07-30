import React, { lazy, Suspense, useState } from "react";
import useTheme from "./hooks/useTheme.js";
import useScrollSpy from "./hooks/useScrollSpy.js";
import {
  profile,
  navigation,
  hero,
  about,
  skills,
  education,
  achievements,
  certifications,
  contact,
} from "./data.js";

const ExperienceSection = lazy(() => import("./sections/ExperienceSection.jsx"));
const ProjectsSection = lazy(() => import("./sections/ProjectsSection.jsx"));

function Nav({ activeSection, onToggleTheme }) {
  return (
    <header className="site-header">
      <nav className="nav-bar">
        <div className="brand-group">
          <div className="brand-name">{profile.name}</div>
          <div className="brand-role">{profile.role}</div>
        </div>
        <ul className="nav-links">
          {navigation.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={activeSection === item.id ? "active" : ""}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button type="button" className="theme-toggle" onClick={onToggleTheme}>
            Theme
          </button>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-badge">{profile.status}</span>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="hero-actions">
            {hero.ctas.map((cta) => (
              <a key={cta.label} href={cta.href} className={`btn ${cta.variant === "primary" ? "btn-primary" : "btn-secondary"}`}>
                {cta.label}
              </a>
            ))}
          </div>
          <div className="hero-links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
        <div className="hero-panel" aria-hidden="true">
          <div className="hero-panel-inner">
            <div className="panel-title">Hello.</div>
            <div className="panel-copy">
              I create clean, high-impact frontend systems for SaaS teams with a focus on performance, accessibility, and design polish.
            </div>
            <div className="panel-meta">
              <span>{profile.location}</span>
              <span>{profile.role}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="section-head">
        <span className="section-num">01</span>
        <h2>About</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p className="about-intro">{about.summary}</p>
          <div className="about-cards">
            {about.sections.map((section) => (
              <article key={section.title} className="about-card">
                <h3>{section.title}</h3>
                <p>{section.copy}</p>
              </article>
            ))}
          </div>
        </div>
        <aside className="about-aside">
          <div className="stats-grid">
            {about.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="tech-pill-grid">
            {about.tech.map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-head">
        <span className="section-num">04</span>
        <h2>Skills</h2>
      </div>
      <div className="skill-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-card">
            <h3>{group.category}</h3>
            <div className="skill-list">
              {group.items.map((skill) => (
                <div key={skill.label} className="skill-item">
                  <div className="skill-meta">
                    <span>{skill.label}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="section education-section">
      <div className="section-head">
        <span className="section-num">05</span>
        <h2>Education</h2>
      </div>
      <div className="education-card">
        {education.map((entry) => (
          <article key={entry.institution} className="education-entry">
            <div className="education-top">
              <p className="education-degree">{entry.degree}</p>
              <span className="education-period">{entry.period}</span>
            </div>
            <p className="education-school">{entry.institution}</p>
            <p className="education-note">{entry.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="section-head">
        <span className="section-num">06</span>
        <h2>Achievements</h2>
      </div>
      <div className="achievement-grid">
        {achievements.map((item) => (
          <article key={item.title} className="achievement-card">
            <span className="achievement-year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="section-head">
        <span className="section-num">07</span>
        <h2>Certifications</h2>
      </div>
      <div className="certification-grid">
        {certifications.map((cert) => (
          <article key={cert.title} className="cert-card">
            <h3>{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-note">{cert.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageSent(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-head">
        <span className="section-num">08</span>
        <h2>Contact</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-copy">
          <p>{contact.description}</p>
          <div className="contact-details">
            {contact.details.map((item) => (
              <div key={item.label} className="contact-detail-item">
                <span>{item.label}</span>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.value}
                  </a>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={formData.name}
              onChange={(event) => setFormData({ ...formData, name: event.target.value })}
              placeholder="Your name"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Message
            <textarea
              rows="5"
              value={formData.message}
              onChange={(event) => setFormData({ ...formData, message: event.target.value })}
              placeholder="Tell me about your project"
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
          {messageSent && <p className="message-sent">Message ready. I’ll reply soon.</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>Built with React · Designed for modern SaaS products.</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <button type="button" className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Back to top
      </button>
    </footer>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(navigation.map((item) => item.id));

  return (
    <>
      <Nav activeSection={activeSection} onToggleTheme={toggleTheme} />
      <main className="page-wrap">
        <Hero />
        <AboutSection />
        <Suspense fallback={<div className="section-loading">Loading experience…</div>}>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={<div className="section-loading">Loading projects…</div>}>
          <ProjectsSection />
        </Suspense>
        <SkillsSection />
        <EducationSection />
        <AchievementsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
