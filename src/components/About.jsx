import { aboutData } from '../data/content';
import croppedImage from '../assets/cropped.jpg';

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
              <img src={croppedImage} alt="Krish Kalathiya" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default About;
