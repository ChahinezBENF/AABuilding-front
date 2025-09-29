import React from "react";
import "../styles/pages.css";
import aboutHero from "../assets/about-hero.jpg"; 
import aboutWorker from "../assets/about-worker.jpg";
import { FaTools, FaClipboardList, FaHardHat, FaBuilding, FaDraftingCompass } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

export default function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="about-hero-text">
          <h1>Our Company</h1>
        </div>
      </section>

      {/* Company Info */}
      <section className="about-info">
        <p>
          Founded in 2016, AA Building Inspection started with three engineers
          and one clear mission: to make civil inspections faster, more reliable,
          and more transparent. Over the past decade, we’ve grown from a small
          team into a trusted nationwide provider, completing more than 5,000
          inspections, supporting 120+ construction projects, and building
          partnerships with 40+ government and private agencies.
        </p>
        <p>
          Today, our team of over 50 experts combines deep engineering knowledge
          with the latest technology to deliver accurate, efficient, and
          compliant inspection services. With every project, we remain committed
          to helping clients build safely, confidently, and sustainably.
        </p>
      </section>

      {/* We Offer Section */}
      <section className="we-offer">
        <h2>We offer</h2>
        <div className="offer-grid">
          <div className="offer-card">
            <FaClipboardList className="icon" />
            <p>Class One accredited Inspection and Testing services</p>
          </div>
          <div className="offer-card">
            <MdEngineering className="icon" />
            <p>Fully experienced operations team for individual service</p>
          </div>
          <div className="offer-card">
            <FaBuilding  className="icon" />
            <p>Collaborative, practical, and solution-oriented mindset</p>
          </div>
          <div className="offer-card">
            <FaHardHat className="icon" />
            <p>On-demand professional exchanges, engineers, and technicians</p>
          </div>
          <div className="offer-card">
            <FaTools  className="icon" />
            <p>Expertise in inspecting small-volume hard-to-reach areas</p>
          </div>
          <div className="offer-card">
            <FaDraftingCompass className="icon" />
            <p>Highly skilled experts in construction and building codes</p>
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="about-highlight">
        <div className="highlight-text">
        <p>
          <strong>
            We have been in business for over ten years, completing over 8,000
            projects in New York City.
          </strong>
        </p>
        </div>
        <div className="highlight-image">
        <img src={aboutWorker} alt="Worker inspecting construction site" />
        </div>
      </section>
    </div>
  );
}
