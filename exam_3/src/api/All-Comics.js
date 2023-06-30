import axios from "./general";

const GetAllComics = {
  get: async (params) => {
    const resp = await axios.get(`/comics?${params}`);

    return resp.data;
  },
};

export default GetAllComics;
