import React from "react";
import apiConfig from "../../api/apiConfig";
import Button from "../UI/Button";

import "./ImageSlider.css";

const ImageSlider = (props) => {
  const { title, name, original_name, backdrop_path, overview } = props;
  // Hàm cắt ngắn các chuỗi dài (kiểm tra độ dài chuỗi, thiết lập độ dài chuỗi nhất định, nếu độ dài chuỗi dài hơn độ dài đã thiết lặp thì cắt và thay vào đó ...)
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  // // Phần ảnh ImageSlider, bạn sẽ cần sử dụng ảnh backdrop (tương ứng với trường backdrop_path trả về từ API)
  return (
    <header className="slider">
      <img
        src={backdrop_path && apiConfig.originalImage(backdrop_path)}
        alt={name || title || original_name}
        className="slider__image"
      />
      <div className="slider__info">
        <h1 className="slider__info--title">
          {title || name || original_name}
        </h1>
        <Button>Play</Button>
        <Button>My List</Button>
        <p className="slider__info--overview">{truncate(overview, 150)}</p>
      </div>
    </header>
  );
};

export default ImageSlider;
