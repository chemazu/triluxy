import React, { useState } from "react";
import useSearch from "../../hooks/search-hook";
import { useParams } from "react-router-dom";
import ImportContent from "../../resource";

import MiniSearch from "../../components/MiniSearch";
import CarouselApp from "../../components/Carousel";

import "./style.scss";

export default function HotelDetail() {
  const { data, bar } = ImportContent();
  const { id } = useParams();
  const { result, length } = useSearch(id, data);
  const [price, setPrice] = useState(0);
  const [secondPrice, setSecondPrice] = useState(10000000000000);
  const control = { setPrice, setSecondPrice };
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
      <div className="desktop">
        <div className="left">
          <MiniSearch control={control} />
          <div className="amenities-detail">
            {ammenities.map((item) => (
              <div className="single-amenity">
                <img src={bar} alt="bar" />
                <p>{item}</p>
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
      <div className="mobile"></div>
    </div>
  );
}
