const maongoose = require("mongoose");

module.exports.assetSchema = maongoose.Schema({
  platform: {
    name: {
      type: String,
    },
    course: [
      {
        name: { type: String },
        price: { type: Number },
        user: {
          type: [String],
        },
        purchase_date: {
          type: Date,
        },
        expire_date: {
          type: Date,
        },
      },
    ],
    credential: {
      username: {
        type: String,
      },
      email: { type: String },
      password: { type: String },
    },
  },
});
