import { InsertWaitlist } from '../shared/schema';

import axios from 'axios';

// const API_URL = 'http://localhost:3000/api/waitlist-form'; // this should be aws/heroku/digital ocean

// const API_URL = 'https://grublify-backend.vercel.app/api/waitlist-form';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/api/waitlist-form`;

const create = (newObject: InsertWaitlist) => {
  console.log("it is going to go to: ", API_URL)
  const request = axios.post(API_URL, newObject)
  return request.then(response => response.data)
}

export default { create }