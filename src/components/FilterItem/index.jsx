import React, { useState } from "react";
import Button from "../Button";
import "./style.scss";

export default function FilterItem() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const changeMin = (e) => {
    console.log(e.target.value);
    setMin(e.target.value);
  };
  const changeMax = (e) => {
    console.log(e.target.value);
    setMax(e.target.value);
  };
  return (
    <div className="filter-item">
      {/* use case and switch to loop through the filter options */}
      <div className="search filter-action">
        <h4>Search</h4>
        <div className="filter-subaction" className="filter-subaction">
          <input type="search" />
          <p>Search</p>
          
        </div>
      </div>
      <div className="budget filter-action">
        <h4>Price(per night)</h4>
        <div className="filter-subaction">
          <input type="checkbox" />
          <span>₦ {0}</span>-<span>₦ {23700}</span>
        </div>
        <div className="filter-subaction">
          <input type="checkbox" />
          <span>₦ {23701}</span>-<span>₦ {56700}</span>
        </div>
        <div className="filter-subaction">
          <input type="checkbox" />
          <span>₦ {56701}</span>-<span>₦ {96700}</span>
        </div>
        <div className="filter-subaction">
          <input type="checkbox" />
          <span>₦ {96701}</span>-<span>₦ {126700}</span>
        </div>
        <div className="filter-subaction">
          <input type="checkbox" />
          <span>₦ {126701}</span>-<span>₦ {196700}</span>
        </div>
      </div>
      <div className="filter-amenities filter-action">
        <h4>Amenities</h4>
        <div className="filter-subaction">
          <input type="checkbox" />
          <span>Apartments </span>
          <span>79</span>
        </div>
        <div className="filter-subaction">
          <input type="checkbox" />
          <span>Hotels </span>
          <span>69</span>
        </div>
        <div className="filter-subaction">
          <input type="checkbox" />
          <span>Breakfast Included </span>
          <span>61</span>
        </div>
        <div className="filter-subaction">
          <input type="checkbox" />
          <span>Guest houses</span>
          <span>19</span>
        </div>
        <div className="filter-subaction">
          <input type="checkbox" />
          <span>Resorts </span>
          <span>39</span>
        </div>
      </div>
      <div className="review filter-action">
        <h4>Reviews </h4>
        <div className="filter-subaction">
          <input type="checkbox" />
          <span>1 star </span>
        </div>
        <div className="filter-subaction">
          <input type="checkbox" />
          <span>2 stars </span>
        </div>
        <div className="filter-subaction">
          <input type="checkbox" />
          <span>3 stars </span>
        </div>
        <div className="filter-subaction">
          <input type="checkbox" />
          <span>4 stars </span>
        </div>
        <div className="filter-subaction">
          <input type="checkbox" />
          <span>5 stars </span>
        </div>
      </div>
    </div>
  );
}
