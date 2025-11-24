function Development({ limit = null }) {
  const activities = [
    {
      title: 'Tech Speaker & Presenter',
      meta: 'React Conference 2023',
      description: 'Presented on building scalable web applications with modern architecture patterns, discussing state management and performance optimization.'
    },
    {
      title: 'Open Source Contributions',
      meta: 'Ongoing',
      description: 'Active contributor to various open-source projects including React ecosystem tools and accessibility libraries.'
    },
    {
      title: 'Building Scalable Web Applications',
      meta: 'React Conference 2023 • San Francisco, CA',
      description: 'Presented on best practices for building scalable React applications with modern architecture patterns. Discussed state management, code splitting, and performance optimization techniques.'
    },
    {
      title: 'Introduction to Web Accessibility',
      meta: 'Local Tech Meetup • Virtual • 2023',
      description: 'Workshop on implementing WCAG 2.1 guidelines in web applications. Covered semantic HTML, ARIA attributes, keyboard navigation, and screen reader compatibility.'
    },
    {
      title: 'Tech Mentorship Program',
      meta: '2022 - Present',
      description: 'Mentor for aspiring developers through local coding bootcamp. Provide guidance on career development, code reviews, and technical interview preparation.'
    },
    {
      title: 'Hackathon Organizer',
      meta: 'Annual Event • 2021 - Present',
      description: 'Co-organize annual local hackathon bringing together 200+ developers. Coordinate sponsors, judges, and workshops while fostering an inclusive environment for all skill levels.'
    },
    {
      title: 'Tech Blog Writing',
      meta: 'Weekly Posts',
      description: 'Write technical blog posts covering web development tutorials, best practices, and industry trends. Articles have reached over 50,000 developers worldwide.'
    },
    {
      title: 'AWS Certified Solutions Architect',
      meta: 'Amazon Web Services • 2023',
      description: 'Professional certification demonstrating expertise in designing and deploying scalable, highly available systems on AWS.'
    },
    {
      title: 'Professional Scrum Master I',
      meta: 'Scrum.org • 2022',
      description: 'Certification validating knowledge of Scrum framework and ability to apply it effectively in real-world scenarios.'
    },
    {
      title: 'Advanced React Patterns',
      meta: 'Kent C. Dodds • 2023',
      description: 'Deep dive into advanced React patterns including compound components, render props, hooks patterns, and state management.'
    },
    {
      title: 'Code for Good Initiative',
      meta: '2021 - Present',
      description: 'Volunteer developer for non-profit organizations. Built and maintained websites and web applications for local charities and community organizations.'
    },
    {
      title: 'Girls Who Code Workshop Leader',
      meta: '2022 - Present',
      description: 'Lead coding workshops for middle school girls, introducing them to web development and inspiring the next generation of female developers.'
    }
  ];

  const displayActivities = limit ? activities.slice(0, limit) : activities;

  return (
    <div className="development-grid">
      {displayActivities.map((activity, index) => (
        <div key={index} className="development-card">
          <h3>{activity.title}</h3>
          <p className="development-meta">{activity.meta}</p>
          <p className="development-description">{activity.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Development;
