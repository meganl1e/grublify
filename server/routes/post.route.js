import express from 'express';

const router = express.Router()

router.get('/', (req, res) => {
  response.end("hello from the BLOG api")
})

export default router;