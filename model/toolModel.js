const mongoose = require("mongoose");
const { toolSchema } = require("../schema/toolSchema");

module.exports.Tool = new mongoose.model("Tool", toolSchema);
