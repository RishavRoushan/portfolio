// Edit everything here — names, copy, links, projects.
// The components in App.jsx just render whatever is in this file.

export const profile = {
  name: "Rishav",
  role: "Frontend Software Engineer",
  location: "Bengaluru, IN",
  status: "AVAILABLE FOR NEW ROLES",
  email: "rishavroushan083@example.com",
  linkedin: "https://www.linkedin.com/in/rishav-roushan-9a7391195/",
  github: "https://github.com/RishavRoushan",
};

export const graphNodes = [
  { id: "react", label: "React", x: 180, y: 50 },
  { id: "redux", label: "Redux Toolkit", x: 180, y: 210 },
  { id: "modfed", label: "Module Fed.", x: 450, y: 30 },
  { id: "perf", label: "Perf. Opt.", x: 720, y: 50 },
  { id: "ts", label: "TypeScript", x: 720, y: 210 },
  { id: "a11y", label: "A11y + Testing", x: 450, y: 230 },
];

export const stats = [
  { num: "3+", label: "YEARS IN PRODUCTION FRONTEND" },
  { num: "2", label: "FORTUNE 500 FMCG CLIENTS SHIPPED FOR" },
  { num: "2×", label: "COMPANY AWARDS AT INCTURE" },
];

export const experience = [
  {
    dates: "2022 — PRESENT",
    active: true,
    role: "Frontend Software Engineer",
    org: "Incture Technologies · Bengaluru, India",
    summary:
      "Building and maintaining pricing dashboards for Fortune 500 FMCG clients, with a focus on micro-frontend architecture and runtime performance.",
    highlights: [
      "Architected micro-frontend modules with Webpack 5 Module Federation for Colgate-Palmolive and PepsiCo pricing platforms",
      "Owned state layers with Redux Toolkit across independently deployed frontend modules",
      "Drove web performance optimization work — load time, bundle size, and rendering efficiency",
      "Received the Customer Success Champion Award and the Annual Innovation Award",
    ],
  },
];

export const projects = [
  {
    file: "// pricing-dashboard-colgate",
    title: "FMCG Pricing Dashboard",
    desc: "Production pricing dashboard built as a set of federated micro-frontends, giving Colgate-Palmolive teams a single interface assembled from independently shipped modules.",
    tags: ["React", "Module Federation", "Redux Toolkit"],
  },
  {
    file: "// pricing-dashboard-pepsico",
    title: "Pricing Platform, PepsiCo",
    desc: "Extended the same micro-frontend platform for a second Fortune 500 client, tuning shared modules for performance under a distinct data profile.",
    tags: ["Webpack 5", "Performance", "React"],
  },
  {
    file: "// medical-appointment-form",
    title: "Medical Appointment Form",
    desc: "Formik + Yup form with debounced validation, CSRF protection, and full accessibility support, backed by a 35-case Jest/RTL test suite.",
    tags: ["Formik", "Yup", "Jest/RTL"],
  },
  {
    file: "// medical-card-carousel",
    title: "Medical Card Carousel",
    desc: "React + SCSS carousel component with IntersectionObserver-driven analytics, three distinct card types, and accessibility baked in from the start.",
    tags: ["React", "SCSS", "a11y"],
  },
];

export const manifest = [
  { key: "core", val: ["React", "TypeScript", "JavaScript"] },
  { key: "architecture", val: ["Module Federation", "Micro-frontends", "Webpack 5"] },
  { key: "state", val: ["Redux Toolkit"] },
  { key: "styling", val: ["SCSS", "CSS Grid", "Flexbox"] },
  { key: "quality", val: ["Jest", "React Testing Library", "Accessibility"] },
  { key: "performance", val: ["Bundle optimization", "Load-time tuning"] },
  { key: "backend-adjacent", val: ["Node.js", "SQL", "GCP", "MongoDB"] },
];

export const credentials = [
  { title: "B.Tech, Computer Science", sub: "Birla Institute of Technology, Mesra" },
  { title: "Annual Innovation Award", sub: "Incture Technologies" },
  { title: "Customer Success Champion Award", sub: "Incture Technologies" },
];
