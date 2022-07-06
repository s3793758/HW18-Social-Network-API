const express = require('express');
const thought = require('../models/though');
const thought = require('../models/user');
const user = express.Router();

Router.get('/thought', (req, res) => {
    try {
        const though = await Though.find({});
        res.send(thoughs)
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});


Router.post('/thought', async (req, res) => {
    try {
      const { thoughText, username } = req.body;
      const thought = new Thought({
        thoughText,
        username,
      });
      await thought.save();

      const foundUser = await User.findOne({username})
      foundUser.thoughts = [...foundUser.thoughts, thought];
      await foundUser.save();
      res.status(201).send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send('Something went wrong, Please try again later');
    }
  });

module.exports = Router;