import React from "react";
import "./style.scss";

export default function BrowseCard(props) {
  const { title,img } = props.hotelType;
  return (
    <div className="browseCard">
      <img src={img} alt="apartment" />
      <h3>{title}</h3>
      <p>836 276 {title}</p>
    </div>
  );
}
