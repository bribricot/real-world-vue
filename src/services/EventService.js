import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/bribricot/real-world-vue",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  getEvents() {
    return apiClient.get("/events") //Added onto baseURL
  },
  getEvent(id) {
    return apiClient.get("/events/" + id) //Happend the id we take in parameter to the 
  }
}
