import React, { useEffect, useState } from "react";
import API from "../../../api/axios";
import Slider from "react-slick";
import settings from "../../../settings/settingMultipleSlider";
import requests from "../../../api/requests";
import Movie from "../Movie";

const TrendingMovies = () => {
  const [trending, setTrending] = useState([]);

  const url = `${requests.fetchTrending}`;
  useEffect(() => {
    const getMovie = async () => {
      const res = await API.get(url);
      setTrending(res.data.results);
    };
    getMovie();
  }, [url]);

  return (
    <>
      <h2 className="text-movie">'Popular Movies'</h2>
      <div className="movie-container">
        <Slider {...settings}>
          {trending.length > 0 &&
            trending?.map((movie) => <Movie key={movie.id} {...movie} />)}
        </Slider>
      </div>
    </>
  );
};

export default TrendingMovies;
