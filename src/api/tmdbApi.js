import api from "./axios";

import apiConfig from "./apiConfig";
import queryString from "query-string";

const paramsSerializer = (params) =>
  queryString.stringify({ ...params, api_key: apiConfig.api_key });

const tmbdApi = {
  detail: (id, params) => {
    const url = `/movie/${id}?api_key=${apiConfig.api_key}&language=en-US`;
    return api.get(url, params);
  },
  cast: (id, params) => {
    const url = `movie/${id}/credits?api_key=${apiConfig.api_key}&language=en-US`;
    return api.get(url, params);
  },
  getVideos: (id, params) => {
    const url = `movie/${id}/videos?api_key=${apiConfig.api_key}&language=en-US`;
    return api.get(url, params);
  },
  similar: (id, params) => {
    const url = `movie/${id}/similar?api_key=${apiConfig.api_key}&page=1`;
    return api.get(url, params);
  },
  reviews: (id, params) => {
    const url = `movie/${id}/reviews?api_key=${apiConfig.api_key}&page=1`;
    return api.get(url, params);
  },
};

export default tmbdApi;
