import { InsertWaitlist } from '../shared/schema';

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/waitlist-form'; // this should be aws/heroku/digital ocean

const create = (newObject: InsertWaitlist) => {
  const request = axios.post(API_URL, newObject)
  return request.then(response => response.data)
}

export default { create }