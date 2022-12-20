const { default: mongoose } = require("mongoose");
const maongoose = require("mongoose");

// subschema for course
const course = mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  prize: { type: Number },
  user: {
    type: [String],
  },
  purchase_date: {
    type: Date,
  },
  expire_date: {
    type: Date,
  },
});

module.exports.courseSchema = maongoose.Schema({
  platform: {
    type: String,
  },
  course: [course],
  credential: {
    website: {
      type: String,
    },
    email: { type: String },
    password: { type: String },
  },
});
