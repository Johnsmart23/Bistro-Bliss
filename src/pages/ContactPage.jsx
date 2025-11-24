import React, { useState } from "react";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form submitted:", formData);

    // Optionally reset form after submit
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    alert("Your message has been sent!");
  };

  return (
    <section className="contact-wrapper">
      {/* Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>

      {/* Contact Form Card */}
      <div className="contact-card">
        <form onSubmit={handleSubmit}>
          {/* Name + Email */}
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
              />
            </div>
          </div>

          {/* Subject */}
          <div className="form-group-full">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Write a subject"
              required
            />
          </div>

          {/* Message */}
          <div className="form-group-full">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows="6"
              required
            />
          </div>

          {/* Button */}
          <button type="submit" className="send-btn">
            Send
          </button>
        </form>
      </div>

      {/* Bottom Info */}
      <div className="contact-info">
        <div>
          <h4>Call Us:</h4>
          <p className="highlight">+1–234–567–8900</p>
        </div>

        <div>
          <h4>Hours:</h4>
          <p>Mon–Fri: 11am – 8pm</p>
          <p>Sat, Sun: 9am – 10pm</p>
        </div>

        <div>
          <h4>Our Location:</h4>
          <p>123 Bridge Street</p>
          <p>Nowhere Land, LA 12345</p>
          <p>United States</p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
