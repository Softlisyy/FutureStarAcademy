import React from 'react';
import Navbar from '../components/Navbar';
import './CardDetail.css';
import useScrollToTop from '../hooks/useScrollToTop';

const Facilities = () => {
  useScrollToTop();

  return (
    <div className="card-detail-page">
      <Navbar />
      <div className="card-detail-content">
        <h2>Our Facilities</h2>
        <p>
          We provide modern classrooms, well-equipped laboratories, library, sports facilities, and technology resources to support comprehensive learning.
        </p>
        <p>
          Discover our facilities and resources that support a comprehensive learning experience.
        </p>
      </div>
    </div>
  );
};

export default Facilities;
