import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// styles
import "../../../styles/pages/series-card.scss";


function SeriesCard({ seriesId, title, image }) {
  return (
    <div className="mrvl-series-card">
      <div className="mrvl-series-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="mrvl-series-card__content">
        <h2>
          <Link to={`/series/${seriesId}`}>{title}</Link>
        </h2>
      </div>
    </div>
  );
}

SeriesCard.propTypes = {
  seriesId: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
};

export default SeriesCard;
