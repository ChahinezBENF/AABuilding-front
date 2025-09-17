import React from "react";
import "../styles/pages.css";  
import heroImage from "../assets/construction-hero.png";
import inspectionImage from "../assets/inspection-worker.png";
import aci from "../assets/aci.png";
import icc from "../assets/icc.png";
import nycb from "../assets/nycb.png";
import nycdot from "../assets/nycdot.png";
import nycep from "../assets/nycep.png";

export default function Home() {
  return (
    <div className="home">
        {/* Hero Section */}
      <section   className="hero" 
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-text">
          <h1>PLAN. ENGINEER. ACHIEVE.</h1>
          <p>Turning ideas into reality through collaboration and expertise.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <p>
          At AA Building & Inspection Services, LLC, we specialize in delivering reliable and efficient
          civil inspection services. Our mission is to ensure safety,
          compliance, and quality across every stage of infrastructure and
          construction projects.
        </p>
        <p>
          With a team of experienced inspectors and engineers, we provide
          accurate reporting, detailed documentation, and actionable insights.
          From site inspections to compliance audits, we help our clients
          maintain the highest standards while saving time and reducing costs.
        </p>
        <p>
          We combine industry expertise with innovative digital tools to make
          inspections faster, smarter, and more transparent.
        </p>
      </section>

      {/* Image Section */}
      <section className="inspection-image">
        <img src={inspectionImage}  alt="Inspector at work" />
      </section>

      {/* Industry Affiliations */}
      <section className="affiliations">
        <h2>Affiliated With Industry Establishments</h2>
        <div className="logos">
          <img src={aci} alt="ACI" />
          <img src={icc} alt="ICC" />
          <img src={nycb} alt="NYC DEP" />
          <img src={nycdot} alt="NYC DOT" />
          <img src={nycep} alt="NYC EP" />
        </div>
      </section>
    </div>
  );
}
