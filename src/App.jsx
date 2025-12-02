import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import Footnote from './components/Footnote';
import Calendar from './pages/Calendar';
import Work from './pages/Work';
import Introduction from './pages/Introduction';
import Contact from './pages/Contact';

import './App.css';

function App() {
  const basePath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  return (

    <Router basename={basePath}>
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
          <Route path="/calendar" element={<Calendar/>} />
          <Route path="/work" element={<Work/>} />
          
        </Routes>
      </div>
      <Footnote />
    </Router>
  );
}

export default App;
