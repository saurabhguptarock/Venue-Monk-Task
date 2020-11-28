import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-text">CONTACT US</div>
      <div className="contact-section">
        <img className="contact" src="/24320.jpg" alt="Bar" />
        <button className="button">Meet us at a Bar</button>
      </div>
      <div className="contact-divider"></div>
      <div className="contact-section">
        <img className="contact" src="/4220501.jpg" alt="Office" />
        <button className="button">Come to our Office</button>
      </div>
    </div>
  );
};

export default ContactUs;
