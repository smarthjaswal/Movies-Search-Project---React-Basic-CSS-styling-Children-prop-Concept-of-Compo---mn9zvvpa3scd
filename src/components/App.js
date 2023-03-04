import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [results, setResult] = useState(null);
const x="";
    function handleClick(e) {
        for(var i=0;i<movies.length;i++){
            if(movies[i].title===inputValue){
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
