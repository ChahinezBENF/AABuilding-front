import React from 'react'
import "../styles/components.css";  
import linkedin from "../assets/linkedin-logo.png";
import Instagram from "../assets/instagram-logo.png";
import facebook from "../assets/facebook-logo.png";

export default function Footer() {
 return (
    <footer className="footer">
      <p>© 2025 AA Building & Inspection Services, LLC. Privacy Policy</p>
      <div className="social">
        <a href="#"><img src={linkedin} alt="Company Logo" /><i className="linkedin"></i></a>
        <a href="#"><img src={facebook} alt="Company Logo" /><i className="facebook"></i></a>
        <a href="#"><img src={Instagram} alt="Company Logo" /><i className="instagram"></i></a>
      </div>
    </footer>
  );
}
