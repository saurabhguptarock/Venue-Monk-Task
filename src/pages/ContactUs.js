import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [isCoffee, setIsCoffee] = useState(false);

  const handleShowModal = (isCoffee) => {
    if (isCoffee) {
      setIsCoffee(true);
    } else {
      setIsCoffee(false);
    }
    setShowModal(true);
  };

  return (
    <div className="contact-container">
      <div className={showModal ? "modal is-active" : "modal"}>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            left: 0,
            bottom: 0,
            position: "absolute",
            right: 0,
            top: 0,
          }}
          onClick={() => setShowModal(false)}
        ></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              {isCoffee ? "Meet us at Coffee" : "Visit our office"}
            </p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => setShowModal(false)}
            ></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Name</label>
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="Text input" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="email"
                  placeholder="Email input"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Write your message here"
                ></textarea>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button">Submit</button>
            <button
              className="button btn-cancel"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </footer>
        </div>
      </div>
      <div className="contact-text">CONTACT US</div>
      <div className="contact-section">
        <img className="contact mb-5" src="/coffee.webp" alt="Bar" />
        <button onClick={() => handleShowModal(true)} className="button">
          Meet us at Coffee
        </button>
      </div>
      <div className="contact-section">
        <img className="contact mb-5" src="/4220501.jpg" alt="Office" />
        <button onClick={() => handleShowModal(false)} className="button">
          Come to our Office
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
