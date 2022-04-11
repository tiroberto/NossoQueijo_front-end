import axios from "axios";

const corsEverywhere = "https://cors-everywhere.herokuapp.com/";



const localhost = "https://localhost:44338/api";
const webAppAWS = "https://nossoqueijowebapi-dev.sa-east-1.elasticbeanstalk.com/api";

const finalUrl = corsEverywhere+webAppAWS;

const api = axios.create({
    baseURL: webAppAWS
})

export default api;