import React from "react";
import apartment from "../../imgs/apartment.jpg";
import "./style.scss";

export default function BrowseCard(props) {
  const { title } = props;
  return (
    <div className="browseCard">
      <img src={apartment} alt="apartment" />
      <h3>{title}</h3>
      <p>836 276 {title}</p>
    </div>
  );
}
