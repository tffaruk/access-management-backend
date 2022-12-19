const express = require("express");
const toolControler = require("../controler/toolControler");
const toolRouter = express.Router();

toolRouter
  .route("/")
  .get(toolControler.getAllTool)
  .post(toolControler.postTool);

// get single tool
toolRouter.get("/:id", toolControler.getSingleToolOrg);

// insert tool
toolRouter.patch("/:id", toolControler.updateTool);

// insert user for each organization
toolRouter.patch("/organization/:id", toolControler.updateToolOrganization);

// delete tool
toolRouter.delete("/:id", toolControler.deleteTool);

module.exports = toolRouter;
