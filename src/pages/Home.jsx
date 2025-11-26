import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Development from '../components/Development';

function Home() {
  return (
    <>
      <Hero />
      
      <About />

      {/* Projects Preview - Top 2 */}
      <section id="projects" className="projects-section">
        <h2 className="numbered-heading">Some Things I've Built</h2>
        <Projects limit={2} showOthers={false} />
        <Link to="/projects" className="view-all-link">View All Projects</Link>
      </section>

      {/* Work Preview - Top 2 */}
      <section id="work" className="experience-section">
        <h2 className="numbered-heading">Where I've Worked</h2>
        <Experience limit={2} />
        <Link to="/work" className="view-all-link">View Full Work History</Link>
      </section>

      {/* Professional Development Preview */}
      <section className="development-preview-section">
        <h2 className="numbered-heading">Professional Development</h2>
        <Development limit={2} />
        <Link to="/professional-development" className="view-all-link">View All Activities</Link>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="numbered-heading overline">What's Next?</h2>
        <h2 className="title">Get In Touch</h2>
        <p>
          I'm currently looking for new opportunities and my inbox is always
          open. Whether you have a question or just want to say hi, I'll try
          my best to get back to you!
        </p>
        <a href="mailto:your.email@example.com" className="email-link">Say Hello</a>
      </section>
    </>
  );
}

export default Home;
