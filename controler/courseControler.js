const { Course } = require("../model/courseModel");

module.exports.getAllCourse = async (req, res) => {
  try {
    await Course.find({}).exec((err, data) => {
      if (!err) {
        res.send({
          courses: data,
          message: "get successfully",
        });
      } else {
        console.log(err);
      }
    });
  } catch (error) {}
};

// post user

module.exports.postCourse = async (req, res, next) => {
  if (!req.body.credential.email || !req.body.credential.password) {
    res.status(401).send({
      success: false,
      error: "data are missing",
    });
  }
  console.log(req.body, "courses");
  const postData = new Course(req.body);
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

// insert data into organization
module.exports.updateCourse = async (req, res, next) => {
  const tools = await Course.findByIdAndUpdate(req.body.id, {
    $push: { courses: req.body },
  }).clone();
  res.status(200).json({
    status: "true",
    data: { tools },
  });
};

// update user into organization users
module.exports.updateCourseUser = async (req, res, next) => {
  const userData = await Course.updateOne(
    { "organization._id": req.params.id },
    { $push: { "organization.$[elem].user": req.body.user } },
    { arrayFilters: [{ "elem._id": req.params.id }] }
  );
  res.status(200).json({
    status: "true",
    data: { userData },
  });
};
