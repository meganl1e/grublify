import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import waitlistRouter from './routes/waitlist.route.js';
import connectDB from './lib/connectDB.js';

config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: [process.env.CLIENT_URL, process.env.DEV_URL],
  credentials: true
}));

app.use(express.json());

// main
app.get('/', (req, res) => {
  res.send('Hello from the backend! this is the backend for grublify');
});

app.use('/api/waitlist-form', waitlistRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
