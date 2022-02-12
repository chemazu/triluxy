import React from "react";
import FilterItem from "../../components/FilterItem";
import SearchCard from "../../components/SearchCard";
import "./style.scss";

export default function Search() {
  return (
    <div className="searchResults">
      <div className="result-bar">
      <h4>Home: UAE: Dubai: Search results</h4> 
      </div>
      <div className="result-content">
        <div className="filter">
          <h3>Filter</h3>
          <FilterItem />
        </div>
        <div className="results">
          <div className="sort">
            <h2>Dubai,UAE:</h2><span>  452 hotels out of 888 available</span>
            <div className="price">
              <div className="star">Low to High</div>
              <div className="star">High to low</div>
              <div className="star last">Star Rating</div>
            </div>
          </div>
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
        </div>

      </div>
    </div>
  );
}
