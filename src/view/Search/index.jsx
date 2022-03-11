import React, { useContext } from "react";
import data from "../../resource/hotel.json";
import useSearch from "../../hooks/search-hook";
import { SearchContext } from "../../context/SearchContext";

import "./style.scss";
import Banner from "../../components/Banner";

export default function Search() {
  const context = useContext(SearchContext);
  const { searchResult } = context;
  const { result, length } = useSearch(searchResult, data);
  console.log(result);
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
          </div>
        </div>
      </div>
    </div>
  );
}
