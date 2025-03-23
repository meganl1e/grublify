import Waitlist from "../models/waitlist.model.js";

export const getWaitlists = async (req, res) => {
  try {
    const waitlists = await Waitlist.find();
    res.status(200).json(waitlists);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postWaitlist = async (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received data:', { name, email, message }); // Log received data

  try {
    const newWaitlistEntry = new Waitlist({ name, email, message });
    const savedWaitlist = await newWaitlistEntry.save();

    res.status(201).json(savedWaitlist); // Respond with the saved entry
  }
  catch (error) {
    res.status(500).json({ message: 'Error saving form data', error });
  }
};