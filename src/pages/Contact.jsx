import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Contact.css';
import useScrollToTop from '../hooks/useScrollToTop';

const Contact = () => {
  useScrollToTop();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['Lumbhoo, Lalitpur, Nepal', 'Future Stars Academy'],
      color: '#dc2626'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['01-5580754', 'Mon - Fri: 9AM - 5PM'],
      color: '#1e40af'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['fsacacemy@yahoo.com', 'Quick response guaranteed'],
      color: '#7c3aed'
    },
    {
      icon: '🕒',
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
      color: '#059669'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="contact-page">
        {/* Animated Background Elements */}
        <div className="background-decoration">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
        </div>

        <div className="contact-container">
          {/* Header Section */}
          <div className="contact-header">
            <div className="header-badge">Contact Us</div>
            <h1 className="main-title">
              <span className="title-line">Let's Start a</span>
              <span className="title-highlight">Conversation</span>
            </h1>
            <p className="header-description">
              Have questions about admissions, programs, or anything else? 
              We're here to help and would love to hear from you.
            </p>
          </div>

          {/* Main Content */}
          <div className="contact-content">
            {/* Contact Info Cards */}
            <div className="contact-info-section">
              <div className="info-header">
                <h2>Get in Touch</h2>
                <div className="divider-line"></div>
              </div>
              
              <div className="info-cards-grid">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="info-card"
                    style={{ '--card-color': info.color, '--animation-delay': `${index * 0.1}s` }}
                  >
                    <div className="card-glow"></div>
                    <div className="info-icon-wrapper">
                      <div className="info-icon">{info.icon}</div>
                    </div>
                    <div className="info-content">
                      <h3>{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className={idx === 0 ? 'primary-detail' : 'secondary-detail'}>
                          {detail}
                        </p>
                      ))}
                    </div>
                    <div className="card-corner"></div>
                  </div>
                ))}
              </div>

              {/* Additional Info Box */}
              <div className="quick-info-box">
                <div className="quick-info-icon">💬</div>
                <div className="quick-info-content">
                  <h4>Quick Response</h4>
                  <p>We typically respond within 24 hours during business days</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Send a Message</h2>
                <p>Fill out the form below and our team will get back to you shortly</p>
              </div>
              
              {isSubmitted && (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <div className="success-text">
                    <strong>Message Sent Successfully!</strong>
                    <span>Thank you for reaching out. We'll respond soon.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name <span className="required">*</span>
                  </label>
                  <div className={`input-wrapper ${focusedField === 'name' ? 'focused' : ''}`}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="John Doe"
                    />
                    <div className="input-border"></div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <div className={`input-wrapper ${focusedField === 'email' ? 'focused' : ''}`}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="john@example.com"
                      />
                      <div className="input-border"></div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <div className={`input-wrapper ${focusedField === 'phone' ? 'focused' : ''}`}>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+977 9876543210"
                      />
                      <div className="input-border"></div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    Subject <span className="required">*</span>
                  </label>
                  <div className={`input-wrapper ${focusedField === 'subject' ? 'focused' : ''}`}>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="How can we help you?"
                    />
                    <div className="input-border"></div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Your Message <span className="required">*</span>
                  </label>
                  <div className={`input-wrapper ${focusedField === 'message' ? 'focused' : ''}`}>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="6"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                    <div className="input-border"></div>
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  <span className="btn-text">Send Message</span>
                  <span className="btn-icon">→</span>
                  <div className="btn-glow"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <h3>Find Us on the Map</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.5573857665897!2d85.31999831506207!3d27.66666198280398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c0e8c99999%3A0x9c9b9c9b9c9b9c9b!2sLalitpur%2C%20Nepal!5e0!3m2!1sen!2snp!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '20px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Future Stars Academy Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
