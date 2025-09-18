// src/pages/Services.jsx
import React from "react";
import { FaClipboardList, FaTools, FaUsers, FaHardHat } from "react-icons/fa";
import { MdOutlineVibration } from "react-icons/md";
import ServiceCard from "../components/ServicesCard";
import "../styles/pages.css";
import servicesHero from "../assets/services-hero.jpg";
import servicesTeam from "../assets/services-team.jpg";



export default function Services() {
  const services = [
    {
      title: "Special Inspection",
      description: "Ensuring compliance with codes and safety standards.",
      icon: <FaClipboardList />,
      color: "#28a745", // green
    },
    {
      title: "Material Testing",
      description: "Reliable lab and field testing for construction materials.",
      icon: <FaTools />,
      color: "#007bff", // blue
    },
    {
      title: "Structural Engineer",
      description: "Design and analysis for safe, durable structures.",
      icon: <FaHardHat />,
      color: "#ff9800", // orange
    },
    {
      title: "Vibration Monitoring & Site Surveying",
      description: "Advanced monitoring to protect structures during construction.",
      icon: <MdOutlineVibration />,
      color: "#dc3545", // red
    },
    {
      title: "Non-Destructive Testing",
      description: "Accurate testing without damaging materials or structures.",
      icon: <FaUsers />,
      color: "#6f42c1", // purple
    },
  ];

   return (
    <div className="services">
      {/* Hero Section */}
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${servicesHero})` }}
      >
        <div className="services-hero-text">
          <h1>Our Services</h1>
        </div>
      </section>

      {/* Intro / Description Section */}
      <section className="services-intro">
        <p>
          AA Building provides a full range of engineering services to support
          client needs. These services include: Special Inspections, Material
          Testing, Structural Engineering Design, Non-Destructive Testing, and
          Vibration Monitoring & Site Surveying.
        </p>
        <p>
          This wide-ranging set of engineering services allows the firm to
          become a single source provider to its clients throughout the life
          cycle of their buildings, from initial infrastructure to ongoing
          operations and renovations. The firm continues to build on its
          services to ensure that client needs are met. Its highly qualified
          engineers are focused, experienced, team-oriented, and dedicated to
          servicing every project of which they are involved.
        </p>
      </section>

      {/* Service Cards Section */}
      <section className="services-grid-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
            />
          ))}
        </div>
      </section>

      {/* Highlight Section */}
      <section className="services-highlight">
         <div className="highlight-image-services">
          <img src={servicesTeam} alt="Team working on construction site" />
        </div>
        <div className="highlight-text-services">
          <p>
            <strong>
              AA Building is comprised of professional engineers, architects,
              certified inspection technicians, and top-tier administrators;
              each are dedicated to the safety of life and property.
            </strong>
          </p>
        </div>
       
      </section>
    </div>
  );
}