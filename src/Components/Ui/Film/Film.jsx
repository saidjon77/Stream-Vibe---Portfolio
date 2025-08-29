import React from "react";
import "./Film.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";
const Film = () => {
  function mathRandom() {
    return Math.floor(Math.random() * 100) * 3;
  }
  mathRandom();
  return (
    <div className="Film">
      <div className="Img">
        <div className="Info">
          <h2>The bad Guys 2</h2>
          <p>
            The now-reformed Bad Guys are trying (very, very hard) to be good,
            but instead find themselves hijacked into a high-stakes,
            globe-trotting heist, masterminded by a new team of criminals they
            never saw coming: The Bad Girls.
          </p>
          <button>
            <i className="fa-solid fa-play"></i> Play Now
          </button>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="Actors_Infos">
        <div className="Actors">
          <div className="Description">
            <div className="text">
              <h3>Description</h3>
              <p>
                A fiery young man clashes with an unflinching forest officer in
                a south Indian village where spirituality, fate and folklore
                rule the lands.
              </p>
            </div>
          </div>
          <div className="Actors_boxes">
            <div className="text">
              <h3>Cast</h3>
            </div>
            <div className="Images">
              <NavLink to="/actor"><img src={`images/Image.png`} alt="" /></NavLink>
              <NavLink to="/actor"><img src={`images/Image (1).png`} alt="" /></NavLink>
              <NavLink to="/actor"><img src={`images/Image (2).png`} alt="" /></NavLink>
              <NavLink to="/actor"><img src={`images/Image (3).png`} alt="" /></NavLink>
              <NavLink to="/actor"><img src={`images/Image (4).png`} alt="" /></NavLink>
              <NavLink to="/actor"><img src={`images/Image (5).png`} alt="" /></NavLink>
              <NavLink to="/actor"><img src={`images/Image (6).png`} alt="" /></NavLink>
              <NavLink to="/actor"><img src={`images/Image (8).png`} alt="" /></NavLink>
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
              <i class="fa-solid fa-calendar"></i> Released Year
            </h3>
            <h3>2022</h3>
          </div>
          <div className="TextLanguage">
            <h3>
              <i class="fa-solid fa-language"></i> Available Languages
            </h3>
            <div className="Languages">
              <h5>English</h5>
              <h5>Hindi</h5>
              <h5>Tamil</h5>
              <h5>Telegu</h5>
              <h5>Kannada</h5>
            </div>
          </div>
          <div className="TextRating">
            <h3>
              <i class="fa-solid fa-star"></i> Ratings
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
              <i class="fa-solid fa-puzzle-piece"></i> Gernes
            </h3>
            <div className="Gernes">
              <h5>Action</h5>
              <h5>Adventure</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
