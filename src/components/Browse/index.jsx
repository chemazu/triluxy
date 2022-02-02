import React from "react";
import BrowseCard from "../BrowseCard";
import "./style.scss";
import hotel from "../../imgs/hotel.jpg";
import apartment from "../../imgs/apartment.jpg";
import beach from "../../imgs/beach.jpg";
import villa  from "../../imgs/villa.jpg";
import resort from "../../imgs/resort.jpg";
import cabin from "../../imgs/apartment.jpg";


export default function Browse(props) {
  const { title, subtext } = props;
  const hotelTypes = [
    { title: "Hotels", img: hotel },
    { title: "Apartments", img: apartment },
    { title: "Cabin", img: cabin },
    { title: "Villa", img: villa },
    { title: "Beach", img: beach },
    { title: "Resort", img: resort },

  ];

  return (
    <div className="browse">
      <h2>{title}</h2>
      <p>{subtext}</p>
      <div className="browseCard-container">
        {hotelTypes.map((item) => {
          return <BrowseCard hotelType={item} />;
        })}
        {/* <BrowseCard title="Apartments" img={apartment} /> */}

        {/* <BrowseCard title="Apartments" />
        <BrowseCard title="Resorts" />
        <BrowseCard title="Villas" />
        <BrowseCard title="Cabins" />
        <BrowseCard title="Beach" /> */}
      </div>
    </div>
  );
}
