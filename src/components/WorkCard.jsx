import React from "react";
import "../styles/components.css"; 

export default function WorkCard({ image, title, address }) {
  return (
    <div className="work-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{address}</p>
    </div>
  );
}
