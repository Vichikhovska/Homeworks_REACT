import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import { useParams } from "react-router-dom";

// styles
import "../../../styles/pages/single-comics.scss";

function SingleComics() {
  const { id } = useParams();
  const [comics, setComics] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=12bf5c0e3cdbe9b2e2dc09876922a9c0`
        );

        if (response.data.data && response.data.data.results && response.data.data.results.length > 0) {
          setComics(response.data.data.results[0]);
        } else {
          setComics(null);
        }

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

  if (!comics) {
    return <div>Comics not found.</div>;
  }

  const { title, thumbnail, description, creators } = comics;

  return (
    <div className="mrvl-single-comics-page">
      <div className="mrvl-single-comics-page__image">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
      </div>
      <div className="mrvl-single-comics-page__content">
        <h2 className="mrvl-single-comics-page__content_title">{title}</h2>
        <p className="mrvl-single-comics-page__content_text">{description || "No description available."}</p>
        <h3 className="mrvl-single-comics-page__content_subtitle">Creators:</h3>
        <ul className="mrvl-single-comics-page__content_list">
          {creators.items.length > 0 ? (
            creators.items.map((creator) => (
              <li className="mrvl-single-comics-page__content_list_item" key={creator.resourceURI}>{creator.name}</li>
            ))
          ) : (
            <li>No creators available.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SingleComics;
