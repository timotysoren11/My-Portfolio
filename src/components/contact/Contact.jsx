// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-title">
          <h1>Contact Me</h1>
          <p>Feel free to contact me with my inquires of questions</p>
        </div>
        <div className="contact-form">
          <form>
            <label>Name</label>
            <input type="text" />
            <label>Email Address</label>
            <input type="text" />
            <label>Message</label>
            <textarea name="text" id="text-area"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
