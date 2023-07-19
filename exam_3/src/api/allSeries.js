import axios from "./general";

const GetAllSeries = {
  get: async (params) => {
    const resp = await axios.get(`/series?${params}`);

    return resp.data;
  },
};

export default GetAllSeries;
