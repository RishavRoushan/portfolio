import React, { useEffect, useRef, useState } from "react";
import {
  profile,
  graphNodes,
  stats,
  experience,
  projects,
  manifest,
  credentials,
} from "./data.js";

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "in" : ""} ${className}`}>
      {children}
    </div>
  );
}

function ModuleGraph() {
  const shell = { x: 450, y: 130 };
  return (
    <div className="graph">
      <svg viewBox="0 0 900 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {graphNodes.map((n) => (
          <line
            key={`edge-${n.id}`}
            className="edge"
            x1={shell.x}
            y1={shell.y}
            x2={n.x}
            y2={n.y}
          />
        ))}
        <circle className="node-circle shell" cx={shell.x} cy={shell.y} r="42" />
        <text className="node-label shell" x={shell.x} y={shell.y - 4} textAnchor="middle">
          shell
        </text>
        <text
          className="node-label shell"
          x={shell.x}
          y={shell.y + 12}
          textAnchor="middle"
          style={{ fill: "var(--text-dim)", fontSize: 9 }}
        >
          {profile.name.toLowerCase()}
        </text>

        {graphNodes.map((n) => (
          <g key={n.id}>
            <circle className="node-circle" cx={n.x} cy={n.y} r="30" />
            <text className="node-label" x={n.x} y={n.y + 4} textAnchor="middle">
              {n.label}
            </text>
          </g>
        ))}
      </svg>
      <div className="graph-fallback">
        shell({profile.name.toLowerCase()}) → [{graphNodes.map((n) => n.label).join(", ")}]
      </div>
    </div>
  );
}

function Nav() {
  const links = [
    ["about", "about"],
    ["experience", "experience"],
    ["projects", "projects"],
    ["skills", "skills"],
    ["contact", "contact"],
  ];
  return (
    <header>
      <nav>
        <div className="logo">
          {profile.name.toLowerCase()}
          <span>.dev</span>
        </div>
        <ul className="navlinks">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={`#${href}`}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" style={{ borderTop: "none" }}>
      <div className="eyebrow">
        {profile.status} · {profile.location}
      </div>
      <h1>
        Frontend engineer who ships <span className="accent">federated</span>, fast, and
        honest interfaces.
      </h1>
      <p className="tagline">
        3+ years building React micro-frontends and performance-tuned dashboards for
        Fortune 500 FMCG teams — Colgate-Palmolive and PepsiCo among them.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">
          View work
        </a>
        <a href="#contact" className="btn btn-secondary">
          Get in touch
        </a>
      </div>
      <Reveal>
        <ModuleGraph />
      </Reveal>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="section-head">
        <span className="section-num">01</span>
        <h2>About</h2>
      </div>
      <div className="about-grid">
        <Reveal className="about-text">
          <p>
            I'm a <strong>{profile.role}</strong> at Incture Technologies in Bengaluru,
            where I spend most of my time inside <strong>pricing dashboards</strong> used
            by Fortune 500 FMCG teams — the kind of interfaces where a slow render or a
            stale cache has real business cost.
          </p>
          <p>
            My focus sits at the intersection of <strong>micro-frontend architecture</strong>{" "}
            (Webpack 5 Module Federation), <strong>state management</strong> (Redux
            Toolkit), and <strong>web performance</strong> — breaking large frontends into
            independently deployable pieces without breaking the experience that holds
            them together.
          </p>
          <p>
            I care about code that a teammate can pick up cold, and interfaces that stay
            usable under real-world data, not demo data.
          </p>
        </Reveal>
        <Reveal>
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <div className="section-head">
        <span className="section-num">02</span>
        <h2>Experience</h2>
      </div>
      <Reveal>
        <div className="log">
          {experience.map((e) => (
            <div className="log-entry" key={e.role + e.org}>
              <div className="log-meta">
                {e.dates}
                <br />
                {e.active && <span className="tag">● active</span>}
              </div>
              <div className="log-body">
                <div className="log-role">{e.role}</div>
                <div className="log-org">{e.org}</div>
                <p>{e.summary}</p>
                <ul className="log-list">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="section-head">
        <span className="section-num">03</span>
        <h2>Selected work</h2>
      </div>
      <div className="projects">
        {projects.map((p) => (
          <Reveal key={p.title}>
            <div className="project-card">
              <div className="project-file">{p.file}</div>
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="chip-row">
                {p.tags.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="section-head">
        <span className="section-num">04</span>
        <h2>Stack</h2>
      </div>
      <Reveal>
        <div className="manifest">
          <div className="manifest-comment">
            // package.json — {profile.name.toLowerCase()}/frontend-toolkit
          </div>
          {manifest.map((m) => (
            <div className="manifest-line" key={m.key}>
              <span className="manifest-key">"{m.key}"</span>: [
              {m.val.map((v, i) => (
                <React.Fragment key={v}>
                  <span className="manifest-val">"{v}"</span>
                  {i < m.val.length - 1 ? ", " : ""}
                </React.Fragment>
              ))}
              ],
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Credentials() {
  return (
    <section id="credentials">
      <div className="section-head">
        <span className="section-num">05</span>
        <h2>Education &amp; recognition</h2>
      </div>
      <div className="credentials">
        {credentials.map((c) => (
          <Reveal key={c.title}>
            <div className="cred-card">
              <div className="cred-title">{c.title}</div>
              <div className="cred-sub">{c.sub}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="wrap">
      <div className="contact-title">
        Let's <span className="accent">federate</span> something together.
      </div>
      <p className="contact-sub">
        Open to Frontend and Full-Stack roles. Reach out directly — I reply fast.
      </p>
      <div className="contact-links">
        <a href={`mailto:${profile.email}`} className="btn btn-primary">
          {profile.email}
        </a>
        <a href={profile.linkedin} className="btn btn-secondary" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} className="btn btn-secondary" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      <div className="foot-note">built with react-shaped hands, deployed from bengaluru.</div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main className="wrap">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
      </main>
      <Footer />
    </>
  );
}
