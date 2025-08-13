let handleError = (error, req, res, next) => {
  const message = error;
  console.log(message);
  res.status(500).json({ error: error.message });
};
module.exports = handleError;
