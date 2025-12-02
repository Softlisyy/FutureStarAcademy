import React from 'react';
import Navbar from '../components/Navbar';
import './Calendar.css';
import useScrollToTop from '../hooks/useScrollToTop';

const Calendar= () => {
  // Use the custom hook to scroll to top
  useScrollToTop();

  const calendarImages = [
    { src: 'picture/calender.jpg', alt: 'School calendar overview' },
    { src: 'picture/calender2.jpg', alt: 'Event highlights calendar' },
    { src: 'picture/cal3.jpg', alt: 'Monthly classroom plans' },
    { src: 'picture/cal4.jpg', alt: 'Sports and activities schedule' },
    { src: 'picture/cal5.jpg', alt: 'Holiday reminders calendar' },
    { src: 'picture/cal6.jpg', alt: 'Exam and assessment calendar' }
  ];
  
  return (
    <div className='calendar-page'>
      <Navbar />
      <div className='calendar-body'>
        <h3 className='calendar-title'>School Calendar</h3>
        <p className='calendar-description'>Our school calendar keeps students, parents, and teachers informed about 
        important academic dates, examinations, holidays, and upcoming events. From classroom 
        schedules to cultural programs and special celebrations, the calendar provides an organized 
        overview of the school year, ensuring that everyone stays connected and prepared.</p>

        <div className='calendar-images'>
          {calendarImages.map((image, index) => (
            <div className='calendar-image-card' key={index}>
              <img src={`${import.meta.env.BASE_URL}${image.src}`} alt={image.alt} className='calendar-image'/>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Calendar;
