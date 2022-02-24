import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:44338/api",
})

export default api;