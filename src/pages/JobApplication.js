import React from 'react';

function JobApplication() {
  return (
    <div className="job-application">
      <h1>Job Application</h1>
      <p>We're always looking for talented individuals to join our team!</p>
      <p>To apply, please fill out our application form:</p>
      <a
        href="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="apply-button"
      >
        Apply Now
      </a>
    </div>
  );
}

export default JobApplication;