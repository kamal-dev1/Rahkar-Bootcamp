function ErrorHandler(message, res, next) {
  if (message) res.json({ message });
  next();
};

function Logger(req, res, next) {
  console.log("Logger")
  next();
};

module.exports = {
  ErrorHandler,
  Logger
};
