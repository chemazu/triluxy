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
import { useEffect } from "react/cjs/react.production.min";

export default function Search() {
  //dropdown options for the filter option
  const filterOptions = [
    "Top picks for your search",
    "Stars (highest first)",
    "Stars (lowest first)",
    "Top reviewed",
  ];
  //controls visiblity of drop downs
  const [show, setShow] = useState(false);

  //displays the current filter option
  const [filterDetail, setFilterDetail] = useState(filterOptions[0]);

  const { sort, data, person, calendar, search, filter } = ImportContent();
  const context = useContext(SearchContext);

  //search query
  const { searchQuery, setSearchQuery } = context;

  //search result
  const { result, length } = useSearch(searchQuery, data);
  const [displayResult, setDisplayResult] = useState(result);

  // const fish = result.sort((a, b) => {
  //   return b.rating[0] - a.rating[0];
  // });

  // const reverse = result.sort((a, b) => {
  //   return a.rating[0] - b.rating[0];
  // });

  // const review = result.sort((a, b) => {
  //   return b.review.length - a.review.length;
  // });
  const func = (key) => {
    return;
    result.sort((a, b) => {
      switch (key) {
        case "cow":
          return b.review.length - a.review.length;
          break;
        case "fish":
          return b.rating[0] - a.rating[0];
          break;
        case 1:
          return b.review.length - a.review.length;
          break;
        default:
          return a.rating[0] - b.rating[0];
          break;
      }
    });
  };

  // const food = [result, fish, reverse, review];

  //changes drop down visiblity
  const hideAction = (e) => {
    setShow(false);
    setFilterDetail(filterOptions[e.target.value]);
    func(e.target.value);
  };
  console.log(result);
  //input element state and functions
  const {
    value: location,
    change: changeLocation,
    reset: resetLocation,
  } = useInput(searchQuery.location);
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

  //result options

  //displays the current result option

  // const [displayResult, setDisplayResult]= useState(resultOptions[0])

  //sort function

  // const sortedResult =(c)=> {result.sort((a,b)=>{
  //   if (c==1){
  //   return b.rating[0]-a.rating[0]
  //   }
  //   else
  //   return a.rating[0]-b.rating[0]
  // }
  // )}

  //submits
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery({ location, checkIn, checkOut, adult, room });
    resetLocation();
    resetAdult();
    resetCheckIn();
    resetCheckOut();
    resetRoom();
    resetChildren();
    //pushes to search page
    history("/search");
  };

  return (
    <div className="searchQuerys">
      <div className="desktop">
        <div className="left">
          <div className="one">
            <span>Home {"> "} </span>
            <span>
              {searchQuery.location} {"> "}
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
            <div style={{ padding: "10px 0" }} className="small-button">
              <Button
                style={{ background: "#003580", color: "#fff", width: "90%" }}
                title="Find Hotel"
                onClick={handleSubmit}
              />
            </div>
          </div>
          <div className="three"></div>
        </div>
        <div className="right">
          <div className="top">
            <h2>
              {searchQuery.location}: {length} properties found
            </h2>
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
                  <option onClick={hideAction} value={1} mal="fish">
                    Stars (highest first)
                  </option>
                  <option onClick={hideAction} value={2} mal="cow">
                    Stars (lowest first)
                  </option>
                  <option onClick={hideAction} value={3} mal="fish">
                    Top reviewed
                  </option>
                </div>
              )}
            </div>
          </div>
          <div className="card-holder">
            {result.map((item) => (
              <SearchCard item={item} key={item.id} />
            ))}
          </div>
          <div className="pag">
            <Button
              style={{ background: "#003580", color: "#fff" }}
              title="Next"
            />

            <div className="div">
              <span>1 of 11</span>
            </div>
            <Button
              style={{ background: "#003580", color: "#fff" }}
              title="Next"
            />
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
          <div className="mini-result">
            <img src={calendar} />
            <span>
              {searchQuery.checkIn} - {searchQuery.checkOut}
            </span>
            <img src={person} />
            <span>{searchQuery.adult} adults</span>
          </div>
        </div>
        <div className="mini-result">
          <div>
            <img src={sort} />
            <span>Sort</span>
          </div>
          <div>
            <img src={filter} />
            <span>Filter</span>
          </div>
        </div>
        <div className="card-holder">
          {result.map((item) => (
            <SearchCard item={item} key={item.id} />
          ))}
        </div>
        <div className="pag">
          <Button
            style={{ background: "#003580", color: "#fff" }}
            title="Next"
          />

          <div className="div">
            <span>1 of 11</span>
          </div>
          <Button
            style={{ background: "#003580", color: "#fff" }}
            title="Next"
          />
        </div>
      </div>
    </div>
  );
}
