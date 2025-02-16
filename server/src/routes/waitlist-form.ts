
const express = require('express');
const waitlistForm = require("../models/waitlistForm.ts")

const router = express.Router();

// POST route to handle form submissions
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save the form data to MongoDB
    const newFormEntry = new waitlistForm({ name, email });
    const savedEntry = await newFormEntry.save();

    res.status(201).json(savedEntry); // Respond with the saved entry
  } catch (error) {
    res.status(500).json({ message: 'Error saving form data', error });
  }
});

module.exports = router;
