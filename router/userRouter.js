const express = require("express");
const userControler = require("../controler/userControler");
const userRouter = express.Router();

userRouter
  .route("/")
  .get(userControler.getAllUser)
  .post(userControler.postUser);

userRouter.patch("/:id", userControler.updateUser);

module.exports = userRouter;
