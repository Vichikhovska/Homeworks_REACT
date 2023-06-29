import axios from "./general";

const GetAllCharacters = {
  get: async (params) => {
    const resp = await axios.get(`/characters?${params}`);

    return resp.data;
  },
};

export default GetAllCharacters;
