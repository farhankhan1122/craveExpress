import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>
          Have questions or feedback? We'd love to hear from you. 
          Fill out the form below or reach out to us through any of our contact channels.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-info-card">
            <h3>📍 Location</h3>
            <p>123 Food Street</p>
            <p>Delhi, India 110001</p>
            <p>Near Connaught Place</p>
          </div>

          <div className="contact-info-card">
            <h3>📞 Phone</h3>
            <p>Customer Support: +91 1234567890</p>
            <p>Business Hours: 24/7</p>
            <p>Emergency: +91 9876543210</p>
          </div>

          <div className="contact-info-card">
            <h3>✉️ Email</h3>
            <p>support@cravexpress.com</p>
            <p>business@cravexpress.com</p>
            <p>careers@cravexpress.com</p>
          </div>

          <div className="contact-info-card">
            <h3>⏰ Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8360770551687!2d77.21657331501215!3d28.632572979493288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d62b%3A0x37205b715389640!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1647689123456!5m2!1sen!2sin"
          title="CraveExpress Location"
        />
      </div>
    </div>
  );
};

export default Contact;