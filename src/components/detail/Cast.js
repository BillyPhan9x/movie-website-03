import { useEffect, useState } from "react";
import tmbdApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

const Cast = (props) => {
  const [casts, setCasts] = useState([]);
  // const [crews, setCrews] = useState([]);

  const noImage =
    "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

  useEffect(() => {
    const getCasts = async () => {
      const res = await tmbdApi.cast(props.id);
      console.log("res", res);
      setCasts(res.data.cast.slice(0, 5));
    };
    getCasts();
  }, [props.id]);

  // useEffect(() => {
  //   const getCrews = async () => {
  //     const res = await tmbdApi.cast(props.id);
  //     setCrews(res.data.crew);
  //     // console.log(res.data.crew);
  //   };
  //   getCrews();
  // }, [props.id]);

  return (
    <>
      <div className="list-casts">
        {casts.map((cast, id) => (
          <div key={id} className="casts">
            <div className="casts-profile">
              <img
                className="casts-img"
                src={
                  cast.profile_path
                    ? apiConfig.w500Image(cast.profile_path)
                    : noImage
                }
                alt={cast.name}
              />
            </div>
            <div className="casts-info">
              <p>{cast.name}</p>
              <p>as</p>
              <p>{cast.character}</p>
            </div>
            <p></p>
          </div>
        ))}
      </div>
      {/* <div className="crew-casts">
        {crews.map((crew, index) => (
          <div className="crews" key={index}>
            <p>{crew.job === "Director" && `Director : ${crew.name}`}</p>
            <p>{crew.job === "Story" && crew.name}</p>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Cast;
