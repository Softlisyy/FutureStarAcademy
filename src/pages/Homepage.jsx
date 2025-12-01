import React, { useEffect, useRef, useState } from 'react';
import './Homepage.css'; // Import the CSS file
import Navbar from '../components/Navbar'; // Import the Navbar component
import useScrollToTop from '../hooks/useScrollToTop'; // Import the custom hook


const Homepage = () => {
  const videoRef = useRef(null);
  const fourthPartRef = useRef(null);

  // Use the custom hook to scroll to top
  useScrollToTop();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isPlaying = false;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isPlaying) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  isPlaying = true;
                })
                .catch((error) => {
                  console.log('Video autoplay failed:', error);
                  video.setAttribute('controls', 'true');
                });
            }
          }
        } else {
          if (isPlaying) {
            video.pause();
            isPlaying = false;
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      rootMargin: '0px'
    });

    observer.observe(video);

    return () => {
      observer.unobserve(video);
      if (isPlaying) {
        video.pause();
      }
    };
  }, []);

  // Add scroll animation for fourth part images
  useEffect(() => {
    const fourthPart = fourthPartRef.current;
    if (!fourthPart) return;

    const imageContainers = fourthPart.querySelectorAll('.image-container');

    const handleScrollAnimation = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 150); // Stagger animation by 150ms
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    });

    imageContainers.forEach((container) => {
      observer.observe(container);
    });

    return () => {
      imageContainers.forEach((container) => {
        observer.unobserve(container);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="mainphoto">
        <h1 className="l1">"Where Every Child's Potential is Celebrated."</h1>
      </div>

      <div className="mainbody">
        <div className="secondpart">
          <img 
            src="./picture/herophoto.png" 
            height="550" 
            width="700" 
            alt="Students in classroom"
          />
          <div>
            <div className="text">
              <h1>Welcome to</h1>
              <h2>Future Stars Academy</h2>
              <p style={{fontSize:'21px'}}>
                We are delighted to have you visit our school's online home. At Future Stars Academy, 
                we believe that education goes beyond textbooks—it is about nurturing curiosity, building 
                character, and inspiring lifelong learning. For over 2001, we have been committed to 
                providing a safe, inclusive, and supportive environment where every student can discover 
                their potential and grow with confidence. Together with our dedicated teachers, supportive parents,
                and vibrant community, we strive to prepare our students not only for academic success but also for 
                life as responsible, compassionate, and innovative citizens of tomorrow.
              </p>
            </div>
          </div>
        </div>

        <div className="video-tour-section">
          <h2 className="tour-heading">Virtual Tour of Our School</h2>
          {/* <p className="tour-description">
            Explore our beautiful campus, modern facilities, and vibrant learning environment 
            through this virtual tour of Future Stars Academy.
          </p> */}
          <div className="video-container">
            <video 
              ref={videoRef}
              className="tour-video" 
              muted
              loop
              playsInline
              poster="./picture/mainphoto.png"
              preload="auto"
            >
              <source src="./video/Tour.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

 


        <div className="thirdpart">
          <div className='TPH1'>
          <h1>Yellow day</h1>
          </div>
          <div className='TPH2'>
          <p className='TPH2_text' style={{fontSize:'17px'}}>
            At Future Stars, we believe that festivals are a reflection of our rich cultural
            heritage and an opportunity to instill values of unity, respect, and joy among students. 
            Throughout the year, our school celebrates a variety of festivals such as Dashain, Tihar, Holi, 
            Christmas, and many more, bringing together students from different backgrounds in a spirit 
            of harmony. These celebrations include cultural programs, art and craft activities, music, dance, 
            and sharing of traditional foods. By observing festivals together, we teach our students to 
            appreciate diversity, strengthen social bonds, and create cherished memories that enrich their 
            learning experience.
          </p>
          <div className="festival-image-container">
            <img 
              src="./picture/festival.png" 
              width="650" 
              alt="Festival celebration"
            />
            <div className='YFH'>
              <h3>Staff celebrating *Yellow Day* by wearing bright yellow outfits to represent joy, positivity, and sunshine.</h3>
            </div>
          </div>
          </div>
        </div>
        
        <div className="fourthpart" ref={fourthPartRef}>
          <div className="image-container">
            <img src="./picture/quiz.png" alt="Quiz competition" />
            <div className="caption">
              Our school organizes quiz competitions to encourage curiosity, critical thinking, and 
              teamwork among students.
            </div>
          </div>
          <div className="image-container">
            <img src="./picture/environmentday.png" alt="Environment Day" />
            <div className="caption">
              We celebrate Environment Day by tree planting, with students' participation to promote a 
              greener and healthier future.
            </div>
          </div>
          <div className="image-container">
            <img src="./picture/kindergardenGraduation.png" alt="Kindergarten Graduation" />
            <div className="caption">
              Our Kindergarten Graduation celebrates the young learners as they proudly transition from 
              early childhood education.
            </div>
          </div>
          <div className="image-container">
            <img src="./picture/kids.png" alt="Junior student activities" />
            <div className="caption">
              Our junior students engage in fun and educational extra curricular activities that help them 
              explore talents.
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="fifthpart">
          <div className="stats-container">
            <div className="stat-card">
              <h2 className='stat-number'>40+</h2>
              <p className='stat-label'>Expert Teachers</p>
            </div>
            
            <div className="stat-card">
              <h2 className='stat-number'>500+</h2>
              <p className='stat-label'>Happy Students</p>
            </div>
            
            <div className="stat-card">
              <h2 className='stat-number'>24+</h2>
              <p className='stat-label'>Years of Trust</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;