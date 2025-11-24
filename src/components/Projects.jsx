function Projects({ limit = null, showOthers = true }) {
  const featuredProjects = [
    {
      title: 'Task Management App',
      description: 'A web application that helps users manage their tasks and boost productivity. Features include drag-and-drop task organization, collaborative workspaces, and real-time synchronization across devices.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: '#',
      external: '#',
      image: 'project1'
    },
    {
      title: 'E-Commerce Platform',
      description: 'An e-commerce platform with modern shopping cart functionality, secure payment processing, and inventory management. Built with scalability and performance in mind.',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      github: '#',
      external: '#',
      image: 'project2'
    }
  ];

  const otherProjects = [
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current conditions and forecasts using OpenWeather API',
      tech: ['JavaScript', 'API', 'Charts.js'],
      github: '#'
    },
    {
      title: 'Code Snippet Manager',
      description: 'A tool for developers to save, organize, and share code snippets with syntax highlighting',
      tech: ['React', 'Firebase', 'Prism'],
      github: '#'
    },
    {
      title: 'Portfolio Template',
      description: 'A clean and modern portfolio template for developers to showcase their work',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: '#'
    },
    {
      title: 'Fitness Tracker',
      description: 'Track workouts, set goals, and monitor progress with this comprehensive fitness application',
      tech: ['Vue.js', 'Express', 'MongoDB'],
      github: '#'
    },
    {
      title: 'Recipe Finder',
      description: 'Discover recipes based on ingredients you have using multiple recipe APIs',
      tech: ['React', 'API Integration', 'CSS Modules'],
      github: '#'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with rooms, direct messaging, and file sharing capabilities',
      tech: ['Socket.io', 'Node.js', 'Redis'],
      github: '#'
    }
  ];

  const displayFeatured = limit ? featuredProjects.slice(0, limit) : featuredProjects;

  const FolderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 60 60">
      <path d="M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"></path>
    </svg>
  );

  const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
      <title>GitHub</title>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );

  const ExternalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
      <title>External Link</title>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );

  return (
    <>
      {/* Featured Projects */}
      <div className="featured-projects-container">
        {displayFeatured.map((project, index) => (
          <div key={index} className={`featured-project ${index % 2 === 1 ? 'reverse' : ''}`}>
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <ul className="project-tech-list">
                  {project.tech.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                  </a>
                  <a href={project.external} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-image">
              <a href={project.external} target="_blank" rel="noopener noreferrer">
                <div className="image-placeholder">
                  <svg viewBox="0 0 700 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="700" height="400" fill="#64ffda" opacity="0.1"/>
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontFamily="Roboto Mono" fontSize="24" fill="#64ffda">
                      Project Screenshot
                    </text>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects Grid */}
      {showOthers && (
        <div className="other-projects">
          <h3 className="other-projects-heading">All Projects</h3>
          <div className="projects-grid">
            {otherProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-card-top">
                  <div className="folder-icon">
                    <FolderIcon />
                  </div>
                  <div className="project-card-links">
                    <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon />
                    </a>
                  </div>
                </div>
                <h4 className="project-card-title">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h4>
                <p className="project-card-description">{project.description}</p>
                <ul className="project-card-tech">
                  {project.tech.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
