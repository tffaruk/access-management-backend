const express = require("express");
const toolControler = require("../controler/toolControler");
const toolRouter = express.Router();

toolRouter
  .route("/")
  .get(toolControler.getAllTool)
  .post(toolControler.postTool)
  .put(toolControler.updateToolOrg);

// get single tool
toolRouter.get("/:id", toolControler.getSingleToolOrg);
// insert tool
toolRouter.patch("/:id", toolControler.updateToolOrg);

// insert user for each organization
toolRouter.patch("/user/:id", toolControler.updateToolOrgUser);

// delete tool
toolRouter.delete("/:id", toolControler.deleteTool);

module.exports = toolRouter;
