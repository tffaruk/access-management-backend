// import function
const express = require("express");
const cors = require("cors");
const userRouter = require("./router/userRouter");
const assetRouter = require("./router/assetRouter");
const { dbConnect } = require("./dConnect");
const { errorHandler } = require("./errorHandler");
require("dotenv").config();

// main code
const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("request success fully");

  res.end();
});
// middleware
app.use(express.json());
app.use(cors());

// database connection
dbConnect();
// error handler
app.use(errorHandler);

// router setup
app.use("/user", userRouter);
app.use("/asset", assetRouter);

// local server port
app.listen(port);
app.listen(() => {
  console.log(`server run on port ${port}`);
});
