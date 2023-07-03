import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import { useParams } from "react-router-dom";

// styles
import "../../../styles/pages/single-character.scss";


function SingleCharacter() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const REACT_APP_API_URL = "https://gateway.marvel.com:443/v1/public";
        const REACT_APP_API_PUBLIC_KEY = "12bf5c0e3cdbe9b2e2dc09876922a9c0";

        const response = await axios.get(
          `${REACT_APP_API_URL}/characters/${id}?apikey=${REACT_APP_API_PUBLIC_KEY}`
        );
        setCharacter(response.data.data.results[0]);
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

  const { name, thumbnail, description, comics } = character;

  return (
    <div className="mrvl-single-character-page">
      <div className="mrvl-single-character-page__image">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
      </div>
      <div className="mrvl-single-character-page__content">
        <h2 className="mrvl-single-character-page__content_title">{name}</h2>
        <p className="mrvl-single-character-page__content_text">{description || "No description available."}</p>
        <h3 className="mrvl-single-character-page__content_subtitle">Comics:</h3>
        <ul className="mrvl-single-character-page__content_list">
          {comics.items.map((comic) => (
            <li className="mrvl-single-character-page__content_list_item" key={comic.resourceURI}>{comic.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SingleCharacter;
