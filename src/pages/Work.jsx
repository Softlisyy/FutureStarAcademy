import React from 'react';
import Navbar from '../components/Navbar';
import Footnote from '../components/Footnote';
import './Work.css';
import useScrollToTop from '../hooks/useScrollToTop';

const Work = () => {
  useScrollToTop();
  
  return (
    <>
        <Navbar />
        <div className='mainbody'>
        <h1 className="work-heading">Work With Us </h1>
        <p className='work-para'>Our Work at FSA page highlights current opportunities to join our team of educators and 
        staff who are committed to providing quality education and a nurturing environment for every 
        student. Whether you are an experienced teacher or a professional eager to contribute to school 
        life, we invite you to explore our vacancies and become part of the FSA family.</p>
        <div className='work-images'>
          <img src="/picture/vacancy.jpg' alt=''/>
          <img src="/picture/vacancy1.jpg' alt=''/>
          <img src="/picture/vacancy2.jpg' alt=''/>
          <img src="/picture/vacancy3.jpg' alt=''/>
        </div>
        <h3 className='work-heading'>Why Work with Us?</h3>
        <div className='workone'>
        <p className='feature-item'>Supportive and friendly work environment</p>
        <p className='feature-item'>Job Security</p>
        <p className='feature-item'>Competitive salary</p>
        </div>
        <div className='worktwo'>
        <p className='feature-item'>Professional growth and training opportunities</p>
        <p className='feature-item'>  Modern teaching tools</p>
        </div>
        <div className='workthree'>
        <p className='feature-item'>  Recognition and reward system</p>
        </div>
        </div>
        
    </>
  );
};

export default Work;
