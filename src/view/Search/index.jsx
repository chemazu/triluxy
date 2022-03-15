import React, { useContext, useState } from "react";
import useSearch from "../../hooks/search-hook";
import { useInput } from "../../hooks/input-hook";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import "./style.scss";
import ImportContent from "../../resource";
import SearchCard from "../../components/SearchCard";
import Button from "../../components/Button";
import CardWrapper from "../CardWrapper";

export default function Search() {

  //import miscellanous items
  const { sort, data, person, calendar, search, filter } = ImportContent();

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

  const context = useContext(SearchContext);

  //search query
  const { searchQuery, setSearchQuery } = context;

  //search result
  const { result, length } = useSearch(searchQuery, data);

  //controls the sorting order
  const [displayResult, setDisplayResult] = useState(result)
  const [order, setOrder] = useState(0)

  //superSort this controls how the returned result is sorted
  // const superSort = () => {
  //   if (order === 0) {
  //     console.log("Top picks for your search")
  //     const sorted =[...displayResult].sort((a,b)=>{
  //        return b.rating[0] - a.rating[0];
  //     })
  //     setDisplayResult(sorted)
  //     setOrder("0")
  //     history("/search")

  //   }
  //   if (order === 1) {
  //     const sorted =[...displayResult].sort((a,b)=>{
  //        return b.rating[0] - a.rating[0];
  //       // return b.review.length - a.review.length;
  //     })
  //     setDisplayResult(sorted)
  //     setOrder(1)

  //     console.log("Stars (highest first)")
  //     history("/search")


  //   }
  //   if (order === 2) {
  //     const sorted =[...displayResult.sort((a,b)=>{
  //       return a.rating[0] - b.rating[0];
  //    })
  //    setDisplayResult(sorted)
  //    setOrder(2)

  //     console.log("Stars (lowest first)")
  //     history("/search")

  //   }

  //   if (order === 3) {
  //     const sorted =displayResult.sort((a,b)=>{
  //      return b.rating[0] - a.rating[0];

  //    })
  //    setDisplayResult(sorted)
  //    setOrder(3)
  //    history("/search")


  //     console.log("Top reviewed",)
  //   }


  // }

  const roids = (a, b) => {
    if (order === 0) { return a.review.length - b.review.length; }
    else { return a.rating[0] - b.rating[0] };
  }

  //changes drop down visiblity
  const hideAction = (e) => {
    setShow(false);
    setFilterDetail(filterOptions[e.target.value]);
    setOrder(Number(e.target.value))


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


  const HandleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery({ location, checkIn, checkOut, adult, room });


    resetLocation();
    resetAdult();
    resetCheckIn();
    resetCheckOut();
    resetRoom();
    resetChildren();

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

                {/* <input value={location} onChange={handleChange}></input> */}
              </div>
            </div>
            <form onSubmit={HandleSubmit}>

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
                  // onClick={handleSubmit}

                  type="submit"
                />
              </div>
            </form>

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
            {result.sort(roids).map((item) => (
              <SearchCard item={item} key={item.id} />
            ))}
          </div>
          {/* <CardWrapper ice={result}  cool={{egg,setEgg}}/> */}
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
