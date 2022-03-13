import React, { useContext, useState } from "react";
import useSearch from "../../hooks/search-hook";
import { useInput } from "../../hooks/input-hook";
import { useNavigate } from "react-router-dom";


import { SearchContext } from "../../context/SearchContext";
import "./style.scss";
import ImportContent from "../../resource";
import Banner from "../../components/Banner";
import SearchCard from "../../components/SearchCard";
import Button from "../../components/Button";

export default function Search() {
  const filterOptions = [
    "Top picks for your search",
    "Stars (highest first)",
    "Stars (lowest first)",
    "Top reviewed",
  ];
  const [show, setShow] = useState(false);
  const [filterDetail, setFilterDetail] = useState(filterOptions[0]);
  const { sort, data, person, calendar, search, filter } = ImportContent();
  const context = useContext(SearchContext);
  const { searchResult, setSearchResult } = context;

  const { result, length } = useSearch(searchResult, data);
  const hideAction = (e) => {
    setShow(false);
    setFilterDetail(filterOptions[e.target.value]);
  };
  const {
    value: location,
    change: changeLocation,
    reset: resetLocation,
  } = useInput(searchResult.location);
  const history = useNavigate();


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
    setSearchResult({ location, checkIn, checkOut, adult, room });

    resetLocation();
    resetAdult();
    resetCheckIn();
    resetCheckOut();
    resetRoom();
    resetChildren();
    history("/search");
  };

  return (
    <div className="searchResults">
      <div className="desktop">
        <div className="left">
          <div className="one">
            <span>Home {"> "} </span>
            <span>
              {searchResult.location} {"> "}
            </span>
            <span>Search result : </span>
          </div>
          <div className="two">
            <h3>Search</h3>
            <div className="place-search">
            <div className="search-item">
            <label>Destination </label>
            <input
              type="text"
              list="listid"
              {...changeLocation}
              placeholder="Where are you going?"
            />
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
          </div>
          <div className="three"></div>
        </div>
        <div className="right">
          <div className="top">
            <p>
              {searchResult.location}: {length} properties found
            </p>
            <div>
              <div
                className="sort-options"
                onClick={() => {
                  setShow(true);
                }}
              >
                <img src={sort} alt="" />
                <p>{filterDetail}</p>
              </div>
              {show && (
                <div className="hidden-item">
                  <option onClick={hideAction} value={0}>
                    Top picks for your search
                  </option>
                  <option onClick={hideAction} value={1}>
                    Stars (highest first)
                  </option>
                  <option onClick={hideAction} value={2}>
                    Stars (lowest first)
                  </option>
                  <option onClick={hideAction} value={3}>
                    Top reviewed
                  </option>
                </div>
              )}
            </div>
          </div>
          <div className="card-holder">
          {result.map(item => <SearchCard item={item} key={item.id} />)}
        </div>
        </div>
      </div>
      <div className="mobile">
        <div className="search">

          <div className="place-search">
            <div className="search-item">
              <img src={search} alt="" />
              <input
                type="text"
                list="listid"
                {...changeLocation}
                placeholder="Where are you going?"
              />
              <datalist id="listid">
                <option label="Popular Destinations" value="&zwnj;" />{" "}
                <option value="Abuja" label="Nigeria" />
                <option value="Lagos" label="Nigeria" />
                <option value="Ikeja" label="Nigeria" />
                <option value="Lekki" label="Nigeria" />
                <option value="Ibadan" label="Nigeria" />
              </datalist>


            </div>


          </div>
          <div className="mini-result"><img src={calendar} />
            <span>{searchResult.checkIn} - {searchResult.checkOut}</span><img src={person} />
            <span>{searchResult.adult} adults</span></div>

        </div>
        <div className="mini-result">
          <div>
            <img src={sort} />
            <span>Sort</span>
          </div>
          <div>
            <img src={filter} />
            <span>Filter</span></div>
        </div>
        <div className="card-holder">
          {result.map(item => <SearchCard item={item} key={item.id} />)}
        </div>
        <div className="pag">
        <Button style={{ background: "#003580", color: "#fff" }} title="Next" />

          <div className="div">
            <span>1 of 11</span>
          </div>
          <Button style={{ background: "#003580", color: "#fff" }} title="Next" />
        </div>

      </div>
    </div>
  );
}
