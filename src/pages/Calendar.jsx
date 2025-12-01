import React from 'react';
import Navbar from '../components/Navbar';
import './Calendar.css';
import useScrollToTop from '../hooks/useScrollToTop';

const Calendar= () => {
  // Use the custom hook to scroll to top
  useScrollToTop();
  
  return (
    <div>
      <Navbar />
      <div className='mainbody'>
      <h3 className='Calendar'>School Calendar</h3>
      <p className='Calendar-para'>Our school calendar keeps students, parents, and teachers informed about 
      important academic dates, examinations, holidays, and upcoming events. From classroom 
      schedules to cultural programs and special celebrations, the calendar provides an organized 
      overview of the school year, ensuring that everyone stays connected and prepared.</p>

      <div className='Calendar-images'>
      <img src='./picture/calender.jpg' alt='calender' className='Calendar-image' style={{width:'350px', height:'500px'}}/>
      <img src='./picture/calender2.jpg' alt='calender' className='Calendar-image' style={{width:'350px', height:'500px'}}/>
      <img src='./picture/cal3.jpg' alt='calender' className='Calendar-image' style={{width:'350px', height:'500px'}}/>
      <img src='./picture/cal4.jpg' alt='calender' className='Calendar-image' style={{width:'350px', height:'500px'}}/>
      <img src='./picture/cal5.jpg' alt='calender'className='Calendar-image' style={{width:'350px', height:'500px'}}/>
      <img src='./picture/cal6.jpg' alt='calender' className='Calendar-image' style={{width:'350px', height:'500px'}}/>
      </div>

    </div>
    </div>
  );
};

export default Calendar;