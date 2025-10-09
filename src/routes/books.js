const bookRouter = require("express").Router();
const {
  getBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

bookRouter.get("/books", getBooks);
bookRouter.post("/books", createBook);
bookRouter.get("/books/:book_id", getBook);
bookRouter.patch("/books/:book_id", updateBook);
bookRouter.delete("/books/:book_id", deleteBook);

module.exports = bookRouter;
