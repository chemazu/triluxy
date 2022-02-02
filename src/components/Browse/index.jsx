import React from "react";
import BrowseCard from "../BrowseCard";
import "./style.scss";

export default function Browse(props) {
  const { title, subtext } = props;
  return (
    <div className="browse">
      <h1>{title}</h1>
      <p>{subtext}</p>
      <div className="browseCard-container">
        <BrowseCard title="Hotels" />
        <BrowseCard title="Apartments" />
        <BrowseCard title="Resorts" />
        <BrowseCard title="Villas" />
        <BrowseCard title="Cabins" />
        <BrowseCard title="Service" />
      </div>
    </div>
  );
}
