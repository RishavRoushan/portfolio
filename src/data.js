// Edit everything here — names, copy, links, projects.
// The components in App.jsx render from this structured data.

export const profile = {
  name: "Rishav Roushan",
  role: "Senior Frontend Engineer",
  location: "Bengaluru, India",
  status: "Available for frontend roles",
  email: "rishavroushan083@gmail.com",
  linkedin: "https://www.linkedin.com/in/rishav-roushan",
  github: "https://github.com/RishavRoushan",
};

export const navigation = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  title: "Designing premium React experiences for modern SaaS platforms.",
  accent: "Senior Frontend Engineer",
  description:
    "I build clean, fast, and accessible enterprise user interfaces with React, module federation, and performance-first architecture.",
  ctas: [
    { label: "View work", href: "#projects", variant: "primary" },
    { label: "Request resume", href: "mailto:rishavroushan083@gmail.com", variant: "secondary" },
  ],
};

export const about = {
  summary:
    "I help product teams deliver polished SaaS applications with scalable React architecture, strong UX collaboration, and dependable performance.",
  sections: [
    {
      title: "Story",
      copy:
        "After starting with enterprise UI work in SAP UI5, I transitioned into modern React ecosystems where I now craft micro-frontend systems and shared component platforms.",
    },
    {
      title: "Expertise",
      copy:
        "I specialize in React, Redux Toolkit, Module Federation, and performance optimization for dashboards and internal tools used by global customers.",
    },
    {
      title: "Current work",
      copy:
        "At Incture, I build pricing and analytics products for FMCG teams, improving UI stability, accessibility, and release velocity across federated modules.",
    },
    {
      title: "Interests",
      copy:
        "I enjoy refining developer experience, designing scalable component systems, and making complex data feel approachable through clean interfaces.",
    },
  ],
  stats: [
    { value: "3+", label: "Years in frontend delivery" },
    { value: "2", label: "Fortune 500 FMCG clients" },
    { value: "25%", label: "Lighthouse performance improvement" },
  ],
  tech: [
    "React", "Redux Toolkit", "Module Federation", "TypeScript", "Jest", "SCSS", "Accessibility", "REST APIs",
  ],
};

export const experience = [
  {
    company: "Incture Technologies",
    logo: "IT",
    role: "Software Engineer",
    location: "Bengaluru, India",
    date: "Jul 2023 – Present",
    summary:
      "Leading frontend development for enterprise SaaS features with a focus on modular deployment and resilient web performance.",
    responsibilities: [
      "Architect micro-frontends using Webpack 5 Module Federation for independently deployable UI modules.",
      "Collaborate with UX, backend, and QA teams to deliver accessible and responsive interfaces.",
      "Implement lazy loading, code splitting, and runtime optimizations to improve load time and interactivity.",
    ],
    achievements: [
      "Reduced user-facing UI issues by collaborating directly with designers and QA.",
      "Migrated legacy React class components into hooks-based functional modules for maintainability.",
      "Enforced SonarQube quality checks that improved development efficiency and lowered defect count.",
    ],
    technologies: ["React", "Redux Toolkit", "Webpack 5", "TypeScript", "REST APIs", "A11y"],
  },
  {
    company: "Incture Technologies",
    logo: "IT",
    role: "Software Engineer Intern",
    location: "Bengaluru, India",
    date: "Jan 2023 – Jun 2023",
    summary:
      "Built enterprise SAP UI5 applications and integrated REST and OData services for business-focused product workflows.",
    responsibilities: [
      "Delivered SAP UI5 screens with reusable controls and accessible navigation.",
      "Integrated backend services through OData and REST APIs for enterprise workflows.",
    ],
    achievements: [
      "Shipped production-ready UI flows and reduced onboarding time for business users.",
    ],
    technologies: ["SAP UI5", "OData", "REST APIs", "JavaScript"],
  },
];

export const projects = [
  {
    title: "Intelligent Price Management",
    subtitle: "FMCG pricing dashboard",
    description:
      "A production SaaS dashboard for global pricing teams, combining real-time analytics, interactive visualizations, and federated module architecture.",
    highlights: [
      "Real-time pricing insights for enterprise FMCG customers.",
      "Adaptive UI modules with independent deployability.",
    ],
    metrics: ["2x faster module loads", "100% responsive dashboard"],
    stack: ["React", "Redux Toolkit", "Module Federation", "SCSS"],
    links: {
      github: "https://github.com/RishavRoushan/intelligent-price-management",
      demo: "#contact",
    },
  },
  {
    title: "WorkBox",
    subtitle: "Modular enterprise frontend",
    description:
      "Built reusable components for multilingual support, dynamic dashboards, and automated email templates while mentoring junior developers.",
    highlights: [
      "Multilingual UI support and scalable dashboard patterns.",
      "Mentored peers through code review and debugging sessions.",
    ],
    metrics: ["Reusable component library", "Improved review velocity"],
    stack: ["React", "Git", "CSS"],
    links: {
      github: "https://github.com/RishavRoushan/workbox",
      demo: "#contact",
    },
  },
  {
    title: "Federated Pricing Dashboard",
    subtitle: "Micro-frontend system",
    description:
      "Delivered a modular pricing platform using federated architecture, shared state, and runtime optimization for high-demand enterprise workflows.",
    highlights: [
      "Shared state across independently deployed modules.",
      "Performance-focused rendering and bundle splitting.",
    ],
    metrics: ["Modular deployment", "Smooth cross-module navigation"],
    stack: ["React", "Webpack 5", "Redux Toolkit"],
    links: {
      github: "https://github.com/RishavRoushan/federated-pricing-dashboard",
      demo: "#contact",
    },
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { label: "React", level: 95 },
      { label: "JavaScript (ES6+)", level: 92 },
      { label: "HTML5 & CSS3", level: 88 },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { label: "Redux Toolkit", level: 90 },
      { label: "TanStack Query", level: 78 },
      { label: "Next.js", level: 72 },
    ],
  },
  {
    category: "Backend",
    items: [
      { label: "Node.js", level: 76 },
      { label: "Express.js", level: 72 },
      { label: "SQL", level: 68 },
    ],
  },
  {
    category: "Testing",
    items: [
      { label: "Jest", level: 78 },
      { label: "React Testing Library", level: 74 },
    ],
  },
  {
    category: "Tools",
    items: [
      { label: "Git", level: 92 },
      { label: "Vite", level: 88 },
      { label: "Webpack", level: 80 },
    ],
  },
];

export const education = [
  {
    institution: "Birla Institute of Technology, Mesra",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2019 – 2023",
    note: "Graduated with 8.18 CGPA, focused on software engineering and system architecture.",
  },
];

export const achievements = [
  {
    title: "Customer Success Champion Award",
    year: "2024",
    detail: "Recognized for consistently delivering high-quality, production-ready frontend software.",
  },
  {
    title: "Annual Innovation Award",
    year: "2024",
    detail: "Awarded for impactful technical contributions and performance-focused architecture improvements.",
  },
];

export const certifications = [
  {
    title: "Professional Frontend Engineering",
    issuer: "In-house training",
    note: "Completed internal mastery program in React architecture and frontend best practices.",
  },
  {
    title: "Accessibility & Performance",
    issuer: "In-house training",
    note: "Completed workshops on WCAG accessibility and web performance optimization.",
  },
];

export const contact = {
  title: "Let’s build something refined together.",
  description:
    "I’m available for frontend engineering roles and open to work with product-driven teams across SaaS and enterprise.",
  details: [
    { label: "Email", value: "rishavroushan083@gmail.com", href: "mailto:rishavroushan083@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/rishav-roushan", href: "https://www.linkedin.com/in/rishav-roushan" },
    { label: "GitHub", value: "github.com/RishavRoushan", href: "https://github.com/RishavRoushan" },
    { label: "Location", value: "Bengaluru, India" },
    { label: "Availability", value: "Open to frontend opportunities" },
  ],
};
