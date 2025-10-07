const express = require("express");

const app = express();

app.listen(3005, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:3005");
});
