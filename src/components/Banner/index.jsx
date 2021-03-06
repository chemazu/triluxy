import React, { useContext } from "react";
import { useInput } from "../../hooks/input-hook";
import { SearchContext } from "../../context/SearchContext";

import Button from "../Button";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const history = useNavigate();

  const context = useContext(SearchContext);
  const { searchQuery, setSearchQuery } = context;
  const {
    value: location,
    change: changeLocation,
    reset: resetLocation,
  } = useInput("");
  const {
    value: checkIn,
    change: changeCheckIn,
    reset: resetCheckIn,
  } = useInput("");
  const {
    value: checkOut,
    change: changeCheckOut,
    reset: resetCheckOut,
  } = useInput("");
  const { value: adult, change: changeAdult, reset: resetAdult } = useInput("");
  const {
    value: children,
    change: changeChildren,
    reset: resetChildren,
  } = useInput("");
  const { value: room, change: changeRoom, reset: resetRoom } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery({ location, checkIn, checkOut, adult, room });

    resetLocation();
    resetAdult();
    resetCheckIn();
    resetCheckOut();
    resetRoom();
    resetChildren();
    history("/search");
  };

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
              {...changeLocation}
              placeholder="Where are you going?"
            />
            <datalist id="listid">
              <option label="Popular Destinations" value="&zwnj;" />{" "}
              {/* write a condition for this , incase someone sends this above empty value */}
              <option value="Abuja" label="Nigeria" />
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
            <input type="date" {...changeCheckIn} />
          </div>
          <div className="search-item">
            <label>Check-out </label>
            <input type="date" {...changeCheckOut} />
          </div>
        </div>

        <div className="info-search">
          <div className="search-item">
            <label>adults </label>
            <input type="number" placeholder="adults" {...changeAdult} />
          </div>

          <div className="search-item">
            <label>children</label>

            <input type="number" placeholder="children" {...changeChildren} />
          </div>
          <div className="search-item">
            <label>rooms </label>

            <input type="number" placeholder="rooms" {...changeRoom} />
          </div>
        </div>
      </form>
      {/* <input type="submit" placeholder="Check in" value="search" /> */}
      <Button title="Find Hotel" className="sec" onClick={handleSubmit} />
    </div>
  );
}
