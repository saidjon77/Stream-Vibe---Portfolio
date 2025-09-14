import React, { act, useEffect, useState } from "react";
import "./Film.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";
import Api_Service from "../../Service/api_service";
const Film = ({ id }) => {
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const GetApi = async () => {
    let responce = await Api_Service.getData(`movie/${id}`);
    let data = await Api_Service.getData(`movie/${id}/credits`);
    let trailer = await Api_Service.getData(`movie/${id}/videos`);
    setTrailers(trailer.results);
    setActors(data);
    setMovies(responce);
  };
  console.log(trailers);
  let trailerYouTube = trailers.find((item) => item.type === "Trailer" && item.site === "YouTube");
  console.log(trailerYouTube);
  
  useEffect(() => {
    GetApi();
  }, []);

  const [play, setPlay] = useState(false);

  return (
    <div className="Film">
      {play === true ? (
        <div className="Video">
          <iframe
          className="Img"
            style={{ width: "100%", height: "510px" }}
            src={`https://www.youtube.com/embed/${trailerYouTube.key}?autoplay=1`}
            frameborder="0px"
            allow="autoplay; encrypted-media"
          ></iframe>
          <button onClick={() => setPlay(!play)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      ) : (
        <div
          className="Img"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies.backdrop_path})`,
          }}
        >
          <div className="Info">
            <h2>{movies.original_title}</h2>
            <p>{movies.overview}</p>
            <button onClick={() => setPlay(!play)}>
              <i className="fa-solid fa-play"></i> Play Now
            </button>
          </div>
          <div className="overlay"></div>
        </div>
      )}
      <div className="Actors_Infos">
        <div className="Actors">
          <div className="Description">
            <div className="text">
              <h3>Description</h3>
              <p>{movies.overview}</p>
            </div>
          </div>
          <div className="Actors_boxes">
            <div className="text">
              <h3>Cast</h3>
              <div className="control_box">
                <div className="active left">
                  <button>
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                </div>
                <div className="active right">
                  <button>
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="Images">
              <Swiper
                className="Swiper"
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  prevEl: ".left",
                  nextEl: ".right",
                }}
              >
                {actors.cast &&
                  actors.cast
                    .reduce((acc, _, i) => {
                      if (i % 8 === 0) acc.push(actors.cast.slice(i, i + 8));
                      return acc;
                    }, [])
                    .map((group, idx) => (
                      <SwiperSlide className="SwiperSlide" key={idx}>
                        {group?.map((item) => (
                          <div className="Img" key={item.id}>
                            <NavLink to={`/actor/${item.id}`}>
                              <img
                                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                              />
                            </NavLink>
                          </div>
                        ))}
                      </SwiperSlide>
                    ))}

                {/* {actors.cast &&
                actors.cast.map((item) => (
                  <div className="Img">
                    <NavLink to={`/actor`} key={item.id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                        alt=""
                      />
                    </NavLink>
                  </div>
                ))} */}
              </Swiper>
            </div>
          </div>
          <div className="Comments">
            <div className="text">
              <h3>Reviews</h3>
              <button>
                <i className="fa-solid fa-plus"></i> Add Your Review
              </button>
            </div>

            {/* Swiper */}
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                bulletClass: "div",
                bulletActiveClass: "div1",
              }}
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="Boxes">
                  <div className="box">
                    <div className="info_stars">
                      <div className="Infoss">
                        <h3>Aniket Roy</h3>
                        <p>From India</p>
                      </div>
                      <div className="Stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <h4>4.5</h4>
                      </div>
                    </div>
                    <div className="text">
                      <p>
                        This movie was recommended to me by a very dear friend
                        who went for the movie by herself. I went to the cinemas
                        to watch but had a houseful board so couldn't watch it.
                      </p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="info_stars">
                      <div className="Infoss">
                        <h3>Swaraj</h3>
                        <p>From India</p>
                      </div>
                      <div className="Stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <h4>5</h4>
                      </div>
                    </div>
                    <div className="text">
                      <p>
                        A restless king promises his lands to the local tribals
                        in exchange of a stone (Panjurli, a deity of Keradi
                        Village) wherein he finds solace and peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="Boxes">
                  <div className="box">
                    <div className="info_stars">
                      <div className="Infoss">
                        <h3>John Doe</h3>
                        <p>From USA</p>
                      </div>
                      <div className="Stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <i className="fa-regular fa-star"></i>
                        <h4>3.5</h4>
                      </div>
                    </div>
                    <div className="text">
                      <p>
                        Nice storyline but felt a bit too long. However, the
                        acting was really amazing and worth watching once.
                      </p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="info_stars">
                      <div className="Infoss">
                        <h3>Maria Silva</h3>
                        <p>From Brazil</p>
                      </div>
                      <div className="Stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <h4>4</h4>
                      </div>
                    </div>
                    <div className="text">
                      <p>
                        I loved the cinematography and music. It really created
                        a strong emotional connection with the audience.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="Boxes">
                  <div className="box">
                    <div className="info_stars">
                      <div className="Infoss">
                        <h3>Ali Khan</h3>
                        <p>From Pakistan</p>
                      </div>
                      <div className="Stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <h4>3</h4>
                      </div>
                    </div>
                    <div className="text">
                      <p>
                        The movie had good acting but the script was
                        predictable. Could have been much better with some
                        twists.
                      </p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="info_stars">
                      <div className="Infoss">
                        <h3>Sakura Tanaka</h3>
                        <p>From Japan</p>
                      </div>
                      <div className="Stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <h4>4.5</h4>
                      </div>
                    </div>
                    <div className="text">
                      <p>
                        Very emotional and beautifully shot. I enjoyed every
                        moment of it. Would definitely recommend watching.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide>
                <div className="Boxes">
                  <div className="box">
                    <div className="info_stars">
                      <div className="Infoss">
                        <h3>Michael Brown</h3>
                        <p>From UK</p>
                      </div>
                      <div className="Stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <h4>2.5</h4>
                      </div>
                    </div>
                    <div className="text">
                      <p>
                        Honestly, I didn’t enjoy it much. The plot was weak and
                        the pacing was off. Not my type of movie.
                      </p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="info_stars">
                      <div className="Infoss">
                        <h3>Fatima Noor</h3>
                        <p>From UAE</p>
                      </div>
                      <div className="Stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <h4>3</h4>
                      </div>
                    </div>
                    <div className="text">
                      <p>
                        The visuals were amazing but the story didn’t catch my
                        attention. Could have been more engaging.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Custom Controls */}
            <div className="Control_box">
              <button className="active custom-prev">
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <div className="custom-pagination"></div>
              <button className="active custom-next">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="Infos">
          <div className="TextData">
            <h3>
              <i className="fa-solid fa-calendar"></i> Released Year
            </h3>
            <h3>{movies.release_date}</h3>
          </div>
          <div className="TextLanguage">
            <h3>
              <i className="fa-solid fa-language"></i> Available Languages
            </h3>
            <div className="Languages">
              {movies.spoken_languages &&
                movies.spoken_languages.map((lang) => (
                  <h5 key={lang.english_name}>{lang.english_name}</h5>
                ))}
            </div>
          </div>
          <div className="TextRating">
            <h3>
              <i className="fa-solid fa-star"></i> Ratings
            </h3>
            <div className="Boxes">
              <div className="box">
                <h2>IMDb</h2>
                <div className="Stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <h4>4.5</h4>
                </div>
              </div>
              <div className="box">
                <h2>Streamvibe</h2>
                <div className="Stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star half"></i>
                  <h4>4</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="TextGernes">
            <h3>
              <i className="fa-solid fa-puzzle-piece"></i> Gernes
            </h3>
            <div className="Gernes">
              {movies.genres &&
                movies.genres.map((genre) => (
                  <h5 key={genre.id}>{genre.name}</h5>
                ))}
            </div>
          </div>
          <div className="Director_Compositer">
            {actors.crew &&
              actors.crew.map((actor) => {
                if (actor.job === "Director") {
                  return (
                    <div key={actor.id} className="Directors">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                        alt=""
                      />
                      <div className="text">
                        <h3>{actor.name}</h3>
                        <h4>{actor.job}</h4>
                      </div>
                    </div>
                  );
                }
              })}
            {actors.crew &&
              actors.crew.slice(0, 2).map((item) => {
                if (item.job === "Producer") {
                  return (
                    <div key={item.id} className="Directors">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                        alt=""
                      />
                      <div className="text">
                        <h3>{item.name}</h3>
                        <h4>{item.job}</h4>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
