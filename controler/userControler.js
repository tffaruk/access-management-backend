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

module.exports.postUser = async (req, res) => {
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

// update user
module.exports.updateUser = async (req, res) => {
  console.log(req.params.id);
  await User.updateOne(
    { _id: req.params.id },
    {
      $set: {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        depertment: req.body.depertment,
        designation: req.body.designation,
        joining_date: req.body.joining_date,
      },
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: "the server side error",
        });
      } else {
        res.status(200).json({
          message: "user update succesfully",
        });
      }
    }
  ).clone();
};

module.exports.deleteUser=(req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((blog) => {
      if (!blog) {
        return res.status(404).send();
      }
      res.send(blog);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}
