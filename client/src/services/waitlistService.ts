import { InsertWaitlist } from '../shared/schema';

import axios from 'axios';

const API_URL = 'https://grublify-backend.vercel.app/api/waitlist-form';

// const API_URL = `${process.env.REACT_APP_API_BASE_URL}/api/waitlist-form`;

// const create = (newObject: InsertWaitlist) => {
//   console.log("it is going to go to: ", API_URL)
//   console.log("the new object is: ", newObject)
//   const request = axios.post(API_URL, newObject)
//   return request.then(response => response.data)
// }

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Include if you're using cookies or authentication
  headers: {
    'Content-Type': 'application/json',
  },
});

// const create = (newObject: InsertWaitlist) => {
//   console.log("Sending request to:", API_URL);
//   return axiosInstance.post('', newObject)
//     .then(response => response.data)
//     .catch(error => {
//       console.error("Error in waitlist service:", error);
//       throw error;
//     });
// };


const create = async (newObject: InsertWaitlist) => {
  try {
    const response = await axios.post(API_URL, newObject, { timeout: 30000 });
    return response.data;
  } catch (error) {
    console.error("Error in waitlist service:", error);
    throw error;
  }
};

export default { create }