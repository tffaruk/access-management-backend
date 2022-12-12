const mongoose = require("mongoose");
const { assetSchema } = require("../schema/assetSchema");

module.exports.Asset = new mongoose.model("Asset", assetSchema);
