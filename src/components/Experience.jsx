import React, { useState, useEffect } from "react";
import "animate.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaBootstrap, FaJira, FaDatabase, FaGithub } from 'react-icons/fa';
import t_app from '../static/images/t_app.png';
import t_website from '../static/images/t_website.png'
import covid from '../static/images/covid.png';

const Experience = () => {
  const [animate, setAnimate] = useState(false);
  const [activeSection, setActiveSection] = useState("about"); // default to 'about' to highlight it initially

  useEffect(() => {
    setAnimate(true);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 150; // Add 150 for better detection

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(id); // Set active section when it's in view
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id); // Set active section on click
    const section = document.querySelector(`#${id}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const experiences = [
    {
      duration: "OCT 2023 – PRESENT",
      role: "UI Developer",
      company: "iFocus Systec",
      responsibilities: [
        "Created responsive and accessible designs for mobile, tablet, and desktop views based on Figma designs provided by UI/UX designers.",
        "Collaborated with back-end developers, UI/UX designers, and other team members to translate design requirements into functional components.",
        "Ensured responsive, modular, maintainable, and performant code to deliver seamless user experiences.",
        "Tracked all UI-specific tasks and bugs using JIRA for both the application and website.",
      ],
      skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind", "JavaScript", "React"],
    },
    {
      duration: "FEB 2023 - SEP 2023",
      role: "Web Developer",
      company: "Freelance",
      responsibilities: [
        "Collaborated with clients to understand their requirements and deliver customized web solutions within deadlines.",
        "Optimized websites for performance, SEO, and accessibility to enhance user experience and visibility.",
        "Handled full project lifecycles from concept to deployment, ensuring client satisfaction with final results.",
      ],
      skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind"],
    },
    {
      duration: "AUG 2022 – JAN 2023",
      role: "Teaching Assistant",
      company: "NxtWave",
      responsibilities: [
        "Assisted fellow students by resolving their queries and clarifying concepts.",
        "Fostered a collaborative learning environment to enhance peer understanding of key topics.",
        "Provided guidance to ensure academic progress and improve problem-solving skills.",
      ],
      skills: ["HTML5", "CSS3", "Bootstrap", "Python"],
    },
  ];

  const projects = [
    {
      name: "TestServ - Website",
      description: "Developed the front-end for TestServ's website, focusing on a seamless and responsive design to enhance user experience across devices.",
      link: "https://testserv.ai/",
      image: t_website, 
      skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      name: "TestServ - Application",
      description: "Built the application interface for TestServ, emphasizing usability, accessibility, and compatibility with multiple devices.",
      link: "https://login.testserv.ai/",
      image: t_app, 
      skills: ["JavaScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "GitHub"],
    },
    {
      name: "Covid19 - Dashboard",
      description: "This is a COVID-19 tracker for India, providing real-time data on confirmed, active, recovered, and deceased cases across states/UTs. It features a search bar, a detailed table with state-wise statistics, and a dark-themed, user-friendly interface. The navigation bar includes links for additional resources like vaccination details.",
      link: "https://kalpanacovid19.ccbp.tech/",
      image: covid, 
      skills: ["React", "Bootstrap", "HTML5", "CSS3"],
    },
  ];

  const skills = [
    { name: "HTML5", description: "Structuring content and layout for the web.", icon: <FaHtml5 /> },
    { name: "CSS3", description: "Styling web pages and creating layouts using modern techniques.", icon: <FaCss3Alt /> },
    { name: "JavaScript", description: "Bringing interactivity and dynamic functionality to websites.", icon: <FaJs /> },
    { name: "React.js", description: "Building reusable UI components and managing state for scalable applications.", icon: <FaReact /> },
    { name: "Tailwind CSS", description: "A utility-first CSS framework to design fast and responsive user interfaces.", icon: <FaCss3Alt /> }, // No specific Tailwind icon in Fa, using CSS
    { name: "Bootstrap", description: "Responsive design framework for quickly building mobile-first websites.", icon: <FaBootstrap /> },
    { name: "Python", description: "Scripting for automation, data analysis, and backend services.", icon: <FaPython /> },
    { name: "SQLite", description: "Basic knowledge of relational database management and querying.", icon: <FaDatabase />  },
    { name: "GitHub", description: "Version control using GitHub for source code management and collaboration.", icon: <FaGithub />  },
    { name: "JIRA", description: "Task management tool for tracking development progress and issues.", icon: <FaJira /> },
  ];

  return (
    <div className="page flex flex-col lg:flex-row gap-10 scroll-smooth mx-auto sm:mt-10 md:mt-0 px-2 sm:py-12 md:px-12 md:py-20 lg:px-16 lg:py-0">
      <div className="w-auto lg:w-1/2">
        {/* My Info */}
        <section className={`section-container bg-transparent ${animate ? "animate__animated animate__fadeInUp" : ""}`}>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <a href="/">Kalpana</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              UI Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                {[
                  { id: "about", label: "About" },
                  { id: "experience", label: "Experience" },
                  { id: "projects", label: "Projects" },
                  { id: "skills", label: "Skills" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      onClick={() => handleNavClick(item.id)}
                      className={`group flex items-center py-3 cursor-pointer ${
                        activeSection === item.id
                          ? "text-slate-200 font-bold"
                          : "text-slate-500 font-bold"
                      }`}
                    >
                      <span
                        className={`nav-indicator mr-4 h-px ${
                          activeSection === item.id
                            ? "bg-slate-200 w-16"
                            : "bg-slate-600 w-8"
                        } transition-all group-hover:w-16 group-hover:bg-slate-200`}
                      ></span>
                      <span className="nav-text text-xs uppercase tracking-widest">
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* Contact Section */}
        <section className={`section-container bg-transparent ${animate ? "animate__animated animate__fadeInUp" : ""}`}>
          <h2 className="section-title">Let’s Build Something Amazing Together</h2>
          <p className="section-subtitle mb-6">
            Have a project or an idea? Let’s collaborate to create meaningful digital experiences.
          </p>
          <a href="mailto:poonamallik13@gmail.com" className="btn">
            Get in Touch
          </a>
        </section>
      </div>

      <div className="scrollbar lg:max-h-[80vh] lg:overflow-y-auto">
        {/* About Me Section */}
        <section
          className={`section-container mb-6 bg-transparent ${animate ? "animate__animated animate__fadeInUp" : ""}`}
          id="about"
        >
          <h2 className="section-title">About</h2>
          <div>
            <p className="paragraph text-justify">
              I am a UI Developer with over 2 years of experience specializing in crafting responsive, accessible, and user-friendly web interfaces. My expertise includes working with technologies like <strong>React.js</strong>, <strong>JavaScript</strong>, and <strong>Tailwind CSS</strong>.
            </p>
            <p className="paragraph text-justify mt-4">
              I have contributed to projects as a <strong>UI Developer at iFocus Systec India PVT LTD</strong>, where I focused on building responsive and accessible designs across devices. Additionally, I have worked as a <strong>Freelance Web Developer</strong>, delivering custom web solutions to clients in various sectors. In my work, I prioritize accessibility, performance optimization, and building reusable UI components to ensure consistency and maintainability across applications.
            </p>
            <p className="paragraph text-justify mt-4">
              I am passionate about creating seamless user experiences and enjoy collaborating with designers and developers to bring ideas to life.
            </p>
          </div>
        </section>


        {/* Experience Section */}
        <section
      className={`section-container mb-6 bg-transparent ${
        animate ? "animate__animated animate__fadeInUp" : ""
      }`}
      id="experience"
    >
      <h2 className="section-title">Experience</h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="card-2 group transition-shadow duration-300 ease-in-out"
          >
            <div className="w-full sm:grid sm:grid-cols-3">

                <p className="paragraph text-sm col-span-1">{experience.duration}</p>
              
              <div className="-mt-0.5 col-span-2">
                <h3 className="subheading">{`${experience.role} . ${experience.company}`}</h3>
                <ul className="space-y-3 pt-2 text-justify max-w-[90%]">
                  {experience.responsibilities.map((task, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span>- </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 ms-2 mt-4">
                  {experience.skills.map((skill, idx) => (
                    <p key={idx} className="badge">
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Projects Section */}
      <section
          className={`section-container mb-6 bg-transparent ${animate ? "animate__animated animate__fadeInUp" : ""}`}
          id="projects"
        >
          <h2 className="section-title">Projects</h2>

          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block card-2 group transition-transform duration-500 ease-out mt-6 hover:scale-105"
              >
              <div className="sm:flex items-start gap-6">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-32 h-auto object-contain rounded"
                />

                {/* Project Info */}
                <div>
                  <h3 className="subheading flex items-center gap-2">
                    {project.name}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-slate-300 group-hover:text-teal-300 text-xs" />
                  </h3>
                  <p className="paragraph text-sm max-w-[90%] text-justify">{project.description}</p>

                  {/* Skills Badges */}
                  <ul className="flex flex-wrap gap-2 pt-4">
                    {project.skills.map((skill, idx) => (
                      <li key={idx} className="badge flex items-center gap-1">
                        <span className="text-xs">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* Skills Section */}
        <section
          className={`section-container mb-6 bg-transparent ${animate ? "animate__animated animate__fadeInUp" : ""}`}
          id="skills"
        >
          <h2 className="section-title">Technical Skills</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`card hover:scale-100 transition duration-300 ease-in-out group p-4 rounded-lg`}
              >
                {/* Skill Icon */}
                <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="subheading text-xl group-hover:text-teal-300">{skill.name}</h3>
                  <p className="paragraph">{skill.description}</p>
                </div>

                  <span className="text-4xl text-teal-500 group-hover:text-teal-300">
                    {skill.icon}
                  </span>
                
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
