import React from "react";
import "./SearchResultsList.css";
import SearchResult from "./SearchResult";

const SearchResultsList = ({ results, setSelectedResult }) => {
  const handleResultClick = (result) => {
    setSelectedResult(result);
  };

  return (
    <div className="results-list">
      {results.map((result, id) => (
        <SearchResult
          result={result}
          key={id}
          onClick={() => handleResultClick(result)}
        />
      ))}
    </div>
  );
};

export default SearchResultsList;
