const express = require("express");
const assetControler  = require("../controler/assetControler");
const assetRouter = express.Router();

assetRouter
  .route("/")
  .get(assetControler.getAllAsset)
  .post(assetControler.postAsset);

module.exports = assetRouter;
