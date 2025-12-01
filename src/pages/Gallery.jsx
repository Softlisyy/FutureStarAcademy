import React from 'react';
import Navbar from '../components/Navbar';
import './Gallery.css';
import useScrollToTop from '../hooks/useScrollToTop';

const Gallery = () => {
  // Use the custom hook to scroll to top
  useScrollToTop();
  
  return (
    <>
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
                <img src="./picture/gallery1.jpg" alt="Students in class" />
                <img src="./picture/gallery2.jpg" alt="Science experiment" />
                <img src="./picture/gallery3.jpg" alt="Art class" />
                <img src="./picture/gallery4.jpg" alt="Reading session" />
              </div>
            </div>
            
            <div className="gallery-category">
              <h3>Sports & Activities</h3>
              <div className="image-grid">
                <img src="./picture/gallery5.jpg" alt="Football match" />
                <img src="./picture/gallery6.jpg" alt="Basketball game" />
                <img src="./picture/gallery7.jpg" alt="Track and field" />
                <img src="./picture/gallery8.jpg" alt="Swimming competition" />
              </div>
            </div>
            
            <div className="gallery-category">
              <h3>Events & Celebrations</h3>
              <div className="image-grid">
                <img src="./picture/gallery9.jpg" alt="Annual day celebration" />
                <img src="./picture/gallery10.jpg" alt="Cultural program" />
                <img src="./picture/gallery11.jpg" alt="Science fair" />
                <img src="./picture/gallery12.jpg" alt="Graduation ceremony" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
