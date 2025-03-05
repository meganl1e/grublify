const express = require('express');
const app = express();
const dotenv = require('dotenv');

const mongoose = require('mongoose');
const cors = require('cors');

const waitlistFormRouter = require("./src/routes/waitlist-form.js")


dotenv.config();
const PORT = process.env.PORT || 5000;
const url = process.env.MONGODB_URI

app.use(cors());


app.use(express.json());

// connecting to mongoose
mongoose.connect(url)
  .then((result) => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
  });

// main
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// middleware function
// when a request is made to any url that starts with /api/waitlist-form,
// express will pass control to waitlistFormRouter
app.use('/api/waitlist-form', waitlistFormRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;