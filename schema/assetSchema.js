const maongoose = require("mongoose");

module.exports.assetSchema = maongoose.Schema({
  name: {
    type: String,
  },
  value: {
    type: Number,
  },
  user: {
    type: String,
  },

  purchase_date: {
    type: Date,
  },
  issue: {
    type: [String],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
