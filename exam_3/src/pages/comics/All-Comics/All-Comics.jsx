import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import PropTypes from "prop-types";

//api
import GetAllComics from "../../../api/All-Comics";

//pages
import ComicsCard from "../ComicsCard/ComicsCard";

//styles
import "../../../styles/pages/all-comics.scss";


function AllComics() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const timestamp = Date.now().toString();
        const response = await GetAllComics.get(
          `ts=${timestamp}&apikey=12bf5c0e3cdbe9b2e2dc09876922a9c0`
        );

        setComics(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="mrvl-section-all-comics">
      {loading ? (
        <div className="mrvl-section-all-comics_loader">
          <Spin /> Loading...
        </div>
      ) : (
        <div className="mrvl-section-all-comics_ondisplay">
          {comics.map((comic) => (
            <ComicsCard
              key={comic.id}
              title={comic.title}
              description={comic.description}
              comicsId={comic.id}
              image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            />          
          ))}
        </div>
      )}
    </section>
  );
}

AllComics.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
};

export default AllComics;
