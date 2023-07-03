import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";


function MySwiperSlide({ title, text, image, link }) {
  const handleClick = () => {
    const navigate = useNavigate;
    navigate("/characters")
  };

  return (
    <div className="slide">
      <div className="slide-content">
        <h2 className="slide-content_title">{title}</h2>
        <p className="slide-content_text">{text}</p>
        <Button className="mrvl-main-button" text="Learn more" onClick={handleClick} />
      </div>
      <div className="slide-image" style={{ backgroundImage: `linear-gradient(to right, #000000, #434343), url(${image})` }}></div>
    </div>
  );
}

export default MySwiperSlide;
