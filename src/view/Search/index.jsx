import React, { useContext, useState } from "react";
import useSearch from "../../hooks/search-hook";
import { SearchContext } from "../../context/SearchContext";
import "./style.scss";
import ImportContent from "../../resource";

export default function Search() {
  const filterOptions = [
    "Top picks for your search",
    "Stars (highest first)",
    "Stars (lowest first)",
    "Top reviewed",
  ];
  const [show, setShow] = useState(false);
  const [filterDetail, setFilterDetail] = useState(filterOptions[0]);
  const { sort, data } = ImportContent();
  const context = useContext(SearchContext);
  const { searchResult } = context;
  const { result, length } = useSearch(searchResult, data);
  const hideAction = (e) => {
    setShow(false);
    setFilterDetail(filterOptions[e.target.value]);
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
          <div className="two"></div>
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
        </div>
      </div>
    </div>
  );
}
