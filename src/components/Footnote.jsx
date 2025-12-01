import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footnote.css';

const Footnote = () => {
  return (
    <footer className='footnote'>
      <div className='footer-container'>
        <div className='footer-section logo-section'>
          <img src="/picture/logo.png' alt='Future Stars Academy Logo' className='footer-logo"/>
          <h3 className='footer-brand'>Future Stars Academy</h3>
          <p className='footer-tagline'>Nurturing Excellence, Building Futures</p>
        </div>

        <div className='footer-section'>
          <h2 className='footer-heading'>Contact Information</h2>
          <div className='footer-links'>
            <p className='footer-item'>
              <MapPin className='footer-icon' size={18} />
              <span>Lubhoo, Lalitpur</span>
            </p>
            <p className='footer-item'>
              <Phone className='footer-icon' size={18} />
              <span>9841529303</span>
            </p>
            <p className='footer-item'>
              <Mail className='footer-icon' size={18} />
              <span>info@futurestars.edu.np</span>
            </p>
          </div>
        </div>

        <div className='footer-section'>
          <h2 className='footer-heading'>Quick Links</h2>
          <div className='footer-links'>
            <Link to="/admissions" className="footer-link">Admissions</Link>
            <Link to="/academics" className="footer-link">Academics</Link>
            <Link to="/work" className="footer-link">Work with FSA</Link>
            <Link to="/calendar" className="footer-link">Calendar/Events</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
          </div>
        </div>

        <div className='footer-section'>
          <h2 className='footer-heading'>Follow Us</h2>
          <div className='footer-links social-links'>
            <a href='https://www.facebook.com/futurestars.acdmy' target='_blank' rel='noopener noreferrer' className="social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href='#' className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href='#' className="social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>&copy; 2025 Future Stars Academy. All Rights Reserved.</p>
        <p className='footer-credits'>Designed for Education</p>
      </div>
    </footer>
  );
};

export default Footnote;
