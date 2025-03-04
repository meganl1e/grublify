import axios from 'axios';

const API_URL = 'http://localhost:3000/api/waitlist-form'; // this should be aws/heroku/digital ocean

interface WaitlistFormData {
  // Define the properties of your form data
  name: string;
  email: string;
  message: string;
  // Add other properties as needed
}

const create = (newObject: WaitlistFormData) => {
  const request = axios.post(API_URL, newObject)
  return request.then(response => response.data)
}

export default { create }