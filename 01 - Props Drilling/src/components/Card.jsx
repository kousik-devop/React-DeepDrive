import React from "react";
import "./Card.css";
import { Bookmark } from "lucide-react";

function Card({company, logo, posted, title, type, level, salary, location}) {
  return (
    <div className="card">
      <div className="top">
        <img src={logo} alt={company} />
        <button>
          Saved
          <Bookmark size={10} />
        </button>
      </div>
      <div className="center">
        <h3>
          {company} <span>{posted}</span>
        </h3>
        <h1>{title}</h1>
        <div className="tag">
          <h4>{type}</h4>
          <h4>{level}</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{salary}</h3>
          <p>{location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
}

export default Card;
