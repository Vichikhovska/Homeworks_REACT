import axios from "axios";


const GetSeriesById = async (seriesId) => {
  try {
    const REACT_APP_API_URL = "https://gateway.marvel.com:443/v1/public";
    const REACT_APP_API_PUBLIC_KEY = "12bf5c0e3cdbe9b2e2dc09876922a9c0";
    
    const response = await axios.get(
      `${REACT_APP_API_URL}/series/${seriesId}?apikey=${REACT_APP_API_PUBLIC_KEY}`
    ); 
    
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch series by ID");
  }
};

export default GetSeriesById;
