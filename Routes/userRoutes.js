const express = require('express');
const router = express.Router();
const { User } = require('../models');

// GET all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single user by its _id and populated thought and friend data
router.get('/users/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
                            .populate('thoughts')
                            .populate('friends');
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new user
router.post('/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT to update a user by its _id
router.put('/users/:userId', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE to remove user by its _id
router.delete('/users/:userId', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(204).end();
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
