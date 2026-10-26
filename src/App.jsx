
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  Smartphone,
  X,
} from "lucide-react";
import "./styles.css";
import samihaAvatar from "./assets/samiha-avatar.png";

const projects = [
  {
    title: "AI Study Web App",
    category: "01 / AI & EDUCATION",
    description:
      "An AI-focused study platform concept designed to support students with a more organized digital learning experience and technology-assisted study workflows.",
    theme: "project-lime",
    wordmark: "STUDY AI",
    tech: ["React", "JavaScript", "AI"],
  },
  {
    title: "Luxury Hotel Management",
    category: "02 / MANAGEMENT",
    description:
      "A hotel management application concept focused on organizing guest information, reservations, room availability, and essential hotel operations in one digital workspace.",
    theme: "project-cream",
    wordmark: "LUXE STAY",
    tech: ["Web App", "Dashboard"],
  },
  {
    title: "Online Tutor Platform",
    category: "03 / EDUCATION",
    description:
      "An online tutoring platform concept built around a structured digital learning experience for students seeking tutoring and educational support.",
    theme: "project-pink",
    wordmark: "TUTORLY",
    tech: ["Web Development", "UI"],
  },
  {
    title: "Business ERP Dashboard",
    category: "04 / BUSINESS SOFTWARE",
    description:
      "A business software concept for organizing operational records and presenting business information through a centralized management dashboard.",
    theme: "project-blue",
    wordmark: "CORE ERP",
    tech: ["ERP", "Database"],
  },
  {
    title: "She Shield",
    category: "05 / MOBILE APPLICATION",
    description:
      "A women’s safety application concept focused on accessible safety-related features and a straightforward mobile user experience.",
    theme: "project-pink",
    wordmark: "SHE SHIELD",
    tech: ["Flutter", "Mobile"],
  },
  {
    title: "RESTful API Hub",
    category: "06 / BACKEND",
    description:
      "A backend development project focused on structured API endpoints, data exchange, and connecting application services.",
    theme: "project-blue",
    wordmark: "API HUB",
    tech: ["REST API", "Backend"],
  },
  {
    title: "Networking Platform",
    category: "07 / WEB APPLICATION",
    description:
      "A networking platform concept designed around digital connections, information sharing, and a streamlined user experience.",
    theme: "project-lime",
    wordmark: "CONNECT",
    tech: ["Web App", "Frontend"],
  },
  {
    title: "Business Website Concepts",
    category: "08 / WEB DEVELOPMENT",
    description:
      "A collection of business website concepts exploring responsive layouts, visual identity, clear content hierarchy, and modern website interfaces.",
    theme: "project-cream",
    wordmark: "STUDIO WEB",
    tech: ["React", "CSS", "Responsive"],
  },
];

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Responsive websites and web applications with modern interfaces and practical functionality.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile application development using Flutter, Dart, and Firebase.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Backend & APIs",
    description:
      "API development, database integration, authentication, and application services.",
    icon: Database,
  },
  {
    number: "04",
    title: "Business Solutions",
    description:
      "Business dashboards and software concepts for organizing day-to-day workflows.",
    icon: ArrowUpRight,
  },
];

const technologies = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Angular",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Laravel",
  "PHP",
  ".NET Core",
  "C#",
  "Flutter",
  "Dart",
  "Firebase",
  "MongoDB",
  "MySQL",
  "SQL Server",
  "REST APIs",
  "JWT",
  "Git",
  "GitHub",
  "Postman",
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Work", "#projects"],
    ["Stack", "#stack"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="nav-wrap">
      <a className="brand" href="#home" aria-label="Samiha Khan home">
        <span className="brand-mark">
          S<span>K</span>.
        </span>
        <span className="brand-name">
          SAMIHA KHAN
          <small>DEVELOPER & CREATOR</small>
        </span>
      </a>

      <button
        className="mobile-menu"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={19} /> : <Menu size={19} />}
      </button>

      <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-cta"
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Let&apos;s talk <ArrowUpRight size={14} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid" />

      <div className="hero-topline">
        <span>
          <span className="status-dot" />
          AVAILABLE FOR SELECT PROJECTS
        </span>
        <span className="topline-right">
          <span className="tiny-star">✳</span>
          WEB / MOBILE / SOFTWARE
        </span>
      </div>

      <div className="hero-title-wrap">
        <p className="eyebrow">FULL-STACK & MOBILE APP DEVELOPER</p>
        <h1>
          SAMIHA<span className="title-period">.</span>
        </h1>
        <div className="hero-subtitle">
          <span className="outline-word">DIGITAL</span>
          <span>BUILDER</span>
        </div>
      </div>

      <div className="avatar-stage" aria-hidden="true">
        <div className="avatar-glow" />
        <div className="avatar-orbit" />
        <div className="avatar-orbit orbit-two" />
<img
  src={samihaAvatar}
  alt="Samiha Khan"
  className="hero-avatar"
/>


        <div className="avatar-chip chip-left">
          <Code2 size={15} />
          CLEAN CODE
        </div>
        <div className="avatar-chip chip-right">
          <Smartphone size={15} />
          MOBILE + WEB
        </div>
      </div>

      <div className="hero-bottom">
        <p>
          TURNING IDEAS INTO DIGITAL EXPERIENCES.
          <br />
          <span>From the first concept to the final detail.</span>
        </p>

        <a className="round-link" href="#about" aria-label="Explore about section">
          <ArrowDownRight size={20} />
        </a>

        <p className="hero-note">
          KARACHI, PAKISTAN
          <br />
          <span>BUILDING WHAT&apos;S NEXT.</span>
        </p>
      </div>

      <a className="scroll-hint" href="#about">
        <span />
        SCROLL TO EXPLORE
        <span />
      </a>
    </section>
  );
}

function Marquee() {
  const labels = [
    "WEB DEVELOPMENT",
    "MOBILE APPLICATIONS",
    "BACKEND SYSTEMS",
    "BUSINESS SOFTWARE",
  ];

  return (
    <div className="marquee" aria-label="Development services">
      <div className="marquee-track">
        {[...labels, ...labels].map((label, index) => (
          <span key={`${label}-${index}`}>
            {label} <b>✳</b>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="section-kicker">
        <span>01 / ABOUT ME</span>
        <span>A LITTLE CONTEXT</span>
      </div>

      <div className="about-layout">
        <div className="about-heading">
          <h2>
            IDEAS
            <br />
            INTO <span>REALITY.</span>
          </h2>

          <div className="about-stamp">
            <span>DESIGN</span>
            <Code2 size={19} />
            <span>DEVELOP</span>
          </div>
        </div>

        <div className="about-copy">
          <p className="lead-copy">
            I build thoughtful digital experiences that bring design,
            technology, and real-world needs together.
          </p>

          <p>
            I&apos;m Samiha Khan, a software developer interested in web
            applications, mobile products, backend services, and business
            software. I enjoy exploring ideas and turning them into
            structured, usable digital experiences.
          </p>

          <p>
            My technical toolkit spans modern frontend development, backend
            technologies, databases, and cross-platform mobile development.
          </p>

          <a className="text-link" href="#projects">
            EXPLORE SELECTED WORK <ArrowRight size={15} />
          </a>
        </div>
      </div>

      <div className="about-stats">
        <div>
          <strong>WEB</strong>
          <span>FRONTEND<br />EXPERIENCES</span>
        </div>
        <div>
          <strong>APP</strong>
          <span>MOBILE<br />DEVELOPMENT</span>
        </div>
        <div>
          <strong>API</strong>
          <span>BACKEND &<br />DATA SYSTEMS</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="section-kicker dark-kicker">
        <span>02 / WHAT I DO</span>
        <span>CAPABILITIES</span>
      </div>

      <div className="services-heading">
        <h2>
          BUILT FOR
          <br />
          <span>WHAT&apos;S NEXT.</span>
        </h2>
        <p>
          Practical development skills for building useful, responsive, and
          well-organized digital products.
        </p>
      </div>

      <div className="service-list">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article className="service-row" key={service.number}>
              <span className="service-num">{service.number}</span>
              <span className="service-icon">
                <Icon />
              </span>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <ArrowUpRight className="service-arrow" size={20} />
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  React.useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project description"
        >
          <X size={20} />
        </button>

        <h3 id="project-modal-title">{project.title}</h3>
        <p>{project.description}</p>
      </section>
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects section-pad" id="projects">
      <div className="section-kicker">
        <span>03 / SELECTED WORK</span>
        <span>PROJECT ARCHIVE</span>
      </div>

      <div className="projects-title">
        <h2>
          SELECTED
          <br />
          <span>WORK.</span>
        </h2>
        <p>
          A selection of projects across web development, mobile applications,
          and business software. Select a card to read its description.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <button
            className="project-card"
            type="button"
            key={project.title}
            onClick={() => setSelectedProject(project)}
            aria-label={`Read about ${project.title}`}
            style={{
              width: "100%",
              padding: 0,
              color: "inherit",
              textAlign: "left",
              cursor: "pointer",
              font: "inherit",
            }}
          >
            <div className={`project-art ${project.theme}`}>
              <div className="art-top">
                <span>SK / DIGITAL STUDIO</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="art-shape shape-a" />
              <div className="art-shape shape-b" />

              <div className="art-lines">
                <i />
                <i />
                <i />
              </div>

              <div className="art-wordmark">{project.wordmark}</div>

              <div className="art-bottom">
                <span>SELECTED PROJECT</span>
                <span>OPEN DESCRIPTION ↗</span>
              </div>
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span>{project.category}</span>
                <span className="project-index">
                  {String(index + 1).padStart(2, "0")} / 08
                </span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-footer">
                <div className="tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <span className="project-link" aria-hidden="true">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <p className="project-disclaimer">
        PROJECT DESCRIPTIONS REPRESENT PORTFOLIO PROJECT CONCEPTS.
      </p>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section section-pad" id="experience">
      <div className="section-kicker">
        <span>04 / EXPERIENCE</span>
        <span>LEARNING THROUGH BUILDING</span>
      </div>

      <div className="experience-card">
        <div>
          <span className="experience-label">PROFESSIONAL EXPERIENCE</span>
          <h2>
            LEARN.
            <br />
            BUILD.
            <br />
            <span>EVOLVE.</span>
          </h2>
        </div>

        <div className="experience-detail">
          <span className="experience-label">INTERNSHIP</span>
          <h3>Flutter Developer</h3>
          <p>
            <strong>SoftSmart Labs</strong>
          </p>
          <p>
            Practical exposure to Flutter mobile application development,
            interface implementation, and application development workflows.
          </p>

          <div className="tags">
            <span>Flutter</span>
            <span>Dart</span>
            <span>Mobile UI</span>
          </div>

          <p className="experience-note">
            EDUCATION · ADP SOFTWARE ENGINEERING, APTECH KARACHI
          </p>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="stack-section section-pad" id="stack">
      <div className="section-kicker">
        <span>05 / TECHNICAL TOOLKIT</span>
        <span>TOOLS & TECHNOLOGIES</span>
      </div>

      <div className="stack-layout">
        <h2>
          MY TECH
          <br />
          <span>STACK.</span>
        </h2>

        <div className="stack-copy">
          <p>
            Technologies I use across frontend, backend, database, and mobile
            application development.
          </p>

          <div className="stack-pills">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (sending) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email service is not configured. Please email me directly.",
      });
      return;
    }

    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          projectType: form.projectType,
          budget: form.budget,
          message: form.message,
        },
        { publicKey }
      );

      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });

      setForm({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: "Message could not be sent. Please email me directly.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact section-pad" id="contact">
      <div className="contact-orb" />

      <div className="section-kicker">
        <span>06 / GET IN TOUCH</span>
        <span>LET&apos;S CREATE SOMETHING</span>
      </div>

      <div className="contact-content">
        <p className="eyebrow">HAVE AN IDEA?</p>

        <h2>
          LET&apos;S
          <br />
          BUILD <span>IT.</span>
        </h2>

        <p className="contact-desc">
          Have a website, mobile app, or software project in mind? Share a
          little about your idea and let&apos;s discuss the possibilities.
        </p>

        <a className="text-link" href="mailto:samihakhan569@gmail.com">
          <Mail size={15} />
          SAMIHAKHAN569@GMAIL.COM
          <ArrowUpRight size={15} />
        </a>

        <form className="inquiry-form" onSubmit={submitForm}>
          <label htmlFor="contact-name">YOUR NAME</label>
          <input
            id="contact-name"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={updateForm}
            autoComplete="name"
            required
          />

          <label htmlFor="contact-email">EMAIL ADDRESS</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={updateForm}
            autoComplete="email"
            required
          />

          <label htmlFor="contact-project">PROJECT TYPE</label>
          <select
            id="contact-project"
            name="projectType"
            value={form.projectType}
            onChange={updateForm}
            required
          >
            <option value="" disabled>
              Select a project type
            </option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile Application">Mobile Application</option>
            <option value="Backend and API">Backend & API</option>
            <option value="Business Software">Business Software</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="contact-budget">ESTIMATED BUDGET</label>
          <select
            id="contact-budget"
            name="budget"
            value={form.budget}
            onChange={updateForm}
          >
            <option value="" disabled>
              Select a budget range
            </option>
            <option value="Not decided">Not decided</option>
            <option value="Under PKR 25000">Under PKR 25,000</option>
            <option value="PKR 25000-50000">PKR 25,000–50,000</option>
            <option value="PKR 50000-100000">PKR 50,000–100,000</option>
            <option value="Above PKR 100000">Above PKR 100,000</option>
          </select>

          <label htmlFor="contact-message">YOUR MESSAGE</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Tell me a little about your idea..."
            value={form.message}
            onChange={updateForm}
            required
          />

          <button className="contact-button" type="submit" disabled={sending}>
            {sending ? "SENDING..." : "SEND YOUR MESSAGE"}
            <ArrowUpRight size={16} />
          </button>

          {status.message && (
            <p
              className={`form-status ${status.type}`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          )}

          <p className="form-note">
            Your details will be used to respond to your inquiry.
          </p>
        </form>
      </div>

      <div className="contact-bottom">
        <span>HAVE A GREAT IDEA? LET&apos;S TALK.</span>

        <div className="socials">
          <a
            href="https://github.com/Samiha-png"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/samiha-khan-b606a12ba"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin />
          </a>
          <a href="mailto:samihakhan569@gmail.com" aria-label="Send email">
            <Mail />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#home">
        <span className="brand-mark">
          S<span>K</span>.
        </span>
        <span className="brand-name">SAMIHA KHAN</span>
      </a>

      <span>© {new Date().getFullYear()} SAMIHA KHAN. BUILT WITH PURPOSE.</span>

      <a className="back-top" href="#home">
        BACK TO TOP <ArrowUpRight size={13} />
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
