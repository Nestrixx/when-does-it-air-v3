import "./App.css";
import ky from "ky";
import { useState, useEffect } from "react";

function App() {
  let tvSearchData = {};
  const inputChangeHandler = async (tvData) => {
    tvSearchData = await ky
      .get(
        `https://api.themoviedb.org/3/search/tv/?query=${tvData}&api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false`
      )
      .json();
    console.log(tvSearchData);
  };

  return (
    <div className="App">
      <header className="App-header">
        When Does It Air Reborn
        <div>
          <input
            type="search"
            onChange={(event) => inputChangeHandler(event.target.value)}
          ></input>
        </div>
        {/* so this is supposed to filter and display all the names in an element below the input but i think because the array defaults as empty at the beginning it is breaking. check this next time. and for the love of god please start earlier..... christian our life depends on it. please */}
        {/* {tvSearchData.results.map((val, key) => {
          return <div>{val.name}</div>;
        })} */}
      </header>
    </div>
  );
}

export default App;
