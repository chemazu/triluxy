import React from "react";
import Button from "../../components/Button";
import Subscribe from "../../components/Subscribe";
import "./style.scss";
import mariot from "../../imgs/mariot.jpg"

export default function Booking() {
  return (
    <div className="booking-wrapper">
      <h3>
        Complete your booking at Lagos Marriott Hotel Ikeja - it only takes 30 seconds
      </h3>
      <div className="booking">
        <div className="left">
          <h4>Your Details</h4>
          <form>
          <div className="booking-item">
            <label>Name:</label>
            <input placeholder="Enter your full name" />
          </div>
          <div className="booking-item">
            <label>Email:</label>
            <input
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="booking-item">
            <label>Phone:</label>
            <input
              placeholder="Enter your phone number"
              type="email"
            />
          </div>
          <div className="booking-item">
            <label>Additional Details:</label>
            <input
              placeholder="Additional Details"
              type="email"
            />
          </div>
              <Button title="Pay at Hotel" />
              <Button title="Pay Now" />
          </form>
          
          <p>
              We use your personal data to process services that you have applied for, to contact you with newsletters and deal offers, and for personalised content and ads. You consent to our Data Policy if you click the above. You can withdraw consent and contact our Data Protection Officer at any time.
          </p>
        </div>
        <div className="right">
          <div className="hotel-info">
            <img src={mariot} />
            <div>
              <h4>Lagos Marriott Hotel Ikeja</h4>
              <p>
                Address: 122 Joel Ogunnaike St, GRA 100271, Ikeja</p><p> Phone: 0908
                825 2020
              </p>
            </div>
          </div>
          <div className="booking-request">
            <div className="up">
              <div className="check-in">Check in Sat, 19 Feb 2022 12:00 PM</div>
              <p>1 Night</p>
              <div className="check-out">
                Check out Sun, 20 Feb 2022 12:00 PM
              </div>
            </div>
            <div className="down">
              <p>2 rooms </p>
              <p>1 adult</p>
              <p>1 Night</p>

              <Button title="change" />
            </div>
          </div>
          <div className="room-selection">double room</div>
          <div className="total">total</div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
}
