import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (isCoffee) => {
    setShowModal(true);
  };

  return (
    <div className="contact-container">
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
      ></Modal>
      <div className="contact-text">CONTACT US</div>
      <div className="contact-section">
        <img className="contact" src="/coffee.webp" alt="Bar" />
        <button onClick={() => handleShowModal(true)} className="button">
          Meet us at Coffee
        </button>
      </div>
      <div className="contact-divider"></div>
      <div className="contact-section">
        <img className="contact" src="/4220501.jpg" alt="Office" />
        <button onClick={() => handleShowModal(false)} className="button">
          Come to our Office
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
