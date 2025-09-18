import React from "react";
import "../styles/components.css"; 

export default function ServiceCard({ icon, title, description, color }) {
  return (
    <div className="service-card" style={{ borderColor: color }}>
      <div className="icon" style={{ color: color }}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
