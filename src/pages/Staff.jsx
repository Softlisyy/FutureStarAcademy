import React from 'react';
import Navbar from '../components/Navbar';
import Footnote from '../components/Footnote';
import './Staff.css';
import useScrollToTop from '../hooks/useScrollToTop';

const Staff = () => {
  // Use the custom hook to scroll to top
  useScrollToTop();
  
  return (
    <>
        <Navbar />

        <div className='mainbody'>
        <h2 className="staff-heading">Our Dedicated Staff</h2>
        <img src={`${import.meta.env.BASE_URL}picture/Staff-mainphoto.jpg`} alt="Staff" className="staff-image"/>
        <p className="staffintro">At Future Stars Academy, our team of qualified and passionate 
        educators is committed to guiding students with care, knowledge, and inspiration. 
        Supported by our staff, they create a positive and engaging learning environment where
        every child can grow and succeed.</p>

        <div className='PrimaryStaff'>
          <h2>Our Dedicated Primary Teachers</h2>
          </div>
          </div>

        
    </>
  );
};

export default Staff;
