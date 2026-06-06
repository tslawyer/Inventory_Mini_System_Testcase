import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4000/api/products",
});

export default apiClient;
