import React from "react";
import PropTypes from "prop-types";

//components
import Button from "../Button";

//styles
import "../../styles/components/pagination/pagination.scss";
import "../../styles/components/button/pagination-button.scss";


function Pagination({ currentPage, totalPages, goToPreviousPage, goToNextPage }) {
  return (
    <div className="mrvl-pagination">
      <Button className="mrvl-pagination-button" onClick={goToPreviousPage} disabled={currentPage === 1} text="Previous" />
      <span className="mrvl-pagination_current-page">{currentPage}</span>
      <span className="mrvl-pagination_between">of</span>
      <span className="mrvl-pagination_total-pages">{totalPages}</span>
      <Button className="mrvl-pagination-button" onClick={goToNextPage} disabled={currentPage === totalPages} text="Next" />
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  goToPreviousPage: PropTypes.func.isRequired,
  goToNextPage: PropTypes.func.isRequired,
};

export default Pagination;
