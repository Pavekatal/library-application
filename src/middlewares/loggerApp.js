const loggerApp = (req, res, next) => {
  console.log(`Запрос на URL: ${req.originalUrl}`);
  next();
};

module.exports = loggerApp;
