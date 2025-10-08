const loggerUsers = (req, res, next) => {
  console.log(`Запрос на URL (пользователи): ${req.originalUrl}`);
  next();
};

module.exports = loggerUsers;
