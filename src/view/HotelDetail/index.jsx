import React, { useState } from "react";
import useSearch from "../../hooks/search-hook";
import { useInput } from "../../hooks/input-hook";
import Button from "../../components/Button";
import RoomOption from "../../components/RoomOption";
import { useParams, useNavigate } from "react-router-dom";
import ImportContent from "../../resource";
import MiniSearch from "../../components/MiniSearch";
import CarouselApp from "../../components/Carousel";

import "./style.scss";

export default function HotelDetail() {
  const history = useNavigate();
  const { data, bar } = ImportContent();
  const { id } = useParams();

  const [changeBooking, setChangeBooking] = useState(false);
  const [roomInfo, setRoomInfo] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(1);
  const { result, length } = useSearch(id, data);

  const [price, setPrice] = useState(0);
  const [secondPrice, setSecondPrice] = useState(10000000000000);
  const control = { setPrice, setSecondPrice };
  const defaultAmmenities = [
    "Pool",
    "City View",
    "Barbeque",
    "Internet",
    "Parking",
  ];
  const {
    title,
    address,
    roomType,
    description,
    review,
    rating,
    ammenities,
    terms,
  } = result[0];
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
    localStorage.setItem("booking", JSON.stringify({ bookingDetails, result }));
    resetAdult();
    resetCheckIn();
    resetCheckOut();
    resetChildren();
    history("/booking");
  };
  return (
    <div className="hotelDetail">
      <div className="desktop">
        <div className="upper">
          <div className="left">
            <MiniSearch control={control} />
            <div className="amenities-detail">
              {ammenities.map((item) => (
                <div className="single-amenity">
                  <img src={bar} alt="bar" />
                  <p>{defaultAmmenities[item]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <div className="hotel-title" style={{ padding: "15px 0px" }}>
              <h2>{title}</h2>
              <p style={{ color: "#febb02" }}>
                {rating[0]} &#9734; &#9733; &#9733; &#9733; &#9733;
                <span style={{ padding: "0px 10px", color: "green" }}>
                  {review.length} Google reviews
                </span>
              </p>
              <p style={{ padding: "5px 0px" }}> {address}</p>
              <p>{description[0]}</p>

              {/* <p>Address: {address}</p>
            <p>
              {rating[0]} &#9734; &#9733; &#9733; &#9733; &#9733;{" "}
              {review.length} Google reviews
            </p>
            <p>{description[0]}</p> */}
            </div>
            <CarouselApp />
          </div>
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
                    <input
                      type="number"
                      placeholder="adults"
                      {...changeAdult}
                    />
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
      <div className="mobile">
        <div className="right">
          <div className="hotel-title" style={{ padding: "15px 0px" }}>
            <h2>{title}</h2>
            <p style={{ color: "#febb02" }}>
              {rating[0]} &#9734; &#9733; &#9733; &#9733; &#9733;
              <span style={{ padding: "0px 10px", color: "green" }}>
                {review.length} Google reviews
              </span>
            </p>
            <p style={{ padding: "5px 0px" }}> {address}</p>
            <p>{description[0]}</p>
          </div>
          <CarouselApp />
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
