import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="skills" className="section bg-gray-50 py-12">
      <div className="container">
        <h2 className="heading text-3xl font-semibold text-center mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { name: 'HTML5', color: 'text-red-500', description: 'The latest version of HTML for structuring content on the web.' },
            { name: 'CSS3', color: 'text-yellow-500', description: 'A style sheet language to control layout and appearance of web pages.' },
            { name: 'Bootstrap', color: 'text-sky-500', description: 'A popular CSS framework for building responsive and mobile-first web applications.' },
            { name: 'Tailwind CSS', color: 'text-green-500', description: 'A utility-first CSS framework for rapid UI development.' },
            { name: 'JavaScript', color: 'text-purple-500', description: 'A versatile programming language for building interactive web applications.' },
            { name: 'React.js', color: 'text-blue-500', description: 'A JavaScript library for building user interfaces.' },
            { name: 'SQLite', color: 'text-indigo-500', description: 'A lightweight, serverless SQL database engine.' },
            { name: 'Git', color: 'text-teal-500', description: 'A distributed version control system for collaboration.' },
          ].map((skill, index) => (
            <div
              key={index}
              style={{
                transitionDelay: `${index * 100}ms`, // Dynamically set the delay based on the index
              }}
              className={`skill-card p-6 bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } transition-all duration-500`}
            >
              <h3 className={`text-2xl font-semibold ${skill.color} mb-4`}>{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
