import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import PropTypes from "prop-types";

//api
import GetAllSeries from "../../../api/All-Series";

//pages
import SeriesCard from "../SeriesCard/SeriesCard";

//styles
import "../../../styles/pages/all-series.scss";


function AllSeries() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const timestamp = Date.now().toString();
        const response = await GetAllSeries.get(
          `ts=${timestamp}&apikey=12bf5c0e3cdbe9b2e2dc09876922a9c0`
        );

        setSeries(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="mrvl-section-all-series">
      {loading ? (
        <div className="mrvl-section-all-series_loader">
          <Spin /> Loading...
        </div>
      ) : (
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
      )}
    </section>
  );
}

AllSeries.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
};

export default AllSeries;
