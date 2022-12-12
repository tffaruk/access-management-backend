const maongoose = require("mongoose");

module.exports.userSchema = maongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  depertment: {
    type: String,
  },
  designation: {
    type: String,
  },

  joining_date: {
    type: Date,
  },
  phone: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
