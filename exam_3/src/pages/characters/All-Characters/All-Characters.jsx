import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import PropTypes from "prop-types";

//api
import GetAllCharacters from "../../../api/All-Characters";

//pages
import CharacterCard from "../CharacterCard/CharacterCard";

//components
import Pagination from "../../../components/Pagination";

//styles
import "../../../styles/pages/all-characters.scss";


const PAGE_SIZE = 20;
function AllCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const timestamp = Date.now().toString();
        const offset = (currentPage - 1) * PAGE_SIZE;

        const response = await GetAllCharacters.get(
          `ts=${timestamp}&apikey=12bf5c0e3cdbe9b2e2dc09876922a9c0&offset=${offset}&limit=${PAGE_SIZE}`
        );

        setCharacters(response.data.results);
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

  const TOTAL_PAGES = Math.ceil(characters.length / PAGE_SIZE);

  return (
    <section className="mrvl-section-all-characters">
      {
        loading 
        ? (
          <div className="mrvl-section-all-characters_loader">
            <Spin />
            Loading...
          </div>
          ) 
        : (
          <div className="mrvl-section-all-characters_ondisplay">
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                characterId={character.id}
                name={character.name}
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              />
            ))}
          </div>
        )
      }
      <Pagination
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
      />
    </section>
  );
}

AllCharacters.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
};

export default AllCharacters;