import React from "react";
import "../styles/pages.css";
import WorkCard from "../components/WorkCard";

// Example work images (replace with your actual ones)
import work1 from "../assets/work1.jpeg";
import work2 from "../assets/work2.jpeg";
import work3 from "../assets/work3.jpeg";
import work4 from "../assets/work4.jpeg";

export default function Work() {
  const projects = [
    {
      image: work1,
      title: "High-Rise Inspection",
      address: "123 Main St, New York, NY",
    },
    {
      image: work2,
      title: "Bridge Project",
      address: "Queensboro Bridge, NYC",
    },
    {
      image: work3,
      title: "Renovation Support",
      address: "456 Broadway, Brooklyn, NY",
    },
    {
      image: work4,
      title: "Industrial Facility",
      address: "789 Industrial Ave, Bronx, NY",
    },
        {
      image: work1,
      title: "Industrial Facility",
      address: "789 Industrial Ave, Bronx, NY",
    },
        {
      image: work2,
      title: "Industrial Facility",
      address: "789 Industrial Ave, Bronx, NY",
    },
  ];

  return (
    <div className="work">
      {/* Hero Section */}
      <section className="work-hero">
        <div className="work-hero-text">
          <h1>Our Work</h1>
        </div>
      </section>

      {/* Work Gallery */}
      <section className="work-gallery">
        <div className="work-grid">
          {projects.map((project, index) => (
            <WorkCard
              key={index}
              image={project.image}
              title={project.title}
              address={project.address}   
            />
          ))}
        </div>
      </section>
    </div>
  );
}
