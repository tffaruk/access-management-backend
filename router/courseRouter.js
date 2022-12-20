const express = require("express");
const courseControler = require("../controler/courseControler");
const courseRouter = express.Router();

courseRouter
  .route("/")
  .get(courseControler.getAllCourse)
  .post(courseControler.postCourse);

// insert tool
courseRouter.patch("/:id", courseControler.updateCourse);


// insert single course
courseRouter.patch("/course/:id",courseControler.updateSingleCourse);

// delete tool
courseRouter.delete("/:id", courseControler.deleteCourse);

module.exports = courseRouter;
