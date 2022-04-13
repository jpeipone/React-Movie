import React, { useState } from "react";
import Row from "./Row";
import "./SearchMovie.css";

const SearchMovie = () => {
  const [fetchName, setFetchName] = useState(["star wars"]);

  const handleChange = (event) => {
    const moviename = event.target.value;
    setFetchName(moviename);
  };

  /*  const fetchData = async () => {
    const request = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${fetchName}&api_key=63b983e7a9653415ac845867625c0df9&language=en-US&page=1&include_adult=false`
    );
    setSearchMovie(request.data.result);
    console.log(request.data.results);
  }; */

  const handleSubmit = (event) => {
    event.preventDefault();
    //fetchData();
  };

  return (
    <div className="searchmovie">
      <div className="searchmovie-container">
        <form onSubmit={handleSubmit}>
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="search movies"
            onChange={handleChange}
            className="input-search"
          />
        </form>
      </div>

      <Row
        fetchUrl={`https://api.themoviedb.org/3/search/movie?query=${fetchName}&api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false`}
      />
    </div>
  );
};
export default SearchMovie;
