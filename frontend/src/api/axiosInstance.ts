import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;

const mainInstance = axios.create({
  baseURL: base_url,
  withCredentials: true,
});

export default mainInstance;
