import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ setShowModal}) => {
  const location = useLocation();

  useEffect(() => {
    const navbar = document.querySelector(".Navbar");

    const handleScroll = () => {
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  const [active, setActive] = useState(1);
  return (
    <>
      <div className={`Navbar ${isHome ? "home-navbar" : "page-navbar"}`}>
        <div className="Navbar_left">
          <div className="img">
            <NavLink to={"/"}><img src="images/Logo-1.png" alt="" /></NavLink>
          </div>
        </div>

        <div className="Navbar_center">
          <div className="ul">
            <ul>
              <li onClick={() => setActive(2)} className={active === 2 ? "active" : ""}><NavLink to="/movies">Movies & Shows</NavLink></li>
              <li onClick={() => setActive(3)} className={active === 3 ? "active" : ""}><NavLink to="/support"> Support</NavLink></li>
              <li onClick={() => setActive(4)} className={active === 4 ? "active" : ""}><NavLink to="/subscriptions">Subscriptions</NavLink></li>
              <li onClick={() => setActive(5)} className={active !== 5 ? "LogoutButton" : "LogoutButton none"}><NavLink to="/logout">Logout</NavLink></li>
              <li onClick={() => setActive(6)} className={active === 5 ? "SignInButton active" : "SignInButton"}>Sign In</li>
            </ul>
          </div>
        </div>

        <div className="Navbar_right">
          <div className="img">
            <NavLink to="/search" className="SearchIcon"><img src="Assets/Icon (1).png" alt=""  onClick={() => setActive(7)} className={active === 4 ? "active" : ""}/></NavLink>
            <img src="Assets/Icon.png" alt="" />
          </div>
        </div>

        <button onClick={() => setShowModal(true)}><i className="fa-solid fa-bars-staggered"></i></button>
      </div>

      {/* ✅ faqat home bo‘lmagan pagelarda content pastga tushadi */}
      {!isHome && <div className="NavbarPlaceholder"></div>}
    </>
  );
};

export default Navbar;
