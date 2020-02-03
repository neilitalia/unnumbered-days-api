const mongoose = require('mongoose');

const options = {
  timestamps: true
};

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    max: 32
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 32
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  }
}, options);

module.exports = mongoose.model('User', userSchema);