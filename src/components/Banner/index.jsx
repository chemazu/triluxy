import React from "react";
import Button from "../Button";
import "./style.scss";

export default function Banner() {
  return (
    <div className="banner">
      <h1> Find your next stay</h1>
      <p>Search deals on hotels, homes, and much more...</p>
      <form>
        <div className="place-search">
        <div className="search-item">
          <label>Where are you going ? </label>
          <input
            type="text"
            list="listid"
            placeholder="Where are you going ?"
          />
          <datalist id="listid">
            <option label="Popular Destinations" value="&zwnj;" />{" "}
            {/* write a condition for this , incase someone sends this above empty value */}
            <option value="Abuja " label="Nigeria" />
            <option value="Lagos" label="Nigeria" />
            <option value="Ikeja" label="Nigeria" />
            <option value="Lekki" label="Nigeria" />
            <option value="Ibadan" label="Nigeria" />
          </datalist>
        </div>
        </div>
        
        <div className="date-search">
          <div className="search-item">
            <label>Check-in </label>
            <input type="date" />
          </div>
          <div className="search-item">
            <label>Check-out </label>
            <input type="date" />
          </div>
        </div>

        <div className="info-search">
          <div className="search-item">
            <label>adults </label>
            <input type="number" placeholder="adults" />
          </div>

          <div className="search-item">
            <label>children</label>

            <input type="number" placeholder="children" />
          </div>
          <div className="search-item">
            <label>rooms </label>

            <input type="number" placeholder="rooms" />
          </div>
        </div>
      </form>
      {/* <input type="submit" placeholder="Check in" value="search" /> */}
      <Button title="Find Hotel"/>

    </div>
  );
}
