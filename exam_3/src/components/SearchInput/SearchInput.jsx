import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

//api
import SearchSeries from "../../api/searchSeries";

//component
import SearchResultsModal from "../SearchResultsModal/SearchResultsModal";

//styles
import "../../styles/components/search-input/search-input.scss";


function SearchInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchIconClick = () => {
    setIsOpen(true);
  };

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      return;
    }

    try {
      await SearchSeries(searchTerm, setSearchResults);
    } catch (error) {
      console.error("Error searching series:", error);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleModalClose = () => {
    setSearchTerm("");
    setIsOpen(false);
    setSearchResults([]);
  };

  return (
    <div className={`custom-input ${isOpen ? "open" : ""}`}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <BiSearch
        className="custom-input_icon"
        onClick={isOpen ? handleSearch : handleSearchIconClick}
      />
      {searchResults.length > 0 && isOpen && (
        <SearchResultsModal
          isOpen={isOpen}
          setIsOpen={handleModalClose}
          searchResults={searchResults}
          clearSearchTerm={handleModalClose}
        />
      )}
    </div>
  );
}

export default SearchInput;
