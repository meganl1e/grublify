import express from 'express';
import { postWaitlist } from '../controllers/waitlist.controller.js';

// essentially a mini app that can have its own routes and middleware
// similar to the const app = express() in server.js
const router = express.Router();

router.get('/', (req, res) => {
  response.end("hello from the WAITLIST api")
})

router.post('/post', postWaitlist);


export default router;