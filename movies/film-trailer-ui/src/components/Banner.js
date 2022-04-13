import React, { useState, useEffect } from "react";
import instance from "../axios";
import requests from "../requests";
import "./Banner.css";

//const base_url = "https://image.tmdb.org/t/p/w500";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  /*  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []); */

  useEffect(() => {
    async function fetchData() {
      const request = await instance
        .get(requests.fetchTrending)
        .catch(function (error) {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log("Banner:", movie);
  console.log(
    "Banner-image",
    `https://image.tmdb.org/t/p/original${
      movie?.backdrop_path || movie?.poster_path
    }`
  );
  /* "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}" */
  return (
    <header
      className="banner"
      style={
        {
          // backgroundSize: "cover",
          /*       backgroundImage: `url(
        "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
    )`, */
          // backgroundPosition: "center center",
        }
      }
    >
      <div className="banner-contents">
        {/*    <h1 className="banner-title">
          {movie?.title || movie?.original_title || movie?.name}
        </h1>

        <div className="banner-buttons">
          <button className="banner-play">
            <i className="fas fa-play"></i>info
          </button>

          <h2 className="banner-vote">
            <i className="fas fa-star"></i>
            {movie?.vote_average}/10
          </h2>
        </div> */}
        {/* <h1 className="banner-description">{movie?.overview}</h1> */}
      </div>
    </header>
  );
};

export default Banner;
