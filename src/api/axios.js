import axios from "axios";
import apiConfig from "./apiConfig";
import queryString from "query-string";

export default axios.create({
  baseURL: apiConfig.baseUrl,
});
