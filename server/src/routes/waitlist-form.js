
const express = require('express');
const waitlistForm = require("../models/waitlistForm.js")

// essentially a mini app that can have its own routes and middleware
// similar to the const app = express() in server.js
const router = express.Router();

// POST route to handle form submissions
router.post('/', async (request, response) => {
  const { name, email, message } = request.body;

  try {
    const newFormEntry = new waitlistForm({ name, email, message });
    const savedEntry = await newFormEntry.save();

    response.status(201).json(savedEntry); // Respond with the saved entry
  }
  catch (error) {
    response.status(500).json({ message: 'Error saving form data', error });
  }
});

module.exports = router;
