import React, { useEffect, useState } from "react";
import API from "../../api/axios";

import Movie from "../content/Movie";
import NavBar from "../header/NavBar";

const Header = ({ api, setShowSearch, showSearch }) => {
  const searchMovie = `search/movie?&api_key=${api}&query=`;

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [lastSearch, setLastSearch] = useState("");

  useEffect(() => {
    setMovies([]);
    getMovies();
  }, [search]);

  const getMovies = async (api) => {
    const res = await API.get(api);
    setMovies(res.data.results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      getMovies(searchMovie + search);
      // setSearch("");
      setShowSearch(true);
      setLastSearch(search);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <header>
        <NavBar />
        <form onSubmit={handleSubmit} className="form-search">
          <input
            type="text"
            id="search"
            placeholder="Search movie"
            className="search"
            value={search}
            onChange={handleChange}
          />
        </form>
      </header>

      {movies && (
        <div>
          <h2 className="text-movie">Result for : {lastSearch}</h2>
          <div className="search-movie-container">
            {movies.map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
