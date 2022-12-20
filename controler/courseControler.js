const { Course } = require("../model/courseModel");

// all courses
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

// insert course
module.exports.postCourse = async (req, res, next) => {
  console.log(req.body);
  if (
    !req.body.course.credential.email ||
    !req.body.course.credential.password
  ) {
    res.status(401).send({
      success: false,
      error: "data are missing",
    });
  }

  const postData = new Course(req.body.course);
  postData.save(req.body.course, (error) => {
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

// insert data into courses
module.exports.updateCourse = async (req, res, next) => {
  console.log(req.body);
  const course = await Course.findByIdAndUpdate(req.params.id, {
    $push: { courses: req.body },
  }).clone();
  res.status(200).json({
    status: "true",
    data: { course },
  });
};

// update user into courses users
module.exports.updateCourseUser = async (req, res, next) => {
  const userData = await Course.updateOne(
    { "courses._id": req.params.id },
    { $push: { "courses.$[elem].user": req.body.user } },
    { arrayFilters: [{ "elem._id": req.params.id }] }
  );
  res.status(200).json({
    status: "true",
    data: { userData },
  });
};

// delete tool
module.exports.deleteCourse = (req, res) => {
  Course.findByIdAndDelete(req.params.id)
    .then((course) => {
      if (!course) {
        return res.status(404).send();
      }
      res.send(course);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
