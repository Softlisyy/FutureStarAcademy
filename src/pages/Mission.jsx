import React from 'react';
import './CardDetail.css';

const Mission = () => (
  <div className="mission-page card-detail-page">
    <div className="mission-header">
      <span className="mission-icon" role="img" aria-label="target">🎯</span>
      <h2>Our Mission</h2>
    </div>
    <div className="mission-content">
      <p className="mission-lead">
        Empowering students to become lifelong learners and responsible citizens.
      </p>
      <div className="mission-points">
        <div className="mission-point">
          <span className="point-icon" role="img" aria-label="growth">🌱</span>
          <div>
            <strong>Personal Growth:</strong> We nurture curiosity and build character in every student.
          </div>
        </div>
        <div className="mission-point">
          <span className="point-icon" role="img" aria-label="support">🤝</span>
          <div>
            <strong>Supportive Environment:</strong> Our school is safe, inclusive, and supportive for all.
          </div>
        </div>
        <div className="mission-point">
          <span className="point-icon" role="img" aria-label="learning">📚</span>
          <div>
            <strong>Lifelong Learning:</strong> We inspire every student to reach their full potential.
          </div>
        </div>
      </div>
      <div className="mission-cta">
        <a href="/admissions" className="mission-btn">Join Us &rarr;</a>
      </div>
    </div>
  </div>
);

export default Mission;
