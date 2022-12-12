const { User } = require("../model/userModel");

module.exports.getAllUser = async (req, res) => {
  try {
    await User.find({}).exec((err, data) => {
      if (!err) {
        res.send({
          users: data,
          message: "get successfully",
        });
      } else {
        console.log(err);
      }
    });
  } catch (error) {}
};
// post user

module.exports.postUser = async (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.id) {
    res.status(401).send({
      success: false,
      error: "data are missing",
    });
  }
  console.log(req.body);
  const postData = new User(req.body);
  postData.save(req.body, (error) => {
    if (error) {
      res.status(500).send({
        success: false,
        error: "There is server side error",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "data added sucessfully",
      });
    }
  });
};
