const Projects = () => {
    const projects = [
      {
        title: 'TestServ Website',
        description: 'Maintained and enhanced the main website (testserv.ai) with responsive designs and API integrations.',
      },
      {
        title: 'TestServ Application',
        description: 'Developed and maintained the core product (login.testserv.ai) focusing on responsiveness and performance optimization.',
      },
    ];
  
    return (
      <section id="projects" className="page">
        <div className="container">
          <h2 className="heading">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
  
  export default Projects;
  