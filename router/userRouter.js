const express = require("express");
const userControler = require("../controler/userControler");
const { User } = require("../model/userModel");

const userRouter = express.Router();

userRouter
  .route("/")
  .get(userControler.getAllUser)
  .post(userControler.postUser);
// update user
userRouter.patch("/:id", userControler.updateUser);

// delete user
userRouter.delete("/:id", userControler.deleteUser);

module.exports = userRouter;
