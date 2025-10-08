const User = require("../models/user");

const getUsers = (req, res) => {
  // Get all users
  return User.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.status(500).send(err.message));
};

const createUser = (req, res) => {
  // Create user
  return User.create({ ...req.body })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send(err.message);
      }
      res.status(500).send(err.message);
    });
};

const getUser = (req, res) => {
  // Get user
  const { user_id } = req.params;
  return User.findById(user_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send("Пользователь с таким id не найден");
      }
      res.status(200).send(user);
    })
    .catch((err) => res.status(500).send(err.message));
};

const updateUser = (req, res) => {
  // Update user
  const { user_id } = req.params;
  return User.findByIdAndUpdate(user_id, { ...req.body })
    .then((user) => {
      if (!user) {
        return res.status(404).send("Пользователь с таким id не найден");
      }
      res.status(200).send(user);
    })
    .catch((err) => res.status(500).send(err.message));
};

const deleteUser = (req, res) => {
  // Delete user
  const { user_id } = req.params;
  return User.findByIdAndDelete(user_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send("Пользователь с таким id не найден");
      }
      res.status(200).send("Success");
    })
    .catch((err) => res.status(500).send(err.message));
};

const getUserBook = (req, res) => {
  // Get user book
};

const takeUserBook = (req, res) => {
  // Take user book
};

const returnUserBook = (req, res) => {
  // Return user book
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUserBook,
  takeUserBook,
  returnUserBook,
};
