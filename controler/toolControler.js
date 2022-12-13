const { Tool } = require("../model/toolModel");

// get all tools
module.exports.getAllTool = async (req, res) => {
  try {
    await Tool.find({}).exec((err, data) => {
      if (!err) {
        res.send({
          tools: data,
          message: "get successfully",
        });
      } else {
        console.log(err);
      }
    });
  } catch (error) {}
};

// insert tools
module.exports.postTool = async (req, res, next) => {
  if (!req.body.name) {
    res.status(401).send({
      success: false,
      error: "data are missing",
    });
  }
  console.log(req.body, "tools");
  const postData = new Tool(req.body);
  postData.save(req.body, (error) => {
    if (error) {
      res.status(500).send({
        success: false,
        error: "There is server side error",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "data added sucessfully",
      });
    }
  });
};
// get single tool

module.exports.getSingleToolOrg = async (req, res) => {
  await Tool.find({
    _id: req.params.id,
  }).exec((err, data) => {
    if (err) {
      res.status(500).json({
        error: "the server side error",
      });
    } else {
      res.status(200).json({
        result: data,
        message: "data get succesfully",
      });
    }
  });
};
// insert data into courses
module.exports.updateToolOrg = async (req, res, next) => {
  const tools = await Tool.findByIdAndUpdate(req.body.id, {
    $push: { courses: req.body },
  }).clone();
  res.status(200).json({
    status: "true",
    data: { tools },
  });
};

// update user into courses users
module.exports.updateToolOrgUser = async (req, res, next) => {
  const userData = await Tool.updateOne(
    { "courses._id": req.params.id },
    { $push: { "courses.$[elem].user": req.body.user } },
    { arrayFilters: [{ "elem._id": req.params.id }] }
  );
  res.status(200).json({
    status: "true",
    data: { userData },
  });
};
