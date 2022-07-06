const express = require('express');
const User = require('../models/user');
const Router = express.Router();

Router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send('Something went wrong, Please try again later');
  }
});

Router.post('/', async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = new User({
      username,
      email,
    });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong, Please try again later');
  }
});

module.exports = Router;
