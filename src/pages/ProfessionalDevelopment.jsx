import Development from '../components/Development';

function ProfessionalDevelopment() {
  return (
    <>
      <section className="page-header-section">
        <h1 className="big-heading">Professional Development</h1>
        <p className="page-subtitle">Community involvement, speaking, and continuous learning</p>
      </section>

      <section className="development-section">
        <h2 className="numbered-heading">Speaking & Presentations</h2>
        <Development limit={2} />

        <h2 className="numbered-heading">Community Involvement</h2>
        <Development />
      </section>
    </>
  );
}

export default ProfessionalDevelopment;
