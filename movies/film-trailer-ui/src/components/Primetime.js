import React, { useState, useEffect } from "react";
import requests from "../requests";
import "./Primetime.css";
import { Link } from "react-router-dom";
import instance from "../axios";

const base_url = "https://image.tmdb.org/t/p/original";
const Primetime = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log("Primetime:", movie);

  return (
    <div className="prime">
      {movie && (
        <div className="prime-container">
          <Link to={`/watch/${movie.id}`}>
            <img
              key={movie.id}
              className="prime-image"
              src={`${base_url}${movie?.backdrop_path || movie?.poster_path}`}
              alt={movie?.title || movie?.original_title || movie?.name}
            ></img>
          </Link>
          <div className="prime-column">
            <h1 className="prime-title">
              {movie?.title || movie?.original_title || movie?.name}
            </h1>
            <h2 className="prime-description">{movie?.overview}</h2>
            <h2 className="prime-vote">{movie?.vote_average}/10</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Primetime;
