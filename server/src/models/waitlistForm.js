const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: {type: String}
});

module.exports = mongoose.model('Form', formSchema);
