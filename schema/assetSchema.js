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
  issues: {
    type: [
      {
        id: {
          type: Number,
        },
        issue: {
          type: String,
        },
      },
    ],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
