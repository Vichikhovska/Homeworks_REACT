import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// styles
import "../../../styles/pages/character-card.scss";


function CharacterCard({ characterId, name, image }) {
  return (
    <div className="mrvl-character-card">
      <div className="mrvl-character-card__image">
        <img src={image} alt={name} />
      </div>
      <div className="mrvl-character-card__content">
        <h2>
          <Link to={`/characters/${characterId}`}>{name}</Link>
        </h2>
      </div>
    </div>
  );
}

CharacterCard.propTypes = {
  characterId: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
};

export default CharacterCard;
