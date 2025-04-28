import axios from "axios";

const instance = axios.create({
  baseURL: "https://blog-platform-osks.onrender.com", 
});

export default instance;
