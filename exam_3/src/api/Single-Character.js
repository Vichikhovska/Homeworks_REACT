import axios from "axios";

const GetCharacterById = async (characterId) => {
  try {
    const response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${characterId}?apikey=12bf5c0e3cdbe9b2e2dc09876922a9c0`
    );    
    
    return response.data.data.results;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch character by ID");
  }
};

export default GetCharacterById;
