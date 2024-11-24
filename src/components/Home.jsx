import React from 'react';
import { FaLinkedin, FaRegFileAlt, FaEnvelope, FaSuitcase } from 'react-icons/fa';

const links = [
  {
    href: 'mailto:poonamallik13@gmail.com',
    icon: <FaEnvelope className="text-xl" />,
    text: 'Email',
    delay: 2.0,
  },
  {
    href: 'https://www.linkedin.com/in/kalpana7/',
    icon: <FaLinkedin className="text-xl" />,
    text: 'LinkedIn',
    delay: 2.2,
  },
  {
    href: 'https://www.naukri.com/mnjuser/profile',
    icon: <FaSuitcase className="text-xl" />,
    text: 'Naukri',
    delay: 2.4,
  },
  {
    href: '/resume',
    icon: <FaRegFileAlt className="text-xl" />,
    text: 'Resume',
    delay: 2.6,
  },
];

const Home = () => (
  <section className="home-page text-center flex items-center justify-center">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Main Heading */}
        <h1
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 opacity-0 translate-y-10"
          style={{
            animation: `fadeInUp 0.5s ease-out 1s forwards`,
          }}
        >
          Hello, I'm Kalpana
        </h1>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 font-light text-white opacity-0 translate-y-10"
          style={{
            animation: `fadeInUp 0.5s ease-out 1.2s forwards`,
          }}
        >
          A skilled UI Developer and Freelancer with over 2.3+ years of experience in delivering high-quality, user-focused web applications.
        </p>

        {/* Description */}
        <p
          className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 font-light text-white opacity-0 translate-y-10"
          style={{
            animation: `fadeInUp 0.5s ease-out 1.4s forwards`,
          }}
        >
          Expert in designing and developing responsive, scalable, and intuitive user interfaces with React.js, JavaScript, and Tailwind CSS to create exceptional digital experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center space-y-4 lg:space-y-0 lg:space-x-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : '_self'}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="btn max-lg:w-full opacity-0 translate-y-10"
              style={{
                animation: `fadeInUp 0.5s ease-out ${link.delay}s forwards`,
              }}
            >
              {link.icon}
              <span>{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Footer Tagline */}
    <div
      className="absolute bottom-5 left-0 right-0 text-center text-white opacity-0 translate-y-10"
      style={{
        animation: `fadeInUp 0.5s ease-out 3.0s forwards`,
      }}
    >
      <p className="text-xs sm:text-sm md:text-base">
        Bringing seamless user experiences with React, JavaScript, and Tailwind CSS
      </p>
    </div>
  </section>
);

export default Home;
