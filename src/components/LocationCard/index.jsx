import React from "react";
import "./style.scss";

export default function LocationCard(props) {
  console.log(props.locationType.title);

  return (
    <div style={{ background: "red" }} className="locationCard">
      <h2>{props.locationType.title}</h2>
      <p>1,087 Hotels</p>
    </div>
  );
}
