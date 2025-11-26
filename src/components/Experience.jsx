import { useState } from 'react';
import { experienceData } from '../data/content';

function Experience({ limit = null }) {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = experienceData;

  const displayJobs = limit ? jobs.slice(0, limit) : jobs;

  return (
    <div className="jobs-container">
      <div className="job-tabs">
        {displayJobs.map((job, index) => (
          <button
            key={index}
            className={`job-tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {job.company}
          </button>
        ))}
      </div>
      <div className="job-panels">
        {displayJobs.map((job, index) => (
          <div
            key={index}
            className={`job-panel ${activeTab === index ? 'active' : ''}`}
          >
            {job.roles.map((role) => (
              <div key={role.id} className="job-role-container" style={{ marginBottom: '30px' }}>
                <h3>
                  <span>{role.title}</span>
                  <span className="company">
                    {' '}@ <a href={job.url} target="_blank" rel="noopener noreferrer">{job.company}</a>
                  </span>
                </h3>
                <p className="job-range">{role.range}</p>
                <div className="job-description">
                  <ul>
                    {role.duties.map((duty, dutyIndex) => (
                      <li key={dutyIndex}>{duty}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}


export default Experience;
