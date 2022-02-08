import React from "react";
import FilterItem from "../../components/FilterItem";
import SearchCard from "../../components/SearchCard";
import "./style.scss";

export default function Search() {
  return <div className="searchResults">
    <div className="result-bar"></div>
    <div className="result-content">
    <div className="filter">
      <FilterItem/>
      <p>Hotel Name</p>
      <p>Hotel Name</p>
      <p>Hotel Name</p>
      <p>Hotel Name</p>
      <p>Hotel Name</p>
      <p>Hotel Name</p>
      <p>Hotel Name</p>
    </div>
    <div className="results">
      <div className="sort">
        <p>Dubai, United Arab Emirates: 452 hotels out of 888 available</p>
        <p>Sort by:</p>
        <div className="price">Price</div>
        <div className="star">Star</div>

      </div>
      <SearchCard/>
      <SearchCard/>
      <SearchCard/>
      <SearchCard/>
      <SearchCard/>
      


    </div>
    <div className="filter">
      <p>Hotel Name</p>
    </div>

    </div>
    
  </div>;
}
