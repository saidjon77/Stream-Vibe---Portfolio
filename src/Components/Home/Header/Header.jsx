import React from "react";
import "./Header.scss";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const Header = () => {
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDEyNDQ5ZjVhNTZlYTUzZjUzZmUxMjkwMGY5YzNmZiIsIm5iZiI6MTc1NTc3MjE5Mi4zMjgsInN1YiI6IjY4YTZmNTIwMzJjZGE4ZjBhZmZkMmIxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SsDHR4-ntrALqEmc0oXyab4WYpit5NyoRIW6kJPiKgw";
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMG_BASE = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);
  return (
    <div className="Header">
      <img src="images/Fade Out Top.png" alt=""  className="fade_top"/>
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
        <img src="images/Abstract Design.png" alt="" />
        <h1>The Best Streaming Experience</h1>
        <p>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more.
        </p>
      </div>
      <img src="images/Fade Out Bottom.png" alt="" className="fade_bottom"/>
    </div>
  );
};

export default Header;
