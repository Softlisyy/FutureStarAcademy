import React from 'react';
import Navbar from '../components/Navbar';
import './AboutUs.css';
import useScrollToTop from '../hooks/useScrollToTop';

const AboutUs = () => {
  const [selectedCard, setSelectedCard] = React.useState(null);
  
  // Use the custom hook to scroll to top
  useScrollToTop();
  const extraContents = {
    'Our Mission': (
      <div className="card-extra-details">
        <h3>More About Our Mission</h3>
        <p>
          We strive to foster a love for learning and personal growth in every student. Our programs are designed to challenge and support students at every stage, ensuring they develop the skills and values needed for success in life.
        </p>
      </div>
    ),
    'Our Vision': (
      <div className="card-extra-details">
        <h3>More About Our Vision</h3>
        <p>
          Our vision is to create a community of learners who are prepared to lead and innovate in a rapidly changing world. We emphasize global citizenship, creativity, and responsibility in all our activities.
        </p>
      </div>
    )
  };
  return (
    <>
      
        <Navbar />
      
      <div className="mainbody">
        <div className="content-section">
          <h2>Our Story</h2>
          <p>
            Future Stars Academy was founded with a vision to provide quality education 
            that nurtures not just academic excellence but also character development. 
            Since our inception, we have been committed to creating an environment where 
            every child can discover their potential and shine like a star.
          </p>
          <div className="about-sections">
            { [
              {
                title: 'Our Mission',
                description: 'We nurture curiosity, build character, and inspire every student to reach their full potential in a safe, inclusive, and supportive environment.',
                icon: '🎯'
              },
              {
                title: 'Our Vision',
                description: 'We aim to be a leading institution recognized for developing compassionate, innovative, and globally-minded individuals who make a positive impact.',
                icon: '🌟'
              },
              {
                title: 'Our Values',
                description: 'We uphold excellence, integrity, respect, innovation, and collaboration in every aspect of our school community.',
                
                icon: '💎'
              },
              {
                title: 'Our Faculty',
                description: 'Our faculty is dedicated to guiding, mentoring, and inspiring students to achieve academic and personal success through passionate teaching.',
                icon: '👨‍🏫'
              },
              {
                title: 'Our Facilities',
                description: 'Our campus features state-of-the-art classrooms, labs, library, sports facilities, and technology resources for a comprehensive learning experience.',
                icon: '🏫'
              },
              {
                title: 'Our Achievements',
                description: 'We celebrate excellence in academics, sports, arts, and community service. Our students consistently achieve remarkable results and make us proud.',
                icon: '🏆'
              }
            ].map((card, idx) => (
              <div className="about-card" key={idx}>
                <div className="about-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                {card.values && (
                  <ul className="about-values-list">
                    {card.values.map((value, i) => (
                      <li key={i}>{value}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        {selectedCard && extraContents[selectedCard] && (
          <div className="about-extra-content">
            {extraContents[selectedCard]}
            <button className="close-extra-btn" onClick={() => setSelectedCard(null)}>Close</button>
          </div>
        )}
      </div>
    </>
  );
};

export default AboutUs;
