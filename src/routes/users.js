const userRouter = require("express").Router();
const loggerUsers = require("../middlewares/loggerUsers");
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUserBook,
  takeUserBook,
  returnUserBook,
} = require("../controllers/users");

userRouter.use(loggerUsers);

userRouter.get("/users", getUsers);
userRouter.post("/users", createUser);
userRouter.get("/users/:user_id", getUser);
userRouter.patch("/users/:user_id", updateUser);
userRouter.delete("/users/:user_id", deleteUser);
userRouter.get("/users/:user_id/books", getUserBook);
userRouter.post("/users/:user_id/books", takeUserBook);
userRouter.delete("/users/:user_id/books/:book_id", returnUserBook);

module.exports = userRouter;
