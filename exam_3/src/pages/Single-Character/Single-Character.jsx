import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

// api
import GetCharacterById from "../../api/Single-Character";

// styles
import "../../styles/pages/single-character.scss";

function SingleCharacter() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await GetCharacterById.get(id);
        setCharacter(response.data.results[0]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Spin />;
  }

  if (!character) {
    return <div>Character not found.</div>;
  }

  const { name, image, description, comics } = character;

  return (
    <div className="single-character-page">
      <div className="single-character-page__image">
        <img src={`${image.path}.${image.extension}`} alt={name} />
      </div>
      <div className="single-character-page__content">
        <h2>{name}</h2>
        <p>{description || "No description available."}</p>
        <h3>Comics:</h3>
        <ul>
          {comics.items.map((comic) => (
            <li key={comic.id}>{comic.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

SingleCharacter.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SingleCharacter;
