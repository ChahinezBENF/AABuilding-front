import React from 'react'
import "../styles/components.css";  

export default function Footer() {
 return (
    <footer className="footer">
      <p>© Copyright</p>
      <div className="social">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-whatsapp"></i></a>
      </div>
    </footer>
  );
}
