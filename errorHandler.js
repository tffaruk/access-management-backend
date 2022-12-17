module.exports.errorHandler = (error, req, res, next) => {
  console.log(`error ${error.message}`);
  res.send(error.message);
  next(error);
};

module.exports.invalidPathHandler = (request, response, next) => {
  response.status(400)
  response.send('invalid path')
}
