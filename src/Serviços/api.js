import axios from "axios";

const corsEverywhere = "https://cors-everywhere.herokuapp.com/";


const azure = ""
const localhost = "https://localhost:44338/api";
const webAppAWS = "";

const finalUrl = corsEverywhere+webAppAWS;

const api = axios.create({
    baseURL: azure
})

export default api;
