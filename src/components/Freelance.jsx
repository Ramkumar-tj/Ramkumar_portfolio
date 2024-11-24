import React from 'react';

const Freelance = () => {
  const projects = [
    { title: 'E-Commerce Website', description: 'Developed a fully responsive online store for a local business.' },
    { title: 'Portfolio Website', description: 'Built a portfolio website for a graphic designer.' },
    { title: 'Business Dashboard', description: 'Created a dashboard for tracking business performance.' },
  ];

  return (
    <section className="page">
      <div className="container">
        <h2 className="heading">Freelance Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Freelance;
