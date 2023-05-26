import axios from "axios";
const baseURL = "http://localhost:3001/morirsonando";


//show all foods
export const getFoods = () => {
  const response = axios.get(baseURL);
  return response;
};

//show one food
export const getItem = (id) => {
  const URL = `${baseURL}/${id}`;
  const response = axios.get(URL);
  return response;
};

//Edit an order
export const editOrder = (id, updatedOrder) => {
  const URL = `${baseURL}/${id}`;
  const response = axios.put(URL, updatedOrder);
  return response;
};

//Create an order
export const createOrder = (order) => {
  const URL = baseURL;
  const response = axios.post(URL, order);
  return response;
};

// Delete an item from your order
export const deleteItem = (id) => {
  const URL = `${baseURL}/${id}`;
  const response = axios.delete(URL);
  return response;
};
