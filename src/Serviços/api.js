import axios from "axios";

const corsEverywhere = "https://cors-everywhere.herokuapp.com/";

const localhost = "https://localhost:44338/api";
const webAppAWS = "http://nossoqueijowebapi-dev.sa-east-1.elasticbeanstalk.com/api";

const finalUrl = corsEverywhere+webAppAWS;

const api = axios.create({
    baseURL: finalUrl,
})

export default api;