import React, { useContext, useState } from "react";
import useSearch from "../../hooks/search-hook";
import { SearchContext } from "../../context/SearchContext";
import "./style.scss";
import ImportContent from "../../resource";

export default function Search() {
  const [show, setShow] = useState(false);
  const { sort, data } = ImportContent();
  const context = useContext(SearchContext);
  const { searchResult } = context;
  const { result, length } = useSearch(searchResult, data);
  const hideAction = (e) => {
    setShow(false);
    console.log(e.target);
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
                <p>Top picks for your search</p>
              </div>
              {show && (
                <div className="hidden-item">
                  <p onClick={hideAction} value="rer">
                    Top picks for your search
                  </p>
                  <p onClick={hideAction}>Stars (highest first)</p>
                  <p onClick={hideAction}>Stars (lowest first)</p>
                  <p onClick={hideAction}>Top reviewed</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
