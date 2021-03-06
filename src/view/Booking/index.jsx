import React from "react";
import Button from "../../components/Button";
import Subscribe from "../../components/Subscribe";
import "./style.scss";
import mariot from "../../imgs/mariot.jpg";
import { Link } from "react-router-dom";
export default function Booking() {
  const { result, bookingDetails } = JSON.parse(
    localStorage.getItem("booking")
  );
  console.log(bookingDetails);
  const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
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
    slug
  } = result[0];
  const { checkIn, checkOut, roomInfo } = bookingDetails;
  const typeFilter = Object.keys(roomInfo)[0];
  const selectedRoom = roomType.filter((item) => {
    return item.slug == typeFilter;
  });

  const inCheck = new Date(checkIn);
  const outCheck = new Date(checkOut);

  var duration;
  duration = Math.abs(outCheck - inCheck);
  duration = duration / (1000 * 60 * 60 * 24);
  console.log(duration);

  return (
    <div className="booking-wrapper">
      <h3>Complete your booking at {title} - it only takes 30 seconds</h3>
      <div className="desktop">
        <div className="left">          
          <div className="booking-info">
          <div className="booking-detail">
            <h3 >Your booking details</h3>
            <div className="duration">
              <div style={{borderRight: "1px solid #e7e7e7",paddingLeft:"0px"}}>
                <p>Check In:</p>
                <p>{inCheck.toLocaleDateString("en-GB", options)}</p>
              </div>
              <div>
                <p>Check Out:</p>
                <p>{outCheck.toLocaleDateString("en-GB", options)}</p>
              </div>
            </div>
            <div className="length">
              
              
              <p>Total length of stay:</p>
              <h4>{duration} night(s)</h4>

            </div>
            <Link to={`/hotel/${slug}`}>
              Travelling on different dates?{" "}
            </Link>
          </div>
          <div className="roomType">
            <p>You selected: </p> <h3>{selectedRoom[0].title}</h3>
            <Link to={`/hotel/${slug}`}>Change your selection</Link>
          </div>
          </div>
          <div className="price-summary">price summary</div>
        </div>
        <div className="right">
          <div className="hotel-detail" style={{ padding: "15px 0px" }}>
            <img src={mariot} />
            <div className="hotel-text">
              <h2>{title}</h2>
              <p style={{ color: "#febb02" }}>
                {rating[0]} &#9734; &#9733; &#9733; &#9733; &#9733;
              </p>
              <span style={{ color: "green" }}>
                This property is in a good location it has {review.length}{" "}
                Google reviews
              </span>
              <span style={{ display: "block" }}> {address}</span>
            </div>
          </div>
          <div className="enter-info">
            <h4>Your Details</h4>
            <form>
              <div className="booking-item">
                <label>Name:</label>
                <input placeholder="Enter your full name" />
              </div>
              <div className="booking-item">
                <label>Email:</label>
                <input placeholder="Enter your email" type="email" />
              </div>
              <div className="booking-item">
                <label>Phone:</label>
                <input placeholder="Enter your phone number" type="email" />
              </div>
              <div className="booking-item">
                <label>Additional Details:</label>
                <input placeholder="Additional Details" type="email" />
              </div>
              <Button title="Pay at Hotel" />
              <Button title="Pay Now" />
            </form>
            <p>
              We use your personal data to process services that you have
              applied for, to contact you with newsletters and deal offers, and
              for personalised content and ads. You consent to our Data Policy
              if you click the above. You can withdraw consent and contact our
              Data Protection Officer at any time.
            </p>
          </div>
        </div>
      </div>
      <div className="mobile"></div>
    </div>
  );
}
