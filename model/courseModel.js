const mongoose = require("mongoose");
const { courseSchema } = require("../schema/courseSchema");

module.exports.Course = new mongoose.model("Course", courseSchema);
