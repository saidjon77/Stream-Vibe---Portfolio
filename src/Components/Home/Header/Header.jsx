import React from "react";
import "./Header.scss";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Api_Service from "../../../Service/api_service";
const Header = () => {
  const IMG_BASE = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);

  const url = [
    "movie/popular",
    "movie/now_playing",
    "movie/top_rated",
    "movie/upcoming",
    "trending/movie/week",
    "trending/tv/week",
    "trending/movie/week",
    "trending/all/week",
    "discover/movie",
    "discover/tv",
    "movie/popular"
]
const [trending, setTrending] = useState(Math.floor(Math.random() * url.length));

console.log(url[trending]);


  const GetApi = async () => {
    let responce = await Api_Service.getData(url[trending]);
    setMovies(responce.results);
  };

  useEffect(() => {
    GetApi();
  }, []);

  return (
    <div className="Header">
      <img src="images/Fade Out Top.png" alt="" className="fade_top" />
      <Marquee direction="right" gradient={false} speed={50}>
        {[...movies].reverse().map((movie) => (
          <div className="Movies">
            <div key={movie.id}>
              <img src={`${IMG_BASE}${movie.poster_path}`} alt={movie.title} />
            </div>
          </div>
        ))}
      </Marquee>
      <Marquee direction="left" gradient={false} speed={60}>
        {[...movies].reverse().map((movie) => (
          <div className="Movies">
            <div key={movie.id}>
              <img src={`${IMG_BASE}${movie.poster_path}`} alt={movie.title} />
            </div>
          </div>
        ))}
      </Marquee>
      <Marquee direction="right" gradient={false} speed={55}>
        {movies.map((movie) => (
          <div className="Movies right">
            <div key={movie.id}>
              <img src={`${IMG_BASE}${movie.poster_path}`} alt={movie.title} />
            </div>
          </div>
        ))}
      </Marquee>
      <div className="Info">
        <img src="images/Abstract Design.png" alt=""/>
        <h1>The Best Streaming Experience</h1>
        <p>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more.
        </p>
      </div>
      <img src="images/Fade Out Bottom.png" alt="" className="fade_bottom" />
    </div>
  );
};

export default Header;
