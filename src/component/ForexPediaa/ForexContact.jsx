import React, { useState } from "react";
import "./ForexContact.css";

const ForexContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here (API call or email service)
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="number"
            placeholder="Your Number"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      ) : (
        <div className="contact-options">
          <h2>Thank you for contacting us!</h2>
          <p>Please choose one of the options below:</p>
          <div className="options-buttons">
            <a
              href={`https://wa.me/919999999999?text=Hello, I am ${formData.name}. ${formData.message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Chat on WhatsApp
            </a>
            <a
              href="https://forexpediaa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="website-btn"
            >
              Visit Website
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForexContact;
