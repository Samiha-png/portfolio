
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
    id: "ai-study",
    title: "AI Study Web App",
    category: "01 / AI & EDUCATION",
    status: "Concept brief",
    description:
      "A study platform concept focused on organizing digital learning and technology-assisted study workflows.",
    theme: "project-lime",
    wordmark: "STUDY AI",
    tech: ["React", "JavaScript", "AI"],
    overview:
      "An AI-focused study platform concept designed to give students a more organized digital learning experience.",
    problem:
      "Students may need a more structured way to organize their digital study activities. The exact user research and problem validation for this project have not yet been documented.",
    solution:
      "The proposed direction is a centralized learning experience with an emphasis on organized study workflows and technology-assisted learning.",
    features: [
      "Digital learning experience",
      "Organized study workflow concept",
      "Technology-assisted study direction",
    ],
    role:
      "Role, individual contributions, and implemented functionality need to be documented from the actual project.",
    challenges:
      "Specific development challenges and how they were resolved have not yet been supplied.",
    screenshots: [],
  },
  {
    id: "hotel-management",
    title: "Luxury Hotel Management",
    category: "02 / MANAGEMENT",
    status: "Concept brief",
    description:
      "A hotel management application concept for organizing guest information, reservations, room availability, and hotel operations.",
    theme: "project-cream",
    wordmark: "LUXE STAY",
    tech: ["Web App", "Dashboard"],
    overview:
      "A hotel management application concept centered on bringing essential hotel information into one digital workspace.",
    problem:
      "Hotel operations can involve multiple types of information, including guests, reservations, and room availability. Project-specific research has not been documented.",
    solution:
      "The proposed solution is a centralized management interface for organizing the main areas of hotel operations.",
    features: [
      "Guest information management as a project focus",
      "Reservation organization as a project focus",
      "Room availability as a project focus",
      "Centralized hotel operations dashboard concept",
    ],
    role:
      "The exact screens, modules, and functionality personally implemented need to be confirmed.",
    challenges:
      "Specific technical challenges and verified resolutions have not yet been documented.",
    screenshots: [],
  },
  {
    id: "online-tutor",
    title: "Online Tutor Platform",
    category: "03 / EDUCATION",
    status: "Concept brief",
    description:
      "An online tutoring platform concept focused on a structured digital learning experience.",
    theme: "project-pink",
    wordmark: "TUTORLY",
    tech: ["Web Development", "UI"],
    overview:
      "A digital tutoring platform concept intended to provide a structured online learning experience for students.",
    problem:
      "Students seeking tutoring may benefit from a clear and organized digital learning experience. Specific user research has not been provided.",
    solution:
      "The proposed direction is an online platform focused on presenting tutoring and educational support in a structured way.",
    features: [
      "Online tutoring experience concept",
      "Student-focused learning interface",
      "Structured educational support direction",
    ],
    role:
      "Personal contributions and completed functionality need to be added based on the actual project.",
    challenges:
      "Project-specific development challenges and learnings have not yet been documented.",
    screenshots: [],
  },
  {
    id: "business-erp",
    title: "Business ERP Dashboard",
    category: "04 / BUSINESS SOFTWARE",
    status: "Concept brief",
    description:
      "A business software concept for organizing operational records and presenting business information through a centralized dashboard.",
    theme: "project-blue",
    wordmark: "CORE ERP",
    tech: ["ERP", "Database"],
    overview:
      "A business dashboard concept focused on presenting operational information in one centralized management workspace.",
    problem:
      "Business information can be spread across different records and workflows. The specific business requirements for this project have not been supplied.",
    solution:
      "The proposed approach is a centralized dashboard for organizing operational records and making business information easier to navigate.",
    features: [
      "Centralized dashboard concept",
      "Operational record organization",
      "Business information overview",
    ],
    role:
      "The actual modules developed, database work completed, and individual contribution need to be confirmed.",
    challenges:
      "Verified technical challenges, data models, and implementation decisions have not yet been documented.",
    screenshots: [],
  },
  {
    id: "she-shield",
    title: "She Shield",
    category: "05 / MOBILE APPLICATION",
    status: "Concept brief",
    description:
      "A women's safety application concept focused on accessible safety-related features and a straightforward mobile experience.",
    theme: "project-pink",
    wordmark: "SHE SHIELD",
    tech: ["Flutter", "Mobile"],
    overview:
      "A mobile application concept centered on presenting safety-related functionality through a straightforward user experience.",
    problem:
      "Safety-related mobile experiences need to make their intended functions understandable and accessible. Project-specific user research has not been supplied.",
    solution:
      "The proposed direction is a focused mobile interface for presenting safety-related features clearly.",
    features: [
      "Safety-focused mobile application concept",
      "Accessible feature presentation",
      "Straightforward mobile user experience",
    ],
    role:
      "Implemented screens, technical integrations, and personal contributions need to be confirmed from the project.",
    challenges:
      "Specific development challenges and verified safety-related functionality have not been documented.",
    screenshots: [],
  },
  {
    id: "rest-api-hub",
    title: "RESTful API Hub",
    category: "06 / BACKEND",
    status: "Concept brief",
    description:
      "A backend development project focused on structured API endpoints, data exchange, and connecting application services.",
    theme: "project-blue",
    wordmark: "API HUB",
    tech: ["REST API", "Backend"],
    overview:
      "A backend project brief focused on API structure and communication between application services.",
    problem:
      "Applications often need a structured way to exchange data and communicate with services. The specific endpoints and requirements for this project have not been provided.",
    solution:
      "The intended direction is to organize API endpoints and data exchange around a clear backend service structure.",
    features: [
      "Structured API endpoint focus",
      "Application data exchange",
      "Backend service integration direction",
    ],
    role:
      "Actual endpoints, authentication methods, database integrations, and testing work need to be confirmed.",
    challenges:
      "Specific API design challenges, security decisions, and test results have not been documented.",
    screenshots: [],
  },
  {
    id: "networking-platform",
    title: "Networking Platform",
    category: "07 / WEB APPLICATION",
    status: "Concept brief",
    description:
      "A networking platform concept designed around digital connections, information sharing, and a streamlined user experience.",
    theme: "project-lime",
    wordmark: "CONNECT",
    tech: ["Web App", "Frontend"],
    overview:
      "A web application concept focused on digital connections and information sharing through a streamlined interface.",
    problem:
      "A networking experience needs a clear way to present connections and shared information. The exact target audience and requirements have not been supplied.",
    solution:
      "The proposed direction is a web interface that organizes connection-related information in a clear and usable way.",
    features: [
      "Digital networking concept",
      "Information-sharing direction",
      "Streamlined web interface",
    ],
    role:
      "The actual pages, workflows, and functionality implemented need to be confirmed.",
    challenges:
      "Project-specific design and development challenges have not yet been documented.",
    screenshots: [],
  },
  {
    id: "business-websites",
    title: "Business Website Concepts",
    category: "08 / WEB DEVELOPMENT",
    status: "Concept collection",
    description:
      "A collection of website concepts exploring responsive layouts, visual identity, content hierarchy, and modern interfaces.",
    theme: "project-cream",
    wordmark: "STUDIO WEB",
    tech: ["React", "CSS", "Responsive"],
    overview:
      "A collection of business website concepts exploring how layout, visual identity, and content structure shape the browsing experience.",
    problem:
      "Businesses need websites that present information clearly across screen sizes. Individual client briefs and requirements have not been supplied.",
    solution:
      "The collection focuses on exploring responsive layout patterns, visual identity, and content hierarchy.",
    features: [
      "Responsive layout exploration",
      "Visual identity concepts",
      "Content hierarchy",
      "Modern website interface concepts",
    ],
    role:
      "The individual websites, completed pages, and specific implementation work should be listed once confirmed.",
    challenges:
      "Specific project challenges and verified outcomes have not yet been documented.",
    screenshots: [],
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
  ["Experience", "#experience"],
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
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      const items = Array.from(focusable);
      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [project, onClose]);

  useEffect(() => {
    if (!project) return;

    // Keep the dialog content at the top when another project is opened.
    dialogRef.current?.scrollTo({ top: 0 });
  }, [project]);

  if (!project) return null;

  const sections = [
    {
      number: "01",
      title: "Project overview",
      content: project.overview,
    },
    {
      number: "02",
      title: "Problem space",
      content: project.problem,
    },
    {
      number: "03",
      title: "Solution approach",
      content: project.solution,
    },
  ];

  return (
    <div
      className="case-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        className="case-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
        tabIndex={-1}
      >
        <div className={`case-hero ${project.theme}`}>
          <div className="case-hero-top">
            <span>SK / PROJECT ARCHIVE</span>
            <span>{project.category}</span>
          </div>

          <button
            ref={closeButtonRef}
            className="case-close"
            type="button"
            onClick={onClose}
            aria-label="Close case study"
          >
            <X size={21} />
          </button>

          <div className="case-hero-content">
            <span className="case-status">{project.status}</span>
            <p className="case-wordmark">{project.wordmark}</p>
            <h2 id="case-title">{project.title}</h2>
            <p>{project.description}</p>
          </div>

          <div className="case-hero-bottom">
            <span>CASE STUDY</span>
            <span>PROJECT {project.id.toUpperCase()}</span>
          </div>
        </div>

        <div className="case-body">
          <div className="case-tech-row">
            <div>
              <span className="case-label">TECHNOLOGY STACK</span>
              <div className="tags case-tags">
                {project.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="case-confidential">
              <Code2 size={17} />
              <span>Source code not published</span>
            </div>
          </div>

          {sections.map((section) => (
            <section className="case-section" key={section.number}>
              <span className="case-section-number">
                {section.number} / CASE STUDY
              </span>
              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </section>
          ))}

          <section className="case-section">
            <span className="case-section-number">04 / SCOPE</span>
            <h3>Key features & project focus</h3>
            <p className="case-muted">
              The following points describe the project brief, not verified
              production features. Update this list to reflect the actual
              implementation.
            </p>

            <ul className="case-feature-list">
              {project.features.map((feature, index) => (
                <li key={feature}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="case-section">
            <span className="case-section-number">05 / CONTRIBUTION</span>
            <h3>My role</h3>
            <p>{project.role}</p>
          </section>

          <section className="case-section">
            <span className="case-section-number">06 / LEARNINGS</span>
            <h3>Challenges & learnings</h3>
            <p>{project.challenges}</p>
          </section>

          <section className="case-section case-screenshots">
            <span className="case-section-number">07 / VISUAL ARCHIVE</span>
            <h3>Project screenshots</h3>
            <p>
              Interface previews will appear here when genuine project
              screenshots are added.
            </p>

            {project.screenshots?.length > 0 ? (
              <div className="case-image-grid">
                {project.screenshots.map((screenshot) => (
                  <figure key={screenshot.src}>
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      loading="lazy"
                    />
                    {screenshot.caption && (
                      <figcaption>{screenshot.caption}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
            ) : (
              <div className="case-screenshot-placeholder">
                <div className="case-placeholder-icon">
                  <Code2 size={27} />
                </div>
                <strong>Project preview coming soon</strong>
                <span>
                  Add real screenshots from this project to display them here.
                </span>
              </div>
            )}
          </section>

          <div className="case-end">
            <span>HAVE A SIMILAR PROJECT?</span>
            <a href="#contact" onClick={onClose}>
              LET&apos;S TALK <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const closeProjectModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const visibleProjects = showAllProjects
    ? projects
    : projects.filter((project) => project.featured);

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
          Explore selected project briefs, technical direction, and
          development ideas. Open a case study to learn more about
          the project&apos;s goals, proposed approach, and scope.
        </p>
      </div>

      <div className="project-list">
        {visibleProjects.map((project) => {
          const originalIndex = projects.findIndex(
            (item) => item.id === project.id
          );

          return (
            <button
              className="project-card"
              type="button"
              key={project.id}
              onClick={() => setSelectedProject(project)}
              aria-label={`Open case study: ${project.title}`}
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
                  <span>
                    {String(originalIndex + 1).padStart(2, "0")}
                  </span>
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
                  <span>PROJECT CASE STUDY</span>
                  <span>EXPLORE ↗</span>
                </div>
              </div>

              <div className="project-info">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span className="project-index">
                    {String(originalIndex + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-footer">
                  <div className="tags">
                    {project.tech.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <span className="project-link" aria-hidden="true">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                <span className="project-case-link">
                  READ CASE STUDY <ArrowUpRight size={14} />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="projects-toggle-wrap">
        <button
          type="button"
          className="projects-toggle"
          onClick={() => setShowAllProjects((show) => !show)}
          aria-expanded={showAllProjects}
        >
          {showAllProjects
            ? "SHOW FEATURED PROJECTS"
            : `VIEW ALL PROJECTS (${projects.length})`}

          <ArrowDownRight
            size={17}
            className={showAllProjects ? "toggle-arrow is-open" : "toggle-arrow"}
          />
        </button>
      </div>

      <p className="project-disclaimer">
        PROJECT BRIEFS ARE PRESENTED FOR PORTFOLIO PURPOSES.
        IMPLEMENTATION DETAILS AND FEATURES SHOULD BE VERIFIED
        AGAINST EACH PROJECT.
      </p>

      <ProjectModal
        project={selectedProject}
        onClose={closeProjectModal}
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

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const updateForm = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email configuration is missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          name: form.name,
          email: form.email,
          project_type: form.projectType,
          projectType: form.projectType,
          budget: form.budget,
          message: form.message,
        },
        { publicKey }
      );

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });

      setForm({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS submission failed:", error);

      setStatus({
        type: "error",
        message:
          "Your message could not be sent. Please try again or email me directly.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-editorial section-pad" id="contact">
      <div className="contact-editorial-kicker">
        <span>08 / CONTACT</span>
        <span>OPEN TO SELECT PROJECTS</span>
      </div>

      <div className="contact-editorial-intro">
        <p className="contact-editorial-eyebrow">
          HAVE SOMETHING IN MIND?
        </p>

        <h2>
          LET'S MAKE
          <br />
          <span>IT WORK.</span>
        </h2>

        <p className="contact-editorial-description">
          Thoughtful ideas deserve thoughtful execution. Tell me
          what you're building, and let's discuss how I can help.
        </p>

        <a
          className="contact-editorial-email"
          href="mailto:samihakhan569@gmail.com"
        >
          <span>Prefer email?</span>
          <span className="contact-editorial-email-address">
            samihakhan569@gmail.com
          </span>
          <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="contact-editorial-divider" />

      <div className="contact-editorial-main">
        <div className="contact-editorial-side">
          <span className="contact-editorial-number">01 — 02</span>

          <h3>
            START A
            <br />
            CONVERSATION.
          </h3>

          <p>
            Share a little about your idea, goals, or the problem
            you want to solve. I'll get back to you about the next
            steps.
          </p>

         
<div className="contact-editorial-socials">
  <a
    href="https://www.linkedin.com/in/samiha-khan-b606a12ba/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn <ArrowUpRight size={14} />
  </a>

  <a
    href="https://github.com/Samiha-png"
    target="_blank"
    rel="noreferrer"
  >
    GitHub <ArrowUpRight size={14} />
  </a>

  <a
    href="https://www.instagram.com/_skaesthetic?utm_source=ig_web_button_share_sheet&obrf=ZDNlZDc0MzIxNw=="
    target="_blank"
    rel="noreferrer"
  >
    Instagram <ArrowUpRight size={14} />
  </a>

  <a
    href="https://contra.com/samiha_khan_8jrb7mla?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=samiha_khan_8jrb7mla"
    target="_blank"
    rel="noreferrer"
  >
    Contra <ArrowUpRight size={14} />
  </a>

</div>

        </div>

        <form
          className="contact-editorial-form"
          onSubmit={handleSubmit}
        >
          <div className="contact-editorial-form-heading">
            <span>02 — PROJECT ENQUIRY</span>
            <span>* REQUIRED FIELDS</span>
          </div>

          <div className="contact-editorial-fields">
            <div className="contact-editorial-field">
              <label htmlFor="contact-name">YOUR NAME *</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Full name"
                value={form.name}
                onChange={updateForm}
                autoComplete="name"
                maxLength={100}
                required
              />
            </div>

            <div className="contact-editorial-field">
              <label htmlFor="contact-email">EMAIL ADDRESS *</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={updateForm}
                autoComplete="email"
                maxLength={254}
                required
              />
            </div>

            <div className="contact-editorial-field">
              <label htmlFor="contact-project-type">
                WHAT ARE YOU BUILDING? *
              </label>

              <select
                id="contact-project-type"
                name="projectType"
                value={form.projectType}
                onChange={updateForm}
                required
              >
                <option value="" disabled>
                  Select project type
                </option>
                <option value="Website Development">
                  Website Development
                </option>
                <option value="Web Application">
                  Web Application
                </option>
                <option value="Mobile Application">
                  Mobile Application
                </option>
                <option value="ERP or Business System">
                  ERP / Business System
                </option>
                <option value="API or Backend">
                  API / Backend
                </option>
                <option value="Other">Something else</option>
              </select>
            </div>

            <div className="contact-editorial-field">
              <label htmlFor="contact-budget">PROJECT SCALE *</label>

              <select
                id="contact-budget"
                name="budget"
                value={form.budget}
                onChange={updateForm}
                required
              >
                <option value="" disabled>
                  Select project scale
                </option>
                <option value="Small Project">
                  Small — landing page or focused feature
                </option>
                <option value="Medium Project">
                  Medium — website or application
                </option>
                <option value="Large Project">
                  Large — multi-module business system
                </option>
                <option value="Enterprise Project">
                  Enterprise — complex solution
                </option>
                <option value="Not decided">Not sure yet</option>
              </select>
            </div>

            <div className="contact-editorial-field contact-editorial-field-full">
              <label htmlFor="contact-message">TELL ME ABOUT IT *</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="What do you want to build? What should it achieve?"
                value={form.message}
                onChange={updateForm}
                rows={4}
                maxLength={5000}
                required
              />
              <span className="contact-editorial-character-count">
                {form.message.length} / 5000
              </span>
            </div>
          </div>

          {status.message && (
            <p
              className={`contact-editorial-status is-${status.type}`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          )}

          <div className="contact-editorial-submit-row">
            <p>Usually best to start with a clear idea and a conversation.</p>

            <button
              type="submit"
              className="contact-editorial-submit"
              disabled={sending}
            >
              <span>
                {sending ? "SENDING..." : "SEND ENQUIRY"}
              </span>
              {!sending && <ArrowUpRight size={17} />}
            </button>
          </div>
        </form>
      </div>

      <div className="contact-editorial-bottom">
        <span>SAMIHA KHAN / FULL-STACK DEVELOPER</span>
        <a href="#home">BACK TO TOP ↑</a>
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
