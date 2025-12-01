import React from 'react';
import Navbar from '../components/Navbar';
import './Introduction.css';
import useScrollToTop from '../hooks/useScrollToTop';

const Introduction = () => {
  useScrollToTop();
  
  return (
    <>
      <Navbar />
      <div className="introduction-page">
        <div className="intro-hero">
          <div className="hero-overlay"></div>
          <div className="hero-line"></div>
          <div className="hero-content">
            <h1>Explore FSA</h1>
            <p><i>"Knowledge Bring Humanity"</i></p>
          </div>
        </div>

        <div className="intro-container">
          <section className="intro-section">
            <div className="section-content">
              <h2 className="section-title">About Our School</h2>
              <div className="content-with-image">
                <div className="text-content">
                  <p className="intro-text">
                    Future Stars Academy stands as a beacon of educational excellence, 
                    dedicated to shaping the minds and hearts of tomorrow's leaders. 
                    Established with a vision to provide world-class education rooted in 
                    cultural values, we have grown into one of the most trusted institutions 
                    in the region.
                  </p>
                  <p className="intro-text">
                    Our journey began with a simple yet powerful mission: to create an 
                    environment where every child can discover their potential and flourish. 
                    Today, we are proud to be home to hundreds of students who are not just 
                    learning academic subjects but are developing into well-rounded individuals 
                    prepared for the challenges of tomorrow.
                  </p>
                </div>
                <div className="image-container">
                  <img src="/picture/intro1.jpg" className="intro-image" />
                </div>
              </div>
            </div>
          </section>

          <section className="intro-section highlight-section">
            <h2 className="section-title">Who We Are?</h2>
            <h2> We are an educational institution focused on </h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎓</div>
                <h3>Academic Growth</h3>
                <p>We provide a strong learning foundation that helps students excel academically.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👨‍🏫</div>
                <h3>Character Building</h3>
                <p>We instill values and discipline to shape responsible and confident individuals.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏢</div>
                <h3>Real-World Skills</h3>
                <p>We equip students with practical skills that prepare them for future challenges.</p>
              </div>
            </div>
          </section>

          <section className="intro-section whatweoffer-section">
            <h2 className="section-title">What We Offer</h2>
            <div className='whatweofferimage'>
            <img src="/picture/offer1.jpg" height="220px" width="330px"></img>
            <img src="/picture/offer2.jpg"height="220px" width="350px"></img>
            <img src="/picture/offer3.jpg" height="220x" width="400px"></img>
            </div>
            <div className="whatweoffercontent">
              <div className="offer-item">
                <h3 className="offer-title">Academic Excellence</h3>
                <p>A strong curriculum designed to build problem-solving, critical thinking and communication skills.</p>
              </div>

              <div className="offer-item">
                <h3 className="offer-title">Modern Classrooms & Facilities</h3>
                <p>Digital classrooms, science & computer labs, a well-stocked library and safe sports facilities for hands-on learning.</p>
              </div>

              <div className="offer-item">
                <h3 className="offer-title">Extracurricular Activities</h3>
                <p>Sports, arts, music, clubs and leadership programs that strengthen character and real-world skills.</p>
              </div>

              <div className="offer-item">
                <h3 className="offer-title">Student-Centered Environment</h3>
                <p>Small classes, mentoring and well‑being support focused on each student’s development.</p>
              </div>
            </div>
            </section>

          <section className="intro-section value-section">
            <h2 className="section-title">FSA Values</h2>
            <div className='values-cards-container'>
                  <div className='value-card-wrapper'>
                    <h3 className='value-card-text'>Respect</h3>
                    <div className='value-card'></div>
                  </div>
                  <div className='value-card-wrapper'>
                    <h3 className='value-card-text'>Discipline</h3>
                    <div className='value-card'></div>
                  </div>
                  <div className='value-card-wrapper'>
                    <h3 className='value-card-text'>Integrity</h3>
                    <div className='value-card'></div>
                  </div>
                  <div className='value-card-wrapper'>
                    <h3 className='value-card-text'>Teamwork</h3>
                    <div className='value-card'></div>
                  </div>
                  <div className='value-card-wrapper'>
                    <h3 className='value-card-text'>Excellence</h3>
                    <div className='value-card'></div>
                  </div>
            </div>
          </section>
                  
         
            <div className='principal-section'>
            <h2 className="section-title">Message from the Principal</h2>
            <div className='principalmessage'>
            <img src="/picture/principal.jpg"height="350px" ></img>
            <p>“Our goal is to inspire students to dream big, think critically, and act with kindness.
            At FSA, every child is valued, supported, and encouraged to succeed.”</p>
            </div>
            </div>
         

          <section className="intro-section cta-section">
            <div className="cta-content">
              <h2>Get in Touch</h2>
              <p>Be part of an institution that values excellence, integrity, and innovation. 
                 Together, we can build a brighter future for your child.</p>
              <div className="cta-buttons">
                <a href="/admissions" className="cta-btn primary">Apply Now</a>
                <a href="/contact" className="cta-btn secondary">Contact Us</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Introduction;
