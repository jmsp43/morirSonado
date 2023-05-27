import axios from "axios";
const baseURL = "http://localhost:3001";


//show user
export const getUser = (user) => {
  const URL = `${baseURL}/user/${user}`;
  const response = axios.get(URL);
  return response;
};
