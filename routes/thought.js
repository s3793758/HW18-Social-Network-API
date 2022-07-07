const express = require('express');
const Thought = require('../models/though');
const User = require('../models/user');
const Router = express.Router();

// getting though
Router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    res.send(thoughts);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

// getting though ID
Router.get('/:id', async (req, res) => {
  try {
    const thought = await Thought.findOne({ _id: req.params.id });
    console.log(thought);
    res.send(thought);
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong, Please try again later');
  }
});

// posting though
Router.post('/', async (req, res) => {
  try {
    const { ThoughtText, username } = req.body;
    const thought = new Thought({
      ThoughtText,
      username,
    });
    await thought.save();

    const foundUser = await Thought.findOne({ username });
    foundUser.thoughts = [...foundUser.thoughts, thought];
    await foundUser.save();
    res.status(201).send(thought);
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong, Please try again later');
  }
});

// update though
Router.patch('/:id', async (req, res) => {
  try {
    const updates = req.body;
    const thought = await Thought.findOne({ _id: req.params.id });
    console.log({ thought });
    if (!thought) {
      return res.status(400).send('no matching thought found.');
    }
    const updated = await Thought.findOneAndUpdate(
      { _id: thought._id },
      updates,
      {
        new: true,
      }
    );

    res.send(updated);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

Router.post('/:thoughtId/reactions', async (req, res) => {
  try {
    const body = req.body;
    const thought = await Thought.findOne({ _id: req.params.thoughtId });
    if (!thought) {
      return res.status(400).send('no matching thought found.');
    }
    thought.reactions = [...thought.reactions, body];
    await thought.save();
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = Router;
