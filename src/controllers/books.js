const Book = require("../models/book");

const getBooks = (req, res) => {
  // Get all books
  return Book.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.status(500).send(err.message));
};

const createBook = (req, res) => {
  // Create book
  return Book.create({ ...req.body })
    .then((book) => {
      res.status(201).send(book);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send(err.message);
      }
      res.status(500).send(err.message);
    });
};

const getBook = (req, res) => {
  // Get book
  const { book_id } = req.params;
  return Book.findById(book_id)
    .then((book) => {
      if (!book) {
        return res.status(404).send("Книга с таким id не найдена");
      }
      res.status(200).send(book);
    })
    .catch((err) => res.status(500).send(err.message));
};

const updateBook = (req, res) => {
  // Update book
  const { book_id } = req.params;
  return Book.findByIdAndUpdate(book_id, { ...req.body })
    .then((book) => {
      if (!book) {
        return res.status(404).send("Книга с таким id не найдена");
      }
      res.status(200).send(book);
    })
    .catch((err) => res.status(500).send(err.message));
};

const deleteBook = (req, res) => {
  // Delete book
  const { book_id } = req.params;
  return Book.findByIdAndDelete(book_id)
    .then((book) => {
      if (!book) {
        return res.status(404).send("Книга с таким id не найдена");
      }
      res.status(200).send("Success");
    })
    .catch((err) => res.status(500).send(err.message));
};

module.exports = { getBooks, createBook, getBook, updateBook, deleteBook };
