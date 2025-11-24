import { useState } from 'react';

function Experience({ limit = null }) {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      id: 'job1',
      company: 'Company 1',
      title: 'Software Engineer',
      url: '#',
      range: 'January 2022 - Present',
      duties: [
        'Developed and maintained web applications using modern JavaScript frameworks',
        'Collaborated with designers and product managers to implement new features',
        'Optimized application performance resulting in 40% faster load times',
        'Mentored junior developers and conducted code reviews',
        'Led migration from legacy codebase to React-based architecture',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      id: 'job2',
      company: 'Company 2',
      title: 'Frontend Developer',
      url: '#',
      range: 'June 2020 - December 2021',
      duties: [
        'Built responsive user interfaces for web and mobile applications',
        'Implemented accessibility features following WCAG guidelines',
        'Worked closely with UX team to create seamless user experiences',
        'Integrated third-party APIs and services',
        'Developed reusable component library used across multiple projects',
        'Participated in agile ceremonies and sprint planning'
      ]
    },
    {
      id: 'job3',
      company: 'Company 3',
      title: 'Web Developer Intern',
      url: '#',
      range: 'Summer 2020',
      duties: [
        'Assisted in developing features for company website',
        'Participated in daily stand-ups and sprint planning',
        'Learned industry best practices and modern development workflows',
        'Contributed to documentation and knowledge base',
        'Fixed bugs and improved website performance'
      ]
    },
    {
      id: 'job4',
      company: 'Company 4',
      title: 'Junior Developer',
      url: '#',
      range: 'January 2019 - May 2020',
      duties: [
        'Developed landing pages and marketing websites',
        'Worked with WordPress and custom CMS solutions',
        'Collaborated with design team on UI/UX improvements',
        'Optimized websites for SEO and performance',
        'Maintained client websites and provided technical support'
      ]
    },
    {
      id: 'job5',
      company: 'Self-Employed',
      title: 'Freelance Web Developer',
      url: '#',
      range: '2018 - 2019',
      duties: [
        'Built custom websites for small businesses and startups',
        'Managed client relationships and project timelines',
        'Provided ongoing maintenance and support',
        'Learned various web technologies and frameworks',
        'Developed strong communication and time management skills'
      ]
    }
  ];

  const displayJobs = limit ? jobs.slice(0, limit) : jobs;

  return (
    <div className="jobs-container">
      <div className="job-tabs">
        {displayJobs.map((job, index) => (
          <button
            key={job.id}
            className={`job-tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
            data-tab={job.id}
          >
            {job.company}
          </button>
        ))}
      </div>
      <div className="job-panels">
        {displayJobs.map((job, index) => (
          <div
            key={job.id}
            className={`job-panel ${activeTab === index ? 'active' : ''}`}
            id={job.id}
          >
            <h3>
              <span>{job.title}</span>
              <span className="company">
                {' '}@ <a href={job.url} target="_blank" rel="noopener noreferrer">{job.company}</a>
              </span>
            </h3>
            <p className="job-range">{job.range}</p>
            <div className="job-description">
              <ul>
                {job.duties.map((duty, dutyIndex) => (
                  <li key={dutyIndex}>{duty}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
