import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";
import "./detail.css";
import Cast from "./Cast";
import Search from "../content/Search";
import Videos from "./Videos";
import Similar from "./SimilarMovies";
import Review from "./Review";

const Desc = () => {
  const [detail, setDetail] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const { id } = useParams();

  const noImage =
    "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
  useEffect(() => {
    const getDetail = async () => {
      const res = await tmdbApi.detail(id);
      setDetail(res.data);
    };
    getDetail();
  }, [id]);

  return (
    <div>
      <div className="header">
        <Search
          api={apiConfig.apiKey}
          showSearch={showSearch}
          setShowSearch={setShowSearch}
        />
      </div>
      {detail && (
        <div className="container">
          <div className="video">
            <Videos id={detail.id} />
          </div>
          <div className="movie-content">
            <div className="movie--content">
              <img
                className="movie-content_img"
                src={
                  detail.poster_path
                    ? apiConfig.originalImage(
                        detail.poster_path || detail.backdrop_path
                      )
                    : noImage
                }
                alt={detail.title}
              />

              <div className="movie-content_info">
                <div className="movie-rating">
                  <span>
                    Rating :{" "}
                    <span className="rating">
                      <b>{detail.vote_average}</b>/10
                    </span>
                  </span>
                  <span className="vote">
                    Total votes : <b>{detail.vote_count}</b>
                  </span>
                  <span className="pg-rated">
                    {detail.adult ? "R18+" : "R13+"}
                  </span>
                </div>

                <div className="movie-genres">
                  {detail.genres &&
                    detail.genres.map((genre, id) => (
                      <span key={id} className="genres">
                        {genre.name}
                      </span>
                    ))}
                </div>

                <h1 className="movie-title">{detail.title}</h1>
                <p className="release-date">Release : {detail.release_date}</p>
                <p className="movie-overview">{detail.overview}</p>

                <div className="cast">
                  <div className="cast-header">
                    <h3>Cast</h3>
                  </div>
                  <div className="cast-detail">
                    <Cast id={detail.id} />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="image">
              <Images id={detail.id} />
            </div> */}
          </div>
          <div className="reviews-movies">
            <Review id={detail.id} />
          </div>
          <div className="similar-movies">
            <Similar id={detail.id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Desc;
