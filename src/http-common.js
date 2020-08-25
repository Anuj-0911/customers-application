import axios from "axios";

export default axios.create({
  baseURL:"https://cors-anywhere.herokuapp.com/http://15.207.45.68:8080",
  headers: {
    "Content-type": "json"
  }
});