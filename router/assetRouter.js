const express = require("express");
const assetControler = require("../controler/assetControler");
const assetRouter = express.Router();

assetRouter
  .route("/")
  .get(assetControler.getAllAsset)
  .post(assetControler.postAsset);

assetRouter.patch("/:id", assetControler.updateAsset);

// delete tool
assetRouter.delete("/:id", assetControler.deleteAsset);

module.exports = assetRouter;
