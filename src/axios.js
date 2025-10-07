import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://52.64.14.178:8800/api/",
  withCredentials: true,
});

makeRequest.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.accessToken;
  console.log("Axios Interceptor - Token:", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
