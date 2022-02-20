import React, { useState } from "react";
import "./style.scss";
import Button from "../../components/Button";

export default function RoomOption(props) {
  const { title, price, size, bed, bath, slug } = props.roomType;
  const count = props.count;
  const setCount = props.setCount;
  const [displayCount, setDisplayCount] = useState(1);
  const [showResults, setShowResults] = React.useState(false);
  
  const openMenu = () => {
    setShowResults(true);
    props.setBooking(true);
  };
  const handleSlug = (e) => {
    const { value } = e.target;
    props.setRoom({ ...props.getRoom, [value]: slug });
  };

  const increaseCount = (e) => {
    setDisplayCount(displayCount + 1);
    setCount(count + 1);
    if (count <= 1) {
      props.setTotalPrice(count * price);
    }
    props.setTotalPrice(props.totalPrice + price);
    const { value } = e.target;

    props.setRoom({ ...props.getRoom, [value]: [true, displayCount] });
  };
  const decreaseCount = (e) => {
    setDisplayCount(displayCount - 1);
    setCount(count - 1);
    const { value } = e.target;

    if (displayCount <= 2) {
      setCount(1);
      setDisplayCount(1);
      props.setTotalPrice(0);
      props.setRoom({ ...props.getRoom, [value]: [false, false] });
    }
    if (displayCount > 2) {
      props.setTotalPrice(props.totalPrice - price);

      props.setRoom({ ...props.getRoom, [value]: [true, displayCount - 2] });
    }
  };
  const handleButton = (e) => {
    openMenu();
    handleSlug(e);
    increaseCount(e);
  };
  return (
    <div className="room-options">
      <div className="top">
        <h4>{title}</h4>
        <p>Price: {price}</p>
        <div> &#9733; &#9733; &#9733; &#9734; &#9734;</div>
      </div>
      <div className="middle">
        <p>Size: {size}</p>
        {showResults ? (
          <div className="counter">
            <button value={slug} onClick={increaseCount}>
              +
            </button>
            <span> {displayCount - 1}</span>
            <button
              value={slug}
              onClick={decreaseCount}
            >
              -
            </button>
          </div>
        ) : (
          <Button value={slug} title="Book Room" onClick={handleButton} />
        )}
      </div>
      <div className="bottom">
        <p>Bed:{bed}</p>
        <p>Bath: {bath} </p>
      </div>
    </div>
  );
}
