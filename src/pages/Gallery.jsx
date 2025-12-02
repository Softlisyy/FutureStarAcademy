import React from 'react';
import Navbar from '../components/Navbar';
import './Gallery.css';
import useScrollToTop from '../hooks/useScrollToTop';

const Gallery = () => {
  // Use the custom hook to scroll to top
  useScrollToTop();
  
  return (
    <div className="gallery-page">
        <Navbar />
        
      <div className="mainbody">
        <div className="content-section">
          <h2>School Life in Pictures</h2>
          <p>
            Explore the vibrant life at Future Stars Academy through our photo gallery. 
            From classroom activities to special events, these images capture the joy 
            and learning that happens every day at our school.
          </p>
          
          <div className="gallery-grid">
            <div className="gallery-category">
              <h3>Classroom Activities</h3>
              <div className="image-grid">
                <img src={`${import.meta.env.BASE_URL}picture/gallery1.jpg`} alt="Students in class" />
                <img src={`${import.meta.env.BASE_URL}picture/gallery2.jpg`} alt="Science experiment" />
                <img src={`${import.meta.env.BASE_URL}picture/gallery3.jpg`} alt="Art class" />
                <img src={`${import.meta.env.BASE_URL}picture/gallery4.jpg`} alt="Reading session" />
              </div>
            </div>
            
            <div className="gallery-category">
              <h3>Sports & Activities</h3>
              <div className="image-grid">
                <img src={`${import.meta.env.BASE_URL}picture/gallery5.jpg`} alt="Football match" />
                <img src={`${import.meta.env.BASE_URL}picture/gallery6.jpg`} alt="Basketball game" />
                <img src={`${import.meta.env.BASE_URL}picture/gallery7.jpg`} alt="Track and field" />
                <img src={`${import.meta.env.BASE_URL}picture/gallery8.jpg`} alt="Swimming competition" />
              </div>
            </div>
            
            <div className="gallery-category">
              <h3>Events & Celebrations</h3>
              <div className="image-grid">
                <img src={`${import.meta.env.BASE_URL}picture/gallery9.jpg`} alt="Annual day celebration" />
                <img src={`${import.meta.env.BASE_URL}picture/gallery10.jpg`} alt="Cultural program" />
                <img src={`${import.meta.env.BASE_URL}picture/gallery11.jpg`} alt="Science fair" />
                <img src={`${import.meta.env.BASE_URL}picture/gallery12.jpg`} alt="Graduation ceremony" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
