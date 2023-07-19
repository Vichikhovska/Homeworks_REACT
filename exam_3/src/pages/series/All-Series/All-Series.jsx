import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import PropTypes from "prop-types";

//components
import Pagination from "../../../components/Pagination";

//api
import GetAllSeries from "../../../api/allSeries";

//pages
import SeriesCard from "../SeriesCard/SeriesCard";

//styles
import "../../../styles/pages/all-series.scss";


const PAGE_SIZE = 20;
function AllSeries() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const timestamp = Date.now().toString();
        const offset = (currentPage - 1) * PAGE_SIZE;
        const REACT_APP_API_PUBLIC_KEY = "12bf5c0e3cdbe9b2e2dc09876922a9c0";

        const response = await GetAllSeries.get(
          `ts=${timestamp}&apikey=${REACT_APP_API_PUBLIC_KEY}&offset=${offset}&limit=${PAGE_SIZE}`
        );

        setSeries(response.data.results);
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

  const TOTAL_PAGES = Math.ceil(series.length / PAGE_SIZE);

  return (
    <section className="mrvl-section-all-series">
      {
        loading 
        ? (
            <div className="mrvl-section-all-series_loader">
              <Spin /> Loading...
            </div>
          ) 
        : (<>
          <div className="mrvl-section-all-series_ondisplay">
            {series.map((series) => (
              <SeriesCard
                key={series.id}
                title={series.title}
                description={series.description}
                seriesId={series.id}
                image={`${series.thumbnail.path}.${series.thumbnail.extension}`}
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

AllSeries.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default AllSeries;
