const express = require('express');
const User = require('../models/user');
const Router = express.Router();

Router.get('/users', async (req, res) => {
  try {
    const user = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send();
  }
});

Router.post('/users', async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = new User({
      username,
      email,
    });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = Router;
