import React from "react";
import "./style.scss";

export default function LocationCard(props) {
  const { title, img } = props.locationType;
  const [cardStyle, setCardStyle] = React.useState({
    background: `url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  });
  return (
    <div style={cardStyle} className="locationCard">
      <h2>{title}</h2>
      <p>1,087 Hotels</p>
    </div>
  );
}
