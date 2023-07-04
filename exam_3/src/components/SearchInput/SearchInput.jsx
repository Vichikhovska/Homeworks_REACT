import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

//styles
import "../../styles/components/search-input/search-input.scss";


function SearchInput() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`custom-input ${isOpen ? "open" : ""}`}>
      <input type="text" placeholder="Search" />
      <BiSearch className="custom-input_icon" onClick={handleToggleSearch} />
    </div>
  );
};

export default SearchInput;
