import axios from "./general";

const GetAllCharacters = {
  get: async (params) => {
    const resp = await axios.get(`/characters?${params}`);
    console.log(resp);
    return resp.data;
  },
};

export default GetAllCharacters;
