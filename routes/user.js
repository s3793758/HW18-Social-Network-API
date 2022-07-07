const express = require('express');
const User = require('../models/user');
const Router = express.Router();

// get user
Router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong, Please try again later');
  }
});

// get user ID
Router.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id })
      .populate('thoughts')
      .populate('friends');
    console.log(user);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong, Please try again later');
  }
});

// post user
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

// update user
Router.patch('/:id', async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findOne({ _id: req.params.id });
    console.log({ user });
    if (!user) {
      // adding return so next code wont be executed
      return res.status(400).send('no matching user found.');
    }
    const updated = await User.findOneAndUpdate({ _id: user._id }, updates, {
      new: true,
    });
    res.send(updated);
  } catch (error) {
    console.log(error);
    res.status(500).send('something went wrong.');
  }
});

// delete user
Router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    if (!user) {
      return res.status(400).send('no matching user found.');
    }
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('something went wrong, please try again');
  }
});

Router.post('/userId/friends/:friendId', async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });
    if (!user) {
      return res.status(400).send('no matching user found');
    }
    user.friends = [...user.friends, req.params.friendId.friendId];
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('something went wrong please try again later');
  }
});

Router.delete('/userId/friends/:friendId', async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });
    if (!user) {
      return res.status(400).send('no matching user found');
    }
    user.friends = user.friends.filter((friend) => {
      return friend._id.toString() !== req.params.friendId;
    });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('something went wrong please try again later');
  }
});

module.exports = Router;
