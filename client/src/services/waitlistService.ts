import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/waitlist-form'; // this should be aws/heroku/digital ocean

const create = newObject => {
  const request = axios.post(API_URL, newObject)
  return request.then(response => response.data)
}

export default { create }