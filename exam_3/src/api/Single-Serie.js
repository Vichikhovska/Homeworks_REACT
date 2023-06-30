import axios from "axios";


const GetSeriesById = async (seriesId) => {
  try {
    const response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/series/${seriesId}?apikey=12bf5c0e3cdbe9b2e2dc09876922a9c0`
    ); 
    
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch series by ID");
  }
};

export default GetSeriesById;
