import { aboutData } from '../data/content';

function About() {
  const { bio, skills } = aboutData;

  return (
    <section id="about" className="about-section">
      <h2 className="numbered-heading">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <div>
            {bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="about-image">
          <div className="image-wrapper">
            <div className="image-placeholder">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="400" fill="#64ffda" opacity="0.2"/>
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontFamily="Roboto Mono" fontSize="48" fill="#64ffda">
                  Photo
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default About;
