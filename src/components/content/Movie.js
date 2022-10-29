import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";

const noImage =
  "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

const Movie = ({ title, poster_path, release_date, id }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="movie" onClick={handleClick}>
      <img
        src={poster_path ? apiConfig.originalImage(poster_path) : noImage}
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        {release_date && <span>Release: {release_date}</span>}
      </div>
    </div>
  );
};

export default Movie;
