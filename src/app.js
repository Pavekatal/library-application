const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bookRouter = require("./routes/books");
const userRouter = require("./routes/users");
const loggerApp = require("./middlewares/loggerApp");

dotenv.config();

const { PORT = 3000, API_URL = "http://127.0.0.1" } = process.env;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const app = express();

app.use(cors());
app.use(loggerApp);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to the library application!");
});

app.use(bookRouter);
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
