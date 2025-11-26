import { developmentData } from '../data/content';

function Development({ limit = null }) {
  const activities = developmentData;


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
