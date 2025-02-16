const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const waitlistFormRouter = require("./routes/waitlist-form.ts")


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());


app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Use the form route
app.use('/api/waitlist-form', waitlistFormRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
