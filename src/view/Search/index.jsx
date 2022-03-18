import React, { useContext, useState } from "react";
import useSearch from "../../hooks/search-hook";
import { SearchContext } from "../../context/SearchContext";
import "./style.scss";
import ImportContent from "../../resource";
import SearchCard from "../../components/SearchCard";
import Button from "../../components/Button";
import FilterControl from "../../components/FilterControl";
import MiniSearch from "../../components/MiniSearch";

export default function Search() {
  //import miscellanous items
  const { sort, data, filter } = ImportContent();
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
  //context
  const context = useContext(SearchContext);

  //search query
  const { searchQuery, setSearchQuery } = context;

  //search result
  const { result, length } = useSearch(searchQuery, data);

  //controls the sorting order
  const [order, setOrder] = useState(0);

  //superSort this controls how the returned result is sorted

  const superSort = (a, b) => {
    if (order === 1) {
      return b.rating[0] - a.rating[0];
    }
    if (order === 2) {
      return a.rating[0] - b.rating[0];
    }
    if (order === 3) {
      return b.review.length - a.review.length;
    } else {
      return a.title.localeCompare(b.title);
    }
  };
  const [price, setPrice] = useState(0);
  const [secondPrice, setSecondPrice] = useState(10000000000000);
  const control = { setPrice, setSecondPrice };
  const superFilter = (item) => {
    const { roomType } = item;
    if (roomType[0].price >= price && secondPrice >= roomType[0].price) {
      return true;
    }
    return false;
  };

  //changes drop down visiblity
  const hideAction = (e) => {
    setShow(false);
    setFilterDetail(filterOptions[e.target.value]);
    setOrder(Number(e.target.value));
  };

  const finalResult = result.sort(superSort).filter(superFilter);

  return (
    <div className="searchQuerys">
      {/* Desktop View */}
      <div className="desktop">
        {/* left desktop  */}
        <div className="left">
          <div className="one">
            <span>Home {"> "} </span>
            <span>
              {searchQuery.location} {"> "}
            </span>
            <span>Search result : </span>
          </div>
          <MiniSearch control={control} />
          <div className="three">
            <h3>Filter</h3>
            <FilterControl item={result} price={price} control={control} />
          </div>
        </div>
        {/* right desktop  result */}
        <div className="right">
          <div className="top">
            <h2>
              {searchQuery.location}: {finalResult.length} properties found
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
            {finalResult.map((item) => (
              <SearchCard item={item} key={item.id} />
            ))}
          </div>
          <div className="pag">
            <Button
              style={{ background: "#003580", color: "#fff" }}
              title="Next"
            />
            <div className="div">
              <span>1 of 1</span>
            </div>
            <Button
              style={{ background: "#003580", color: "#fff" }}
              title="Next"
            />
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="mobile">
        <div className="search">
          <MiniSearch control={control} />
        </div>
        <div className="mini-result">
          <div
            onClick={() => {
              setShow(true);
            }}
          >
            <img src={sort} />
            <span>Sort</span>
          </div>

          <div>
            <img src={filter} />
            <span>Filter</span>
          </div>
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
        <div className="card-holder">
          {finalResult.map((item) => (
            <SearchCard item={item} key={item.id} />
          ))}
        </div>
        <div className="pag">
          <Button
            style={{ background: "#003580", color: "#fff" }}
            title="Next"
          />

          <div className="div">
            <span>1 of 1</span>
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
