import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../src/utils/movieList";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [results, setResult] = useState(null);
    function handleClick(e) {
        e.preventDefault();
        const a = inputValue.toLowerCase();
        const d = movies.filter((movie) =>
            movie.title.toLowerCase().includes(a)
        );
        setResult(d.map((movie) => movie.title));

    }
    function handleChange(e) {
        setInputValue(e.target.value)
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
                {results &&
                    results.map((movie) => (
                        <div className="movie">{movie}</div>
                    ))}
            </div>
        </div>
    );
};

export default App;
