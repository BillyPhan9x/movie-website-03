// https://api.themoviedb.org/3/movie/discover/tv?api_key=e49c9be6256b1eaf54581c1afd2ce4dd&with_network=123

import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import Slider from "react-slick";
import settings from "../../settings/settingSingleSlider";

import ImageSlider from "./ImageSlider";
import requests from "../../api/requests";

const Banner = () => {
  const [tvMovie, setTvMovie] = useState([]);

  const url = `${requests.fetchNetflixOriginals}`;
  useEffect(() => {
    const getMovie = async () => {
      const res = await API.get(url);
      setTvMovie(res.data.results);
    };
    getMovie();
  }, [url]);

  return (
    <div className="movie-container-slider">
      <Slider {...settings}>
        {tvMovie.length > 0 &&
          tvMovie.map((movie) => <ImageSlider key={movie.id} {...movie} />)}
      </Slider>
    </div>
  );
};

export default Banner;
