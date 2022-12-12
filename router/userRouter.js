const express = require("express");
const userControler = require("../controler/userControler");
const userRouter = express.Router();

userRouter
  .route("/")
  .get(userControler.getAllUser)
  .post(userControler.postUser);

module.exports = userRouter;
