import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    const searchValue = inputValue.toLowerCase();
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue)
    );
    setResults(filteredMovies.map((movie) => movie.title));
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div id="main">
      <form id="form">
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          id="movie-input"
        ></input>
        <button id="button" onClick={handleClick}>
          Search
        </button>
      </form>
      <div id="result">
        {results.length > 0 ? (
          results.map((movie) => <div className="movie">{movie}</div>)
        ) : (
          <div>No results found</div>
        )}
      </div>
    </div>
  );
};

export default App;
