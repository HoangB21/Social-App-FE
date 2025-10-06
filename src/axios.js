import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://3.107.222.139:8800/api/",
  withCredentials: true,
});
