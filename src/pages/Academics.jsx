import React from 'react';
import Navbar from '../components/Navbar';
import './Academics.css';
import useScrollToTop from '../hooks/useScrollToTop';

const Academics = () => {
  // Use the custom hook to scroll to top
  useScrollToTop();
  
  return (
    <>
      <Navbar />

      <div className="mainbody">
        <div className="content-section">
          <h2 >Academic Excellence</h2>
          <p>
            At Future Stars Academy, we provide a comprehensive academic program 
            designed to challenge and inspire our students. Our curriculum is carefully 
            crafted to meet international standards while incorporating local cultural values.
          </p>

              <h3 className='achievements-heading'>Our Achivements </h3>
            <div className='achievements-sectionone'>
              <div className="achievement-image-container">
                <img src="/picture/ach1.jpg' alt="" className="achievement-image-main" 
                height={'330px'} style={{borderRadius:"10px"}}/>
                <img src="/picture/new.jpeg' alt="" className="achievement-image-hover" 
                height={'330px'} style={{borderRadius:"10px"}}/>
              </div>
              <div className="achievement-image-container">
                <img src="/picture/ach2.jpg' alt="" className="achievement-image-main" 
                height={'330px'} style={{borderRadius:"10px"}}/>
                <img src="/picture/ach5Mumbai.jpeg' alt="" className="achievement-image-hover" 
                height={'330px'} style={{borderRadius:"10px"}}/>
              </div>
              <div className="achievement-image-container">
                <img src="/picture/ach4.jpg' alt="" className="achievement-image-main" 
                height={'330px'} style={{borderRadius:"10px"}}/>
                <img src="/picture/diya.jpg' alt="" className="achievement-image-hover" 
                height={'330px'} style={{borderRadius:"10px"}}/>
              </div>
            </div>
          
          <h3 className='achievements-heading'>Faculty Excellence</h3>
          <div className="academic-features">
            <div className="feature">
              <h3>Pre-primary/ Early Childhood </h3>
              <img src="/picture/preprimary.jpg' alt="Junior Class" className="feature-image" 
              width={'270px'} height={'200px'} style={{borderRadius:"5px"}}/>
              <p>Early childhood development focusing on basic skills and 
                social interaction. Children are introduced to play-based learning, 
                storytelling, music, art, and motor skill development to build a strong foundation
                for lifelong learning.</p>
              <ul className="feature-list">
                <li> Development of social and emotional skills through play</li>
                <li> Exposure to arts, music, and creative activities</li>
                <li> Introduction to letters, numbers, shapes, and colors in a fun way</li>
              </ul>
            </div>
            <div className="feature">
              <h3>Primary/ Elementary</h3>
              <img src="/picture/junior.jpg' alt="Junior Class" className="feature-image" 
              width={'270px'} height={'200px'} style={{borderRadius:"5px", marginTop:"30px"}} padding top='4px'/>
              <p>
                Foundation learning with focus on core subjects and creative development.The 
                curriculum emphasizes literacy, numeracy, critical thinking, and problem-solving, 
                while encouraging teamwork, curiosity, and creativity through projects and activities.
              </p>
              <ul className="feature-list">
                <li> Strong foundation in Mathematics, English, and Science.</li>
                <li> Focus on teamwork and interactive learning.</li>
                <li> Encouragement of curiosity, innovation, and creativity.</li>
              </ul>
            </div>
            <div className="feature">
              <h3>Secondary Education</h3>
              <img src="/picture/secondary.jpg' alt="Junior Class" className="feature-image" 
              width={'270px'} height={'200px'} style={{borderRadius:"5px" , marginTop:"30px"}}/>
              <p>
                Advanced curriculum preparing students for higher education and beyond.Students are 
                guided through in-depth subject knowledge, leadership skills, digital literacy, and 
                extracurricular opportunities to prepare them for future academic and professional 
                challenges.</p>
                <ul className="feature-list">
                <li> Preparation for board exams and higher education.</li>
                <li> Training in digital skills and technology use.</li>
                <li> Opportunities for leadership, debate, sports, and community service.</li>
              </ul>
            </div>
          </div>

          <h3 className='achievements-heading'>Student Sucess Stories</h3>
          <div className='achievements-sectiontwo'>
            <div className="achievement-image-container">
              <img src="/picture/achievent1.jpg' alt="" className="achievement-image-main" 
              height={'400px'} style={{borderRadius:"10px"}}/>
              <img src="/picture/diya.jpg' alt="" className="achievement-image-hover" 
              height={'430px'} style={{borderRadius:"10px"}}/>
            </div>
              <p className='achievements-sectionpara'> We proudly congratulate for securing a perfect 4.0 GPA in the Grade 10 examination.
              This remarkable accomplishment reflects your hard work, dedication, and commitment to 
              academic excellence. Your success is an inspiration to your peers and a source of pride 
              for the entire school community.With a strong commitment to academic excellence, innovative 
              teaching methods, and personalized mentoring, Future Star continues to nurture well-rounded 
              learners who are prepared to succeed in their future endeavors. </p>
            </div>





        </div>
      </div>
    </>
  );
};

export default Academics;
