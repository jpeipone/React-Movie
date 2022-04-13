import React, { useState, useEffect } from "react";
import "./Heroslide.css";
import { Link } from "react-router-dom";
import instance from "../axios";
import requests from "../requests";

const base_url = "https://image.tmdb.org/t/p/original";
const Heroslide = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchWestern);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log("Heroslide:", movie);

  return (
    <div className="hero">
      {movie && (
        <div className="hero-container">
          <Link to={`/watch/${movie.id}`}>
            <img
              key={movie.id}
              className="hero-image"
              src={`${base_url}${movie?.backdrop_path || movie?.poster_path}`}
              alt={movie?.title || movie?.original_title || movie?.name}
            ></img>
          </Link>
          <div className="hero-column">
            <h1 className="hero-title">
              {movie?.title || movie?.original_title || movie?.name}
            </h1>
            <h2 className="hero-description">{movie?.overview}</h2>
            <h2 className="hero-vote">{movie?.vote_average}/10</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Heroslide;
