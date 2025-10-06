import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://52.64.14.178:8800/api/",
  withCredentials: true,
});
