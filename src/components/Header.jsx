import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";


export default function Header() {
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <nav>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" onClick={handleLinkClick}>About</Link>
        <Link to="/services" onClick={handleLinkClick}>Services</Link>
        <Link to="/work" onClick={handleLinkClick}>Work</Link>
        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
      </nav>
    </header>
  );
}
