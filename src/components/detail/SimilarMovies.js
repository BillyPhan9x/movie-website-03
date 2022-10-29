import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import tmbdApi from "../../api/tmdbApi";
import Movie from "../content/Movie";
import settings from "../../settings/settingMultipleSlider";

const Similar = (props) => {
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getSimilarMovies = async () => {
      const res = await tmbdApi.similar(props.id);
      setSimilar(res.data.results);
      // console.log(res.data.results);
    };
    getSimilarMovies();
  }, [props.id]);

  return (
    <div>
      <h2 className="text-movie">More like this</h2>
      <div className="movie-container">
        <Slider {...settings}>
          {similar.length > 0 &&
            similar.map((movie) => <Movie key={movie.id} {...movie} />)}
        </Slider>
      </div>
    </div>
  );
};

export default Similar;
