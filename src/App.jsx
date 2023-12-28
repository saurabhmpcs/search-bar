import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultsList";

function App() {
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} selectedResult={selectedResult} />
        <SearchResultsList
          results={results}
          setSelectedResult={setSelectedResult}
        />
      </div>
    </div>
  );
}

export default App;
