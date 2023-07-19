import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import PropTypes from "prop-types";

//components
import Pagination from "../../../components/Pagination";

//api
import GetAllComics from "../../../api/allComics";

//pages
import ComicsCard from "../ComicsCard/ComicsCard";

//styles
import "../../../styles/pages/all-comics.scss";


const PAGE_SIZE = 20;
function AllComics() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const timestamp = Date.now().toString();
        const offset = (currentPage - 1) * PAGE_SIZE;
        const REACT_APP_API_PUBLIC_KEY = "12bf5c0e3cdbe9b2e2dc09876922a9c0";

        const response = await GetAllComics.get(
          `ts=${timestamp}&apikey=${REACT_APP_API_PUBLIC_KEY}&offset=${offset}&limit=${PAGE_SIZE}`
        );

        setComics(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const TOTAL_PAGES = Math.ceil(comics.length / PAGE_SIZE);

  return (
    <section className="mrvl-section-all-comics">
      {
        loading 
        ? (
          <div className="mrvl-section-all-comics_loader">
            <Spin /> Loading...
          </div>
          ) 
        : (<>
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
          <Pagination
            currentPage={currentPage}
            totalPages={TOTAL_PAGES}
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
          />
        </>
      )}
    </section>
  );
}

AllComics.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default AllComics;
