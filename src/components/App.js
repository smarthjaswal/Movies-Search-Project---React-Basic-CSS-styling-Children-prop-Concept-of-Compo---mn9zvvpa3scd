import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [results, setResult] = useState(null);
const x="";
    function handleClick(e) {
        var a = inputValue.toUpperCase();
        for(var i=0;i<movies.length;i++){
            var b = movies[i].title.toUpperCase();
            if(a===b){
                x = movies[i].title;
            }
           
            }
        
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
                        <div className="movie">{x}</div>
                    ))}
            </div>
        </div>
    );
};

export default App;
