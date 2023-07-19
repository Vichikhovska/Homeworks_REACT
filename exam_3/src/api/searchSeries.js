import axios from "axios";


const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
const REACT_APP_API_PUBLIC_KEY = process.env.REACT_APP_API_PUBLIC_KEY;

const SearchSeries = async (searchTerm, setSearchResults) => {
  if (searchTerm.trim() === "") {
    return;
  }

  try {
    const response = await axios.get(
      `${REACT_APP_API_URL}/series`,
      {
        params: {
          titleStartsWith: searchTerm,
          apikey: REACT_APP_API_PUBLIC_KEY,
        },
      }
    );

    setSearchResults(response.data.data.results);
  } catch (error) {
    throw new Error("Error searching series:", error);
  }
};

export default SearchSeries;
