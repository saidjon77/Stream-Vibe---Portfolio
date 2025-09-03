import React, { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../Components/Main/Navbar/Navbar";
import "./App.scss";
import Footer from "../Components/Main/Footer/Footer";
import Home from "../Pages/Home";
import Stream from "../Components/Stream/Stream";

import Movies from "../Pages/Movies";
import Plan from "../Components/Plan/PLan";
import SupportPage from "../Pages/Support";
import LogoutPage from "../Pages/Logout";
import SearchPage from "../Pages/Search";
import Movie from "../Pages/Movie";
import Actor from "../Pages/Actor";

const AppContent = () => {
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { pathname } = useLocation();

  // Page almashganda smooth tepaga chiqsin
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50); // biroz kechiktirib smooth qilib chiqaramiz
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="container">
      <Navbar setShowModal={setShowModal} />
      <div className={showModal === true ? "Modal active" : "Modal"}>
        <div className="Modal_top">
          <div className="Modal_top_left">
            <img src="Assets/Vector.png" alt="" />
          </div>
          <div className="Modal_top_right">
            <button onClick={() => setShowModal(false)}><i className="fa-solid fa-xmark"></i></button>
          </div>
        </div>
        <div className="Modal_bottom">
          <ul>
            <li><NavLink to={"/"}>Home <i className="fa-solid fa-angle-right"></i></NavLink></li>
            <li><NavLink to={"/movies"}>Movies & Shows <i className="fa-solid fa-angle-right"></i></NavLink></li>
            <li><NavLink to={"/support"}>Support <i className="fa-solid fa-angle-right"></i></NavLink></li>
            <li><NavLink to={"/subscriptions"}>Subscriptions <i className="fa-solid fa-angle-right"></i></NavLink></li>
            <li><NavLink to={"/search"}>Search <i className="fa-solid fa-angle-right"></i></NavLink></li>
            <li><NavLink to={"/logout"}>Logout <i className="fa-solid fa-angle-right"></i></NavLink></li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/movie" element={<Movie />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/subscriptions" element={<Plan />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/actor" element={<Actor/>} />
      </Routes>
      <Stream />
      {showButton && (
        <button className="scrollTopBtn" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
      <Footer />
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
