import React, { useEffect, useState } from "react";
import tmbdApi from "../../api/tmdbApi";

const Videos = (props) => {
  console.log(props);
  console.log(props.id);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const res = await tmbdApi.getVideos(props.id);
      console.log("res", res.data.results);
      setVideos(
        res.data.results.find(
          (element) => element.type === "Trailer" && element.official === true
        )
      );
    };
    getVideos();
  }, [props.id]);
  console.log(videos);

  return (
    <>
      <div className="video">
        {videos && (
          <iframe
            src={`https://www.youtube.com/embed/${videos.key}`}
            title="video"
            width="100%"
            height="400px"
          ></iframe>
        )}
      </div>
    </>
  );
};

export default Videos;
