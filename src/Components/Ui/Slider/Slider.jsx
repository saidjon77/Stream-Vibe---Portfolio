import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.scss";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const Slider = ({ uniqueId }) => {
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDEyNDQ5ZjVhNTZlYTUzZjUzZmUxMjkwMGY5YzNmZiIsIm5iZiI6MTc1NTc3MjE5Mi4zMjgsInN1YiI6IjY4YTZmNTIwMzJjZGE4ZjBhZmZkMmIxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SsDHR4-ntrALqEmc0oXyab4WYpit5NyoRIW6kJPiKgw";
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMG_BASE = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);

  // 🔗 navigation tugmalar uchun ref
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  // Fetch movies
  useEffect(() => {
    fetch(
      `${BASE_URL}/movie/popular?language=en-US&page=1&include_adult=false`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []));
  }, []);

  // Filmlarni bo‘lish (har bir slide = 5 ta film)
  const chunkedMovies = [];
  for (let i = 0; i < movies.length; i += 5) {
    chunkedMovies.push(movies.slice(i, i + 5));
  }

  return (
    <div className="slider-section">
      {/* Header */}
      <div className="slider-header">
        <div className="text-block">
          <h1>Explore our wide variety of categories</h1>
          <p>
            Whether you’re looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>

        {/* Controls */}
        <div className="controls-box">
          <button
            ref={prevRef}
            className={`custom-prev custom-prev-${uniqueId}`}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <div
            className={`swiper-pagination swiper-pagination-${uniqueId}`}
          ></div>
          <button
            ref={nextRef}
            className={`custom-next custom-next-${uniqueId}`}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
        pagination={{
          el: `.swiper-pagination-${uniqueId}`,
          clickable: true,
        }}
        // ✅ Tugmalarni to‘g‘ri ulash
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="custom-swiper"
        breakpoints={{
          320: {
            // kichik telefon
            slidesPerView: 1,
            spaceBetween: 1,
          },
          480: {
            // telefon
            slidesPerView: 2,
            spaceBetween: 1,
          },
          640: {
            // katta telefon / kichik planshet
            slidesPerView: 3,
            spaceBetween: 1,
          },
          768: {
            // planshet
            slidesPerView: 3,
            spaceBetween: 1,
          },
          1024: {
            // noutbuk
            slidesPerView: 3,
            spaceBetween: 1,
          },
          1280: {
            // katta ekran
            slidesPerView: 6,
            spaceBetween: 1,
          },
          1536: {
            // juda katta ekran
            slidesPerView: 1,
            spaceBetween: 1,
          },
        }}
      >
        {chunkedMovies.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="slide-row">
              {group.reverse().map((movie) => (
                <div className="card" key={movie.id}>
                  <NavLink to={`/movie`}>
                  <img
                    src={`${IMG_BASE}${movie.poster_path}`}
                    alt={movie.title}
                  />
                    <img
                      className="fade"
                      src="images/Fade Out Bottom (1).png"
                      alt=""
                    />
                  </NavLink>
                  <h3>{movie.title.slice(0, 10)}</h3>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
