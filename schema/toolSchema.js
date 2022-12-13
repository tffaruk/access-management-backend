const maongoose = require("mongoose");



module.exports.toolSchema = maongoose.Schema({
  name: { type: String },
  prize: { type: Number },
  organization: [
    {
      name: { type: String },
      user: { type: [String] },
    },
  ],
});
