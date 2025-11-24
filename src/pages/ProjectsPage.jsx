import Projects from '../components/Projects';

function ProjectsPage() {
  return (
    <>
      <section className="page-header-section">
        <h1 className="big-heading">Technical Projects</h1>
        <p className="page-subtitle">A collection of my development work and side projects</p>
      </section>

      <section className="projects-section">
        <Projects showOthers={true} />
      </section>
    </>
  );
}

export default ProjectsPage;
