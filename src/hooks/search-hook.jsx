// import React from "react";

export default function useSearch(a, data) {
  const result = data.filter((item) => {
    console.log(item, a);
  });
  return {
    result,
  };
}
