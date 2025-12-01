import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Admissions.css';
import useScrollToTop from '../hooks/useScrollToTop';

const Admissions = () => {
  useScrollToTop();

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    previousSchool: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admission inquiry submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        grade: '',
        previousSchool: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 4000);
  };

  const processSteps = [
    {
      number: '01',
      title: 'Submit Application',
      description: 'Fill out our online application form with student details and upload required documents.',
      icon: '📝',
      color: '#E63946'
    },
    {
      number: '02',
      title: 'Entrance Assessment',
      description: 'Age-appropriate evaluation to understand the student\'s current academic level and learning needs.',
      icon: '📊',
      color: '#7A6A9A'
    },
    {
      number: '03',
      title: 'Parent Interview',
      description: 'Meet with our admissions team to discuss your child\'s educational goals and our programs.',
      icon: '👥',
      color: '#1D3557'
    },
    {
      number: '04',
      title: 'Enrollment',
      description: 'Receive admission decision and complete enrollment process to join our academy family.',
      icon: '🎓',
      color: '#B16A76'
    }
  ];

  const documents = [
    { icon: 'BC', title: 'Birth Certificate', desc: 'Original or certified copy' },
    { icon: 'SR', title: 'Previous School Records', desc: 'Transcripts and report cards' },
    { icon: 'PH', title: 'Photographs', desc: '4 passport-sized photos' },
    { icon: 'ID', title: 'Parent/Guardian ID', desc: 'Valid identification' },
    { icon: 'MR', title: 'Medical Records', desc: 'Immunization certificate' },
    { icon: 'PA', title: 'Proof of Address', desc: 'Recent utility bill or rental agreement' }
  ];

  const grades = ['Pre-Primary', 'Primary (1-5)', 'Lower Secondary (6-8)', 'Secondary (9-10)'];

  return (
    <div className="admissions-page">
      <Navbar />

      {/* Hero Section */}
      <section className="admissions-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">✨ Admissions 2025-2026</div>
          <h1 className="hero-title">
            <span className="title-line-1">Begin Your Journey</span>
            <span className="title-line-2">To Academic Excellence</span>
          </h1>
          <p className="hero-description">
            Join Future Stars Academy where every child is nurtured to reach their fullest potential 
            through innovative teaching, personalized attention, and a commitment to excellence.
          </p>
          <div className="hero-cta-group">
            <button className="cta-primary" onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}>
              <span>Apply Now</span>
              <span className="cta-arrow">→</span>
            </button>
            <button className="cta-secondary" onClick={() => document.getElementById('process-section').scrollIntoView({ behavior: 'smooth' })}>
              <span>Learn More</span>
            </button>
          </div>
        </div>
        <div className="hero-decorations">
          <div className="hero-circle hero-circle-1"></div>
          <div className="hero-circle hero-circle-2"></div>
          <div className="hero-circle hero-circle-3"></div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section" id="process-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">Our Process</div>
            <h2 className="section-title">Simple Admission Steps</h2>
            <p className="section-description">
              We've designed a straightforward admission process to make joining our academy as smooth as possible.
            </p>
          </div>

          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step" style={{ '--step-color': step.color }}>
                <div className="step-connector"></div>
                <div className="step-icon-wrapper">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-number">{step.number}</div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="documents-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">Requirements</div>
            <h2 className="section-title">Required Documents</h2>
            <p className="section-description">
              Please prepare the following documents for a smooth application process.
            </p>
          </div>

          <div className="documents-grid">
            {documents.map((doc, index) => (
              <div key={index} className="document-card">
                <div className="document-icon">{doc.icon}</div>
                <h4 className="document-title">{doc.title}</h4>
                <p className="document-desc">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="dates-section">
        <div className="dates-container">
          <div className="dates-header">
            <h2>Important Dates 2025-2026</h2>
          </div>
          <div className="dates-grid">
            <div className="date-item">
              <div className="date-content">
                <div className="date-label">Application Opens</div>
                <div className="date-value">January 1, 2025</div>
              </div>
            </div>
            <div className="date-item">
              <div className="date-content">
                <div className="date-label">Application Deadline</div>
                <div className="date-value">March 31, 2025</div>
              </div>
            </div>
            <div className="date-item">
              <div className="date-content">
                <div className="date-label">Entrance Assessment</div>
                <div className="date-value">Flexible Scheduling</div>
              </div>
            </div>
            <div className="date-item">
              <div className="date-content">
                <div className="date-label">Results Announced</div>
                <div className="date-value">Same Day</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="application-section" id="application-form">
        <div className="section-container">
          <div className="application-wrapper">
            <div className="application-info">
              <div className="section-badge">Get Started</div>
              <h2 className="application-title">Submit Your Application</h2>
              <p className="application-description">
                Take the first step towards your child's bright future. Fill out the form and our admissions 
                team will contact you within 24 hours to guide you through the next steps.
              </p>
              
              <div className="info-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon"></div>
                  <div className="highlight-text">
                    <strong>Quick Response</strong>
                    <span>We respond within 24 hours</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon"></div>
                  <div className="highlight-text">
                    <strong>Personal Guidance</strong>
                    <span>Dedicated counselor support</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon"></div>
                  <div className="highlight-text">
                    <strong>Flexible Schedule</strong>
                    <span>Assessment at your convenience</span>
                  </div>
                </div>
              </div>

              <div className="contact-box">
                <h4>Need Help?</h4>
                <p>Call: 01-5580754</p>
                <p>Email: fsacacemy@yahoo.com</p>
                <p>Visit: Lumbhoo, Lalitpur, Nepal</p>
              </div>
            </div>

            <div className="application-form-wrapper">
              {isSubmitted && (
                <div className="form-success">
                  <div className="success-icon"></div>
                  <div className="success-content">
                    <h3>Application Received!</h3>
                    <p>Thank you for your interest. Our team will contact you shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="application-form">
                <div className="form-group">
                  <label>Student's Full Name *</label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="Enter student's name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Parent/Guardian Name *</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Enter parent's name"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+977 98XXXXXXXX"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Grade/Level Applying For *</label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Grade</option>
                      {grades.map((grade, idx) => (
                        <option key={idx} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Previous School</label>
                    <input
                      type="text"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      placeholder="School name (if applicable)"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Additional Information</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any questions or special requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>Submit Application</span>
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Ready to Join Future Stars Academy?</h2>
          <p>Take the first step towards excellence today. Our team is here to help you every step of the way.</p>
          <button className="cta-large" onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}>
            <span>Start Your Application</span>
            <span className="cta-arrow">→</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
