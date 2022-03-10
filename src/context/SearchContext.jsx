import React, { useState, createContext } from "react";

export const SearchContext = createContext(null);

export const SearchProvider = (props) => {
  return <SearchContext.Provider>{props.children}</SearchContext.Provider>;
};
