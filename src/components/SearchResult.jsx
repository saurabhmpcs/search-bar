import React from "react";
import "./SearchResult.css";

const SearchResult = ({ result, onClick }) => {
  return (
    <div className="search-result" onClick={onClick}>
      {result.name}
    </div>
  );
};

export default SearchResult;
