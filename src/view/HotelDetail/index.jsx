import React, { useState } from "react";
import useSearch from "../../hooks/search-hook";

import "./style.scss";
import { useInput } from "../../hooks/input-hook";
import Button from "../../components/Button";
import CarouselApp from "../../components/Carousel";
import bar from "../../imgs/bar.svg";
import RoomOption from "../../components/RoomOption";
import { useParams } from "react-router-dom";
import ImportContent from "../../resource";

export default function HotelDetail() {
  const { data } = ImportContent();
  const { id } = useParams();
  const [changeBooking, setChangeBooking] = useState(false);
  const [roomInfo, setRoomInfo] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(1);
  const { result, length } = useSearch(id, data);
  console.log(result);

  const {
    value: checkIn,
    change: changeCheckIn,
    reset: resetCheckIn,
  } = useInput("");
  const {
    value: checkOut,
    change: changeCheckOut,
    reset: resetCheckOut,
  } = useInput("");
  const { value: adult, change: changeAdult, reset: resetAdult } = useInput("");
  const {
    value: children,
    change: changeChildren,
    reset: resetChildren,
  } = useInput("");
  const bookingDetails = {
    roomInfo,
    count: count - 1,
    totalPrice,
    checkIn,
    checkOut,
    adult,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(bookingDetails);
    resetAdult();
    resetCheckIn();
    resetCheckOut();
    resetChildren();
  };

  const {
    title,
    address,
    roomType,
    description,
    review,
    rating,
    ammenities,
    terms,
    hotelType,
    roomNumber,
  } = result[0];

  return (
    <div className="hotel-detail">
      <div className="hotel-title">
        <h1>{title}</h1>
        <p>Address: {address}</p>
        <p>
          {rating[0]} &#9734; &#9733; &#9733; &#9733; &#9733; {review.length}{" "}
          Google reviews
        </p>
        <p>{description[0]}</p>
      </div>
      <div className="gallery">
        <div className="hotel-summary">
          <h2>Hotel Details</h2>
          <div className="map"></div>
          <div className="hotel-type">
            <div>
              <strong>Hotel type</strong>
              <p>{hotelType}</p>
            </div>
            <div>
              <strong>Number of Rooms</strong>
              <p>{roomNumber}</p>
            </div>
            <div>
              <strong>Room Types</strong>
              <p>5</p>
            </div>
          </div>
          <div className="amenities-detail">
            {ammenities.map((item) => (
              <div className="single-amenity">
                <img src={bar} alt="bar" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <CarouselApp />
      </div>
      <div className="description">
        <div className="description-text">
          <p>{description[0]}</p>
          <p>{description[1]}</p>
          <div className="terms">
            <h3>Terms and Conditions</h3>
            {terms.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
        <div className="room-booking">
          <h4>
            Select a room type and the number of rooms you want to reserve.
          </h4>
          <div className="search">
            <form onSubmit={handleSubmit}>
              <div className="date-search">
                <div className="search-item">
                  <label>Check-in </label>
                  <input type="date" {...changeCheckIn} />
                </div>
                <div className="search-item">
                  <label>Check-out </label>
                  <input type="date" {...changeCheckOut} />
                </div>
              </div>

              <div className="info-search">
                <div className="search-item">
                  <label>adults </label>
                  <input type="number" placeholder="adults" {...changeAdult} />
                </div>

                <div className="search-item">
                  <label>children</label>

                  <input
                    type="number"
                    placeholder="children"
                    {...changeChildren}
                  />
                </div>
              </div>
              {changeBooking ? (
                <div className="addBooking">
                  <p>{count - 1}Rooms 1 Night</p>
                  <p>AMOUNT:{totalPrice}</p>
                  <Button onClick={handleSubmit} title="Book Now" />
                </div>
              ) : null}
            </form>
          </div>
          {roomType.map((roomType) => (
            <RoomOption
              roomType={roomType}
              setBooking={setChangeBooking}
              key={roomType.slug}
              getRoom={roomInfo}
              setRoom={setRoomInfo}
              count={count}
              setCount={setCount}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          ))}
          {changeBooking ? (
            <div className="addBooking">
              <p>{count - 1}Rooms 1 Night</p>
              <p>AMOUNT:{totalPrice}</p>
              <Button onClick={handleSubmit} title="Book Now" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
