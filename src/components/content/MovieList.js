import React, { useState, useEffect, useCallback } from "react";
import apiConfig from "../../api/apiConfig";
import API from "../../api/axios";

import Search from "../content/Search";
import Movie from "../content/Movie";

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);

  const url = `/discover/movie?api_key=${apiConfig.apiKey}&language=en-US&sort_by=popularity.desc&page=${currentPage}`;

  // loading 1 detik
  useEffect(() => {
    const loadingTimeOut = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(loadingTimeOut);
  }, [allMovies, currentPage]);

  // GET API
  const getMovie = useCallback(async () => {
    const res = await API.get(url);
    setAllMovies(res.data.results);
  }, [url]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  // next button
  const nextMovies = () => {
    // biar scroll otomatis ke atas
    window.scrollTo(0, 0);
    // page ditambah 1 biar bisa next page
    setCurrentPage((nextPage) => nextPage + 1);
    getMovie();
  };

  // previous button
  const previousMovies = () => {
    window.scrollTo(0, 0);
    getMovie();
    // page dikurang 1 biar bisa kembali 1 page
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      {/* navbar */}
      <Search
        api={apiConfig.apiKey}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />
      {/* nampilin data */}
      {!loading ? (
        <div className="movie-menu">
          {allMovies.length > 0 && (
            <div>
              <div className="search-movie-container">
                {allMovies.map((movie) => (
                  <Movie key={movie.id} {...movie} />
                ))}
              </div>
            </div>
          )}
          <div className="movie-menu-btn">
            {currentPage > 1 && (
              <button className="previous-btn" onClick={previousMovies}>
                Previous
              </button>
            )}
            {currentPage < allMovies.length - 1 && (
              <button className="load-more-btn" onClick={nextMovies}>
                Load More
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="loading-screen">
          <h2>Loading ...</h2>
        </div>
      )}
    </div>
  );
};

export default Movies;
