import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>Welcome to CraveExpress</h1>
        <p>
          Your ultimate destination for delicious food delivered right to your doorstep. 
          We're passionate about bringing the best culinary experiences to your table, 
          one order at a time.
        </p>
      </div>

      <div className="about-features">
        <div className="feature-card">
          <h3>Fresh & Quality Food</h3>
          <p>
            We partner with the finest restaurants to ensure you get the highest quality 
            food delivered fresh and hot to your doorstep.
          </p>
        </div>
        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>
            Our dedicated delivery partners work tirelessly to ensure your food reaches 
            you quickly and safely, maintaining the perfect temperature and quality.
          </p>
        </div>
        <div className="feature-card">
          <h3>Wide Selection</h3>
          <p>
            From local favorites to international cuisines, we offer an extensive menu 
            selection to satisfy every craving and dietary preference.
          </p>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat-item">
          <h4>1000+</h4>
          <p>Restaurant Partners</p>
        </div>
        <div className="stat-item">
          <h4>50+</h4>
          <p>Cities Covered</p>
        </div>
        <div className="stat-item">
          <h4>1M+</h4>
          <p>Happy Customers</p>
        </div>
        <div className="stat-item">
          <h4>24/7</h4>
          <p>Customer Support</p>
        </div>
      </div>

      <div className="about-team">
        <h2>Our Leadership Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="CEO" />
            <h4>John Smith</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="COO" />
            <h4>Sarah Johnson</h4>
            <p>Chief Operations Officer</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="CTO" />
            <h4>Michael Chen</h4>
            <p>Chief Technology Officer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
