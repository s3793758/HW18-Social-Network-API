const mongoose = require('mongoose');

const ThoughtSchema = new mongoose.Schema({
  ThoughtText: {
    type: String,
    required: true,
    validate(value) {
      if (value < 1 || value.length > 280) {
        throw new Error('please enter thought Text between 1 to 280.');
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

const Thought = mongoose.model('Thought', ThoughtSchema);

module.exports = Thought;
