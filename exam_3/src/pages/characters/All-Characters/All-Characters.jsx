import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import PropTypes from "prop-types";

//api
import GetAllCharacters from "../../../api/All-Characters";

//pages
import CharacterCard from "../CharacterCard/CharacterCard";

//styles
import "../../../styles/pages/all-characters.scss";


function AllCharacters () {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const timestamp = Date.now().toString();
        const response = await GetAllCharacters.get(
          `ts=${timestamp}&apikey=12bf5c0e3cdbe9b2e2dc09876922a9c0`
        );

        setCharacters(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="mrvl-section-all-characters">
      {
        loading 
          ? (<div className="mrvl-section-all-characters_loader">
              <Spin/>
              Loading...
            </div>) 
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
    </section>
  );
};

AllCharacters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  loading: PropTypes.bool,
};

export default AllCharacters;