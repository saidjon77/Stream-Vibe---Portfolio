import React, { useState } from "react";
import "./Search.scss";
import { NavLink } from "react-router-dom";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDEyNDQ5ZjVhNTZlYTUzZjUzZmUxMjkwMGY5YzNmZiIsIm5iZiI6MTc1NTc3MjE5Mi4zMjgsInN1YiI6IjY4YTZmNTIwMzJjZGE4ZjBhZmZkMmIxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SsDHR4-ntrALqEmc0oXyab4WYpit5NyoRIW6kJPiKgw";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG = "https://image.tmdb.org/t/p/w500";

export default function Search() {
  const [active, setActive] = useState(4); // 1:Movies 2:TV 3:Actors 4:All
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    accept: "application/json",
  };

  const endpointByTab = (tab) => {
    switch (tab) {
      case 1:
        return "search/movie";
      case 2:
        return "search/tv";
      case 3:
        return "search/person";
      default:
        return "search/multi";
    }
  };

  const normalizeItems = (tab, items) => {
    // faqat "adult" tekshiruv qoladi
    return items
      .filter((item) => {
        if (item.media_type === "person") {
          return item.adult !== true;
        }
        return item.adult !== true;
      })
      .map((item) => {
        const media =
          item.media_type ||
          (tab === 1 ? "movie" : tab === 2 ? "tv" : tab === 3 ? "person" : "");
        return {
          id: item.id,
          media,
          title: item.title || item.name || "Untitled",
          year: (item.release_date || item.first_air_date || "").slice(0, 4),
          overview: item.overview || "",
          img:
            media === "person"
              ? item.profile_path
              : item.poster_path || item.backdrop_path,
          known_for:
            item.known_for && item.known_for.length
              ? item.known_for
                  .slice(0, 3)
                  .map((k) => k.title || k.name)
                  .join(", ")
              : null,
        };
      });
  };

  const buildUrl = (tab, q, p) =>
    `${BASE_URL}/${endpointByTab(
      tab
    )}?language=en-US&query=${encodeURIComponent(
      q
    )}&page=${p}&include_adult=false`;

  const doSearch = async (reset = true) => {
    if (!query.trim()) {
      alert("Please enter a search term");
      return;
    }
    try {
      setLoading(true);
      const currentPage = reset ? 1 : page + 1;
      const res = await fetch(buildUrl(active, query, currentPage), {
        headers,
      });
      const data = await res.json();

      const cleaned = normalizeItems(active, data.results || []);

      setResults(reset ? cleaned : [...results, ...cleaned]);
      setPage(currentPage);
      setTotalPages(data.total_pages || 1);
    } catch (e) {
      console.error(e);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    doSearch(true);
  };

  const onTab = (tab) => {
    setActive(tab);
    if (query.trim()) doSearch(true);
  };

  return (
    <div className="Search">
      <form className="Searching_input" onSubmit={onSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies, TV shows, or actors..."
        />
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <div className="Categories">
        <button
          onClick={() => onTab(1)}
          className={active === 1 ? "active" : ""}
        >
          Movies
        </button>
        <button
          onClick={() => onTab(2)}
          className={active === 2 ? "active" : ""}
        >
          TV Series
        </button>
        <button
          onClick={() => onTab(3)}
          className={active === 3 ? "active" : ""}
        >
          Actors
        </button>
        <button
          onClick={() => onTab(4)}
          className={active === 4 ? "active" : ""}
        >
          All
        </button>
      </div>

      <div className="Movies_boxes">
        {results.map((item) => (
          <div className="Box" key={`${item.media}-${item.id}`}>
            <NavLink to={`/movie/${item.id}`}>
              <div className="Img">
                {item.img ? (
                  <img src={`${IMG}${item.img}`} alt={item.title} />
                ) : (
                  <div className="img-fallback">No Image</div>
                )}
              </div>
            </NavLink>
            <div className="Text">
              <h2>{item.title}</h2>
              <h4>{item.year || "—"}</h4>
              {item.known_for && (
                <p className="muted">Known for: {item.known_for}</p>
              )}
              {item.overview && <p>{item.overview}</p>}
            </div>
          </div>
        ))}
      </div>

      {results.length > 0 && page < totalPages && (
        <div className="LoadMore">
          <button
            style={{
              padding: "17px 35px",
              border: "none",
              backgroundColor: "#e50000",
              color: "#FFFFFF",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            className="load"
            onClick={() => doSearch(false)}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
}
