import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Watch.css";
import axios from "axios";
import YouTube from "react-youtube";

const Watch = () => {
  const { id } = useParams();
  const [video, setVideo] = useState();
  const [movie, setMovie] = useState();
  //https://www.npmjs.com/package/react-youtube
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      //autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      //const request = await axios.get(fetchUrl);
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );

      const requestMovie = await axios.get(
        `http://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setMovie(requestMovie.data);
      setVideo(request.data.results[0]);
    }
    fetchData();
  }, [id]); //id comes from outside as an parameter, so I have to tell it to useEfffect, so that it knows somethings has changed
  console.log("watch: video ", video);
  console.log("watch: movie", movie);

  return (
    <div className="watch-header">
      <div
        className="watch"
        /*  style={{
          backgroundSize: "cover",

          backgroundImage: `url(
      "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
  )`,
          backgroundPosition: "center center",
        }} */
      >
        <div className="watch-container">
          {video && (
            <YouTube
              videoId={video?.key || "00novideo00found00"}
              opts={opts}
            ></YouTube>
          )}
          <div className="watch-title">
            <h1 className="watch__title">
              {movie?.original_title || movie?.title || video?.name}
            </h1>
          </div>
          <div className="watch-overview">
            <h1 className="watch__overview">{movie?.overview}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
