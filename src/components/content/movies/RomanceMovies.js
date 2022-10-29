import React, { useEffect, useState } from "react";
import API from "../../../api/axios";
import Slider from "react-slick";
import requests from "../../../api/requests";

import settings from "../../../settings/settingMultipleSlider";
import Movie from "../Movie";

const RomanceMovies = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const res = await API.get(`${requests.fetchRomanceMovies}`);

      setTopRated(res.data.results);
    };
    getMovie();
  }, []);

  return (
    <div>
      <h2 className="text-movie">Top Rated Movies</h2>
      <div className="movie-container">
        <Slider {...settings}>
          {topRated.length > 0 &&
            topRated.map((movie) => <Movie key={movie.id} {...movie} />)}
        </Slider>
      </div>
    </div>
  );
};
export default RomanceMovies;
