import React, { useState, useEffect } from "react";
import "./Row.css";
import { Link } from "react-router-dom";
import instance from "../axios";

const base_url = "https://image.tmdb.org/t/p/w500";

const Row = ({ title, fetchUrl, isLargeRow, nowPlaying }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      // console.log(request.data.results);
      // console.log(request);
      //return request;  <-- useless, doenst affect end result
    }
    fetchData();
  }, [fetchUrl]); //fetchURL comes from outside as an parameter, so I have to tell it to useEfffect, so that it knows somethings has changed
  console.log("from row: ", movies);

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      {/* {movies && ( */}
      <div className="row-posters">
        {movies.map((movie) => (
          <div className="row-column" key={movie.id}>
            <Link to={`/watch/${movie.id}`}>
              <img
                className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title}
              ></img>
            </Link>
            <h3 className="row-column__title">
              {!isLargeRow &&
                (movie?.title || movie?.original_title || movie?.name)}
            </h3>
            <h3 className="row-column__rating">
              <i className="fas fa-star"></i>
              {movie?.vote_average}
            </h3>
            <h3 className="row-column__nowplaying">
              {nowPlaying && movie?.release_date}
            </h3>
          </div>
        ))}
      </div>
      {/* )} */}
    </div>
  );
};

export default Row;
