import { NavLink, Route, Routes } from "react-router-dom";
import profileImage from "../Images/pfp.png";

const milestones = [
  {
    eyebrow: "🎯 Next Challenge",
    date: "Coming Soon",
    title: "Backend Development",
    description:
      "Ready to dive deeper into full-stack development. Next goals: learning databases, APIs, and server-side programming. The frontend foundation is solid — time to build the complete picture!",
    tags: ["APIs", "Databases", "Full-Stack"],
    color: "#f5222d",
    tint: "#fff1f0",
    border: "#ffb3b3",
  },
  {
    eyebrow: "🚀 Launch Day",
    date: "Week 2",
    title: "Professional Portfolio Live",
    description:
      "Deployed my first professional portfolio website using Ant Design and modern engineering practices. From project structure to live deployment — this represents my transformation into thinking like an engineer.",
    tags: ["Live Deployment", "Professional UI", "Engineering Mindset"],
    color: "#13c2c2",
    tint: "#e6fffb",
    border: "#87e8de",
  },
  {
    eyebrow: "🛠️ Professional Tools",
    date: "Week 2",
    title: "Discovered Ant Design",
    description:
      "Learned the difference between custom CSS and professional UI libraries. Understanding component systems, design tokens, and rapid UI development. This is how real engineers build interfaces efficiently.",
    tags: ["Ant Design", "Component Libraries", "Professional UI"],
    color: "#fa541c",
    tint: "#fff2e8",
    border: "#ffbb96",
  },
  {
    eyebrow: "📐 Design Patterns",
    date: "Week 1",
    title: "Learned Basic Engineering Patterns",
    description:
      "Applied professional engineering principles: clear hierarchy, consistent spacing, and mobile-first design. Built multi-page sites with proper navigation and semantic HTML structure that scales.",
    tags: ["Mobile-First Design", "Semantic HTML", "Professional Structure"],
    color: "#722ed1",
    tint: "#f9f0ff",
    border: "#d3adf7",
  },
  {
    eyebrow: "🏗️ Architecture",
    date: "Week 1",
    title: "Understood Software Architecture",
    description:
      "Learned the four core components behind every application: frontend, backend, database, and infrastructure. Understanding how computers communicate through client-server models and HTTP protocols.",
    tags: ["Software Architecture", "Client-Server Model", "HTTP Protocols"],
    color: "#52c41a",
    tint: "#f6ffed",
    border: "#b7eb8f",
  },
  {
    eyebrow: "🧠 Mindset Shift",
    date: "Week 1",
    title: "Developed Engineering Mindset",
    description:
      "Transformed from user to builder through systematic problem-solving, experimentation, and cause-effect-adjust thinking. Started a learning journal for continuous growth and professional preparation.",
    tags: ["Systematic Problem-Solving", "Growth Mindset", "Professional Preparation"],
    color: "#1890ff",
    tint: "#e6f7ff",
    border: "#91d5ff",
  },
];

function Header() {
  return (
    <header className="site-header">
      <nav className="nav-container" aria-label="Main navigation">
        <NavLink className="brand" to="/">
          Portfolio
        </NavLink>
        <div className="nav-links">
          <NavLink end to="/">
            Home
          </NavLink>
          <NavLink to="/learning-journey">Learning Journey</NavLink>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2025 Eduardo H Krokoscz</p>
    </footer>
  );
}

function SocialIcon({ type }) {
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.25 6.92 1.96 1.96 0 0 0 5.25 3ZM20.44 13.15c0-3.16-1.69-4.63-3.95-4.63-1.82 0-2.63 1-3.08 1.7V8.5h-3.38V19h3.38v-5.2c0-1.37.26-2.7 1.96-2.7 1.68 0 1.7 1.57 1.7 2.79V19h3.37v-5.85Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.82c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.56 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero home-hero">
        <div className="hero-content">
          <img className="profile-image" src={profileImage} alt="Eduardo Henrique Krokoscz" />
          <h1>Eduardo Henrique Krokoscz</h1>
          <p>Software Engineering Student</p>
          <div className="social-links">
            <a
              className="button"
              href="https://www.linkedin.com/in/eduardo-henrique-krokoscz-0a1953372/"
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon type="linkedin" />
              LinkedIn
            </a>
            <a
              className="button"
              href="https://github.com/Edeenn1"
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon type="github" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="narrow-container">
          <h2>About Me</h2>
          <p className="about-copy">
            Hello! I&apos;m Eduardo Henrique Krokoscz, a passionate Software Engineering
            student with a keen interest in web development, technology, and continuous
            learning. I enjoy building creative solutions, exploring new frameworks, and
            collaborating on projects that make a difference. My journey is driven by
            curiosity and a desire to grow as a developer and as a person.
          </p>
        </div>
      </section>

      <section className="content-section skills-section">
        <div className="narrow-container">
          <h2>Skills</h2>
          <div className="skills-grid">
            <article className="skill-card">
              <h3>HTML</h3>
              <p>Semantic markup • Document structure • Accessibility</p>
            </article>
            <article className="skill-card">
              <h3>CSS</h3>
              <p>Responsive design • Flexbox • Grid • Animations</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

function MilestoneCard({ milestone }) {
  const cardStyle = {
    "--accent": milestone.color,
    "--tint": milestone.tint,
    "--tag-border": milestone.border,
  };

  return (
    <article className="milestone-card" style={cardStyle}>
      <div className="milestone-meta">
        <span className="eyebrow">{milestone.eyebrow}</span>
        <span className="date">{milestone.date}</span>
      </div>
      <h2>{milestone.title}</h2>
      <p>{milestone.description}</p>
      <div className="tag-list">
        {milestone.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

function LearningJourneyPage() {
  return (
    <main>
      <section className="hero journey-hero">
        <div className="hero-content">
          <h1>Learning Milestones</h1>
          <p>Key achievements and breakthroughs in my web development journey.</p>
        </div>
      </section>

      <section className="journey-section">
        <div className="wide-container">
          <div className="milestones-grid">
            {milestones.map((milestone) => (
              <MilestoneCard key={milestone.title} milestone={milestone} />
            ))}
          </div>

          <section className="stats" aria-labelledby="stats-heading">
            <h2 id="stats-heading">Learning Journey Stats</h2>
            <div className="stats-grid">
              <div>
                <strong className="blue">6</strong>
                <span>Major Milestones</span>
              </div>
              <div>
                <strong className="green">15+</strong>
                <span>Technologies Learned</span>
              </div>
              <div>
                <strong className="purple">2</strong>
                <span>Weeks of Growth</span>
              </div>
            </div>
          </section>

          <div className="journey-cta">
            <h2>The Journey Continues...</h2>
            <p>
              Every milestone builds toward becoming a full-stack developer. Each
              breakthrough opens new possibilities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learning-journey" element={<LearningJourneyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
