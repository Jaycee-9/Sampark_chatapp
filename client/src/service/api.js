import axios from "axios";

const URL = "http://localhost:8000";

export const userLogin = async (credentials) => {
  try {
    const response = await axios.post(`${URL}/userLogin`, credentials);
    return response;
  } catch (error) {
    console.log("axios api call error", error.message);
  }
};