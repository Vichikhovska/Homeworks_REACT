import React from "react";

//components
import Button from "../../components/Button/Button";

//styles
import "../../styles/containers/series.scss";

function Series () {
  const handleButtonClick = () => {
    window.location.href = "/series";
  };

  return (
    <section className="mrvl-section-series">
      <div className="mrvl-section-series_parent">
        <div className="mrvl-section-series_parent_info">
          <h1 className="mrvl-section-series_parent_info_title">Series</h1>
          <p className="mrvl-section-series_parent_info_text">
            Series have the power to transport us to different worlds, evoke a range of emotions, and leave a lasting impact on our lives. In the realm of movies, the Marvel Cinematic Universe (MCU) has taken the world by storm. With its interconnected storylines, breathtaking visual effects, and compelling characters, the MCU has redefined the superhero genre.
          </p>
        </div>
        <div className="mrvl-section-series_parent_description">
          <p className="mrvl-section-series_parent_description_text">
            From the thrilling adventures of Iron Man to the cosmic battles of the Guardians of the Galaxy, each Marvel movie has offered audiences a unique and immersive experience. Join the excitement and witness the magic of movies as Marvel brings its iconic characters to life on the big screen.
          </p>
          <Button text="Series" onClick={handleButtonClick} />
        </div>
      </div>
    </section>
  );
}

export default Series;