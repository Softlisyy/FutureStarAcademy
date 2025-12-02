import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navbarRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/academics', label: 'Academics' },
    { to: '/introduction', label: 'Introduction' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/about-us', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];

  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (navbarRef.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const navbar = navbarRef.current;
    if (navbar) {
      navbar.addEventListener('mousemove', handleMouseMove);
      return () => navbar.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.navbar');
      if (navbar && !navbar.contains(event.target) && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav 
      ref={navbarRef}
      className={`navbar ${isScrolled ? 'scrolled' : ''}`} 
      id="navbar"
    >
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={`${import.meta.env.BASE_URL}picture/logo.png`} alt="Future Stars Academy Logo" className="logo-image" />
          <span className="logo-text">Future Stars Academy</span>
        </Link>
        
        <ul className="nav-menu">
          {navLinks.map(({ to, label }) => (
            <li className="nav-item" key={to}>
              <Link
                to={to}
                className={`nav-link ${isActiveLink(to) ? 'active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        
        <Link to="/admissions" className="nav-cta">Enroll Now</Link>
        
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobileNav"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
      
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} id="mobileNav">
        <ul className="mobile-nav-menu">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="mobile-nav-link" onClick={closeMobileMenu}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/admissions" className="mobile-nav-link mobile-cta" onClick={closeMobileMenu}>
              Enroll Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
