const mongoose = require('mongoose');
const validator = require('validator');

const ThoughtSchema = new mongoose.Schema({
  ThoughText: {
    type: String,
    required: true,
    validate(value) {
      if (value < 1 || value.length > 280) {
        throw new Error('please enter thoughText between 1 to 280.');
      }
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
});

const Though = mongoose.model('Though', UserSchema);

module.exports = User;
