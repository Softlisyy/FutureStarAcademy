import React from 'react';
import Navbar from '../components/Navbar';
import './Download.css';

const Download = () => {
  const handleDownload = () => {
    // Create a sample file or link to an existing file
    // You can modify this to download your actual file
    const fileUrl = '/sample-document.pdf'; // Replace with your actual file path
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Future-Stars-Academy-Document.pdf'; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="download-page">
      <Navbar />
      <div className="download-container">
        <div className="download-content">
          <h1>Download Resources</h1>
          <p>Access important documents and resources from Future Stars Academy</p>
          
          <div className="download-section">
            <div className="download-card">
              <div className="download-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </div>
              <h2>School Brochure</h2>
              <p>Download our comprehensive school brochure with detailed information about our programs, facilities, and admission process.</p>
              <button className="download-btn" onClick={handleDownload}>
                <span className="btn-icon">⬇</span>
                Download Now
              </button>
            </div>

            <div className="download-card">
              <div className="download-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </div>
              <h2>Admission Form</h2>
              <p>Download the admission application form to begin your child's journey with Future Stars Academy.</p>
              <button className="download-btn" onClick={handleDownload}>
                <span className="btn-icon">⬇</span>
                Download Now
              </button>
            </div>

            <div className="download-card">
              <div className="download-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </div>
              <h2>Academic Calendar</h2>
              <p>Download our academic calendar to stay updated with important dates, events, and holidays throughout the year.</p>
              <button className="download-btn" onClick={handleDownload}>
                <span className="btn-icon">⬇</span>
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
