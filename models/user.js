const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Please enter valid email');
      }
      return true;
    },
  },
  reactions: [
    {
      type: mongoose.Schema.Type.ObjectId,
      //   ref match with model though
      ref: 'Though',
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Type.ObjectId,
      //   ref match with model user
      ref: 'User',
    },
  ],
});

UseSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
