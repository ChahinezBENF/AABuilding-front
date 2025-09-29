import React from 'react'
import "../styles/pages.css";
import contacthero from "../assets/contact-hero.jpeg";

export default function Contact() {
  return (
    <div className="contact">
      {/* Hero */}
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${contacthero})` }}
      >
        <div className="contact-hero-text">
          <h1>Contact Us</h1>
        </div>
      </section>

      {/* Map */}
      <section className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.979820623443!2d-73.83984598779948!3d40.69644207127673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260ab6c5082c7%3A0x86e68aa3940ea70a!2s110-20%20Jamaica%20Ave%2C%20Jamaica%2C%20NY%2011418!5e0!3m2!1sen!2sus!4v1759115875515!5m2!1sen!2sus"
         width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>      
      </section>

      {/* Contact Info + Form */}
      <section className="contact-section">
        {/* Left: Office Info */}
        <div className="contact-info">
          <h2>Main office :</h2>
          <p>110-20 Jamaica Avenue,</p>
          <p>Suite 2E Queens,</p>
          <p>NY 11418</p>
          <p>Tel : (718) 441-0350</p>
          <p>Fax : (718) 441-7424</p>
          <p>Email : Zeya.Engineering@gmail.com</p>
        </div>

        {/* Right: Form */}
        <form className="contact-form">
          <label>
            Name <span>*</span>
            <input type="text" name="name" required />
          </label>
          <label>
            Phone number <span>*</span>
            <input type="text" name="phone" required />
          </label>
          <label>
            Email <span>*</span>
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
