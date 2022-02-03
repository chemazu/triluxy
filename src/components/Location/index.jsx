import React from "react";
import "./style.scss";
import LocationCard from "../LocationCard";
import manchester from "../../imgs/manchester.jpg";
import berlin from "../../imgs/berlin.jpg";
import ghana from "../../imgs/ghana.jpg";
import sydney from "../../imgs/sydney.jpg";
import rome from "../../imgs/rome.jpg";
export default function Location(props) {
  const { title, subtext } = props;
  const locationUpper = [
    { title: "Rome, Italy", img: rome },
    { title: "Sydney, Australia", img: sydney },
    { title: "Berlin, Germany", img: berlin },
  ];
  const locationLower = [
    { title: "Manchester, United Kingdom", img: manchester },
    { title: "Accra, Ghana", img: ghana },
  ];
  return (
    <div className="location">
      <h2>{title}</h2>
      <p>{subtext}</p>
      <div className="locationCardWrapper">
        <div className="upper">
          {locationUpper.map((item) => {
            return <LocationCard locationType={item} />;
          })}
        </div>
        <div className="lower">
          {locationLower.map((item) => {
            return <LocationCard locationType={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
