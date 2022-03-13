import React, { useContext } from "react";
import FilterItem from "../../components/FilterItem";
import SearchCard from "../../components/SearchCard";
import "./style.scss";
import { SearchContext } from "../../context/SearchContext";
import useSearch from "../../hooks/search-hook";
import data from "../../resource/hotel.json";
export default function Search() {
  const context = useContext(SearchContext);
  const { searchQuery, setSearchQuery } = context;
  console.log(searchQuery, "fe");
  const { result, length } = useSearch(searchQuery, data);
  console.log(result, length);

  return (
    <div className="searchQuerys">
      <div className="result-bar">
        <h4>Hotels in {searchQuery.location}</h4>
      </div>
      <div className="result-content">
        <div className="filter">
          <h3>Filter</h3>
          <FilterItem />
        </div>
        <div className="results">
          <div className="sort">
            <h2>{result[0].location}: </h2>
            <span>
              {result.length} hotel out of {data.length} available
            </span>
            <div className="price">
              <div className="star">Low to High</div>
              <div className="star">High to low</div>
              <div className="star last">Star Rating</div>
            </div>
          </div>
          {result.map((item) => (
            <SearchCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
