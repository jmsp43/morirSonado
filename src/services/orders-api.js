import axios from "axios";
const baseURL = "http://localhost:3001";


//show all foods
export const getFoods = () => {
  const URL = `${baseURL}/menu`;
  const response = axios.get(URL);
  return response;
};

//show one section
export const getSection = (section) => {
  const URL = `${baseURL}/menu/${section}`;
  const response = axios.get(URL);
  return response;
};

//show one food
export const getItem = (name) => {
  const URL = `${baseURL}/menu/${name}`;
  const response = axios.get(URL);
  return response;
};

//Edit an order
export const editOrder = (id, updatedOrder) => {
  const URL = `${baseURL}/updateOrder/${id}`;
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
  const URL = `${baseURL}/deleteItem/${id}`;
  const response = axios.delete(URL);
  return response;
};
