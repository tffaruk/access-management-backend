const maongoose = require("mongoose");

module.exports.toolSchema = maongoose.Schema({
  id: { type: Number },
  name: { type: String },
  prize: { type: Number },
  organization: [
    {
      name: { type: String },
      user: { type: [String] },
    },
  ],
});
