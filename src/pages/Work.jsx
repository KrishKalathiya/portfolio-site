import Experience from '../components/Experience';

function Work() {
  return (
    <>
      <section className="page-header-section">
        <h1 className="big-heading">Work Experience</h1>
        <p className="page-subtitle">My professional journey and employment history</p>
      </section>

      <section className="full-experience-section">
        <Experience />
      </section>
    </>
  );
}

export default Work;
