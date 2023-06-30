import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// styles
import "../../../styles/pages/comics-card.scss";


function ComicsCard({ comicsId, title, image }) {
  return (
    <div className="mrvl-comics-card">
      <div className="mrvl-comics-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="mrvl-comics-card__content">
        <h2>
          <Link to={`/comics/${comicsId}`}>{title}</Link>
        </h2>
      </div>
    </div>
  );
}

ComicsCard.propTypes = {
  characterId: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
};

export default ComicsCard;
