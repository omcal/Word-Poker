import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function JobApplication() {
  const handleApplyClick = (e) => {
    e.preventDefault();
    toast.error("Thank you for your interest. We are not hiring at the moment.");
  };

  return (
    <div className="job-application">
      <h1>Job Application</h1>
      <p>We're always looking for talented individuals to join our team!</p>
      <p>To apply, please fill out our application form:</p>
      <a
        href="#"
        onClick={handleApplyClick}
        className="apply-button"
      >
        Apply Now
      </a>
      <ToastContainer />
    </div>
  );
}

export default JobApplication;