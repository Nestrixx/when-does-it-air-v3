import "../App.css";
import ky from "ky";
import { useState } from "react";

const Search = () => {
  const [tvSearchInfo, setTvSearchInfo] = useState({});

  const hasShows = Object.keys(tvSearchInfo).length > 0;

  const inputChangeHandler = async (event) => {
    if (event.target.value.trim() === "") {
      return;
    }
    const tvSearchData = await ky
      .get(
        `https://api.themoviedb.org/3/search/tv/?query=${event.target.value}&api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false`
      )
      .json();
    setTvSearchInfo(tvSearchData);
  };

  const listItemClick = (tvShow) => {
    console.log(tvShow.name, tvShow.id);
  };
  return (
    <div className="App">
      <header className="App-header">When Does It Air Reborn</header>
      <div>
        <input type="search" onChange={inputChangeHandler}></input>
      </div>
      {hasShows ? (
        <ul className="ListWrapper">
          {tvSearchInfo.results.map((tvShow) => {
            return (
              <li key={tvShow.id} onClick={() => listItemClick(tvShow)}>
                {tvShow.name}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>input required</p>
      )}
    </div>
  );
};

export default Search;
