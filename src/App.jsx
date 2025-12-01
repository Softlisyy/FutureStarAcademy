import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import Mission from './pages/Mission';
import Vision from './pages/Vision';
import Values from './pages/Values';
import Faculty from './pages/Faculty';
import Facilities from './pages/Facilities';
import Navbar from './components/Navbar';
import Footnote from './components/Footnote';
import Calendar from './pages/Calendar';
import Staff from './pages/Staff';
import Work from './pages/Work';
import Introduction from './pages/Introduction';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (

    <Router basename="/">
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/calender/events" element={<Homepage />} />
          <Route path="/about-us/mission" element={<Mission />} />
          <Route path="/about-us/vision" element={<Vision />} />
          <Route path="/about-us/values" element={<Values />} />
          <Route path="/about-us/faculty" element={<Faculty />} />
          <Route path="/about-us/facilities" element={<Facilities />} />
          <Route path="/calendar" element={<Calendar/>} />
          <Route path="/staff" element={<Staff/>} />
          <Route path="/work" element={<Work/>} />
          
        </Routes>
      </div>
      <Footnote />
    </Router>
  );
}

export default App;
