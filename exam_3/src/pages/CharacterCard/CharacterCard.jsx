import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// styles
import "../../styles/pages/character-card.scss";


function CharacterCard({ characterId, name, image }) {
  return (
    <div className="character-card">
      <div className="character-card__image">
        <img src={image} alt={name} />
      </div>
      <div className="character-card__content">
        <h2>
          <Link to={`/characters/${characterId}`}>{name}</Link>
        </h2>
      </div>
    </div>
  );
}

CharacterCard.propTypes = {
  characterId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CharacterCard;
