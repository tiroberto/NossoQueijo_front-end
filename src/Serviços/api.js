import axios from "axios";

const localhost = "https://localhost:44338/api";
const webAppAWS = "https://nossoqueijowebapi-dev.sa-east-1.elasticbeanstalk.com";

const api = axios.create({
    baseURL: webAppAWS,
})

export default api;