function About() {
  const skills = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'TypeScript',
    'Python',
    'Next.js'
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="numbered-heading">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <div>
            <p>
              Hello! I'm a passionate developer who enjoys creating things
              that live on the internet. My interest in web development
              started when I discovered the power of building interactive
              experiences that can reach millions of people worldwide.
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working
              on various projects ranging from small business websites to
              large-scale web applications. My main focus these days is
              building accessible, performant applications with great user
              experiences.
            </p>
            <p>
              I also have experience with modern frameworks and tools that
              help bring ideas to life efficiently and elegantly.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
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
                  Your Photo
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
