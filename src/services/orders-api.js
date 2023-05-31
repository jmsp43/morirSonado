import axios from "axios";
const baseURL = "http://localhost:3001";


//show all foods
export const getFoods = async () => {
  const URL = `${baseURL}/menu`;
  const response = await axios.get(URL);
  return response;
};


//show one food
export const getItem = async (name) => {
  const URL = `${baseURL}/menu/${name}`;
  const response = await axios.get(URL);
  return response;
};

//Edit an order
export const editOrder = async (id, updatedOrder) => {
  const URL = `${baseURL}/updateOrder/${id}`;
  const response = await axios.put(URL, updatedOrder);
  return response;
};

//Create an order
export  const createOrder = async (order) => {
  const URL = `${baseURL}/newOrder`;
  console.log(order)
  const response = await axios.post(URL, order);
  return response;
};

// Delete an item from your order
export const deleteItem = async (id) => {
  const URL = `${baseURL}/deleteItem/${id}`;
  const response = await axios.delete(URL);
  return response;
};
