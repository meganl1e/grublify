import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const waitlistSchema = new Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String,
      required: true,
      unique: true, 
    },
    message: {
      type: String,
      default: 'No message provided'
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Waitlist', waitlistSchema);
