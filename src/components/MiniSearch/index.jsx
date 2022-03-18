import React, { useContext, useState } from "react";
import { useInput } from "../../hooks/input-hook";
import Button from "../../components/Button";
import "./style.scss";

import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

export default function MiniSearch(props) {
  const history = useNavigate();
  const context = useContext(SearchContext);
  const { setPrice, setSecondPrice } = props.control;

  const { searchQuery, setSearchQuery } = context;

  const HandleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery({ location, checkIn, checkOut, adult, room });
    resetLocation();
    resetAdult();
    resetCheckIn();
    resetCheckOut();
    resetRoom();
    resetChildren();
    setPrice(0);
    setSecondPrice(10000000000000);
    history("/search");
  };

  //input element state and functions
  const {
    value: location,
    change: changeLocation,
    reset: resetLocation,
  } = useInput(searchQuery.location);
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
  return (
    <div className="two">
      <h3>Search</h3>
      <form onSubmit={HandleSubmit}>
        <div className="place-search">
          <div className="search-item">
            <label>Destination </label>
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
            <label>kids</label>
            <input type="number" placeholder="kids" {...changeChildren} />
          </div>
          <div className="search-item">
            <label>rooms </label>
            <input type="number" placeholder="rooms" {...changeRoom} />
          </div>
        </div>
        <div
          style={{
            padding: "10px 0",
            textAlign: "center",
            width: "100%",
          }}
          className="small-button"
        >
          <Button title="Find Hotel" type="submit" />
        </div>
      </form>
    </div>
  );
}
