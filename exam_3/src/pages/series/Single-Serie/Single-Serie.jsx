import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import { useParams } from "react-router-dom";

// styles
import "../../../styles/pages/single-serie.scss";


function SingleSeries() {
  const { id } = useParams();
  const [series, setSeries] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const REACT_APP_API_URL = "https://gateway.marvel.com:443/v1/public";
        const REACT_APP_API_PUBLIC_KEY = "12bf5c0e3cdbe9b2e2dc09876922a9c0";

        const response = await axios.get(
          `${REACT_APP_API_URL}/series/${id}?apikey=${REACT_APP_API_PUBLIC_KEY}`
        );

        if (
          response.data.data &&
          response.data.data.results &&
          response.data.data.results.length > 0
        ) {
          setSeries(response.data.data.results[0]);
        } else {
          setSeries(null);
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
    return <div className="loader">
      <Spin /> Loading...
    </div>;
  }

  if (!series) {
    return <div>Series not found.</div>;
  }

  const { title, description, startYear, endYear, rating, thumbnail, comics, stories, events, next } = series;

  return (
    <div className="mrvl-single-serie-page">
      <div className="mrvl-single-serie-page__image">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
      </div>
      <div className="mrvl-single-serie-page__content">
        <h2 className="mrvl-single-serie-page__content_title">{title}</h2>
        <p className="mrvl-single-serie-page__content_text">{description || "No description available."}</p>
        <p className="mrvl-single-serie-page__content_subtitle">Start Year: {startYear}</p>
        <p className="mrvl-single-serie-page__content_subtitle">End Year: {endYear}</p>
        <p className="mrvl-single-serie-page__content_subtitle">Rating: {rating}</p>
        <h3 className="mrvl-single-serie-page__content_subtitle">Comics:</h3>
        <ul className="mrvl-single-serie-page__content_list">
          {
          comics.items.length > 0 
            ? (comics.items.map((comic) => (
                  <li className="mrvl-single-serie-page__content_list_item" key={comic.resourceURI}>{comic.name}</li>
                ))
              ) 
            : (<li>No comics available.</li>)
          }
        </ul>
        <h3 className="mrvl-single-serie-page__content_subtitle">Stories:</h3>
        <ul className="mrvl-single-serie-page__content_list">
          {
          stories.items.length > 0 
            ? (stories.items.map((story) => (
                  <li className="mrvl-single-serie-page__content_list_item" key={story.resourceURI}>{story.name}</li>
                ))
              ) 
            : (<li>No stories available.</li>)
          }
        </ul>
        <h3 className="mrvl-single-serie-page__content_subtitle">Events:</h3>
        <ul className="mrvl-single-serie-page__content_list">
          {
          events.items.length > 0 
            ? (events.items.map((event) => (
                  <li className="mrvl-single-serie-page__content_list_item" key={event.resourceURI}>{event.name}</li>
                ))
              ) 
            : (<li>No events available.</li>)
          }
        </ul>
        {next && (
          <div className="mrvl-single-serie-page__next">
            <h3>Next Series:</h3>
            <p>{next.title}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleSeries;
