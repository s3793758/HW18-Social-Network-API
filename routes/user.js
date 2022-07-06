const express = require('express');
const User = require('../models/user');
const Router = express.Router();

Router.get('/', async (req, res) => {
  try {
    const user = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send();
  }
});

module.export.Router;
