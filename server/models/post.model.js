import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const blogPostSchema = new Schema(
  {
    title: { 
      type: String, 
      required: true
    },
    content: {
      type: String,
      required: true
    },
    author: { 
      type: String, 
      required: true
    },
    date: { 
      type: Date,
      default: Date.now 
    },
  }
);

export default mongoose.model('BlogPost', blogPostSchema);
