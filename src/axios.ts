import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    // baseURL: "http://localhost:5001/shopin-97002/us-central1/api"
    baseURL: "https://us-central1-shopin-97002.cloudfunctions.net/api"

});

export default instance;