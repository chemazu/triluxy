import React from "react";
import "./style.scss";
import Button from "../../components/Button";

export default function RoomOption(props) {
  const { title, price, size, bed, bath } = props.roomType;
  return (
    <div className="room-options">
      <div className="top">
        <h4>{title}</h4>
        <p>Price: {price}</p>
        <div> &#9733; &#9733; &#9733; &#9734; &#9734;</div>
      </div>
      <div className="middle">
        <p>Size: {size}</p> <Button title="Book Room" />
      </div>
      <div className="bottom">
        <p>Bed:{bed}</p>
        <p>Bath: {bath} </p>
      </div>
    </div>
  );
}
