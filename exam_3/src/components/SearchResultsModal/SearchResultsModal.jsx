import React from "react";

//styles
import "../../styles/components/search-modal/search-results-modal.scss"


function SearchResultsModal({ isOpen, setIsOpen, searchResults }) {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-dialog">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <div className="modal-content">
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((series) => (
                <li key={series.id}>{series.title}</li>
              ))}
            </ul>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResultsModal;
