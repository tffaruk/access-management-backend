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
  console.log(req.body);
  if (!req.body.tool.name) {
    res.status(401).send({
      success: false,
      error: "data are missing",
    });
  }

  const postData = new Tool(req.body.tool);
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

//
module.exports.updateTool = async (req, res) => {
  await Tool.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        prize: req.body.tool.prize,
        organization: req.body.tool.organization,
      },
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: "the server side error",
        });
      } else {
        res.status(200).json({
          message: "update update succesfully",
        });
      }
    }
  ).clone();
};
// insert data into organization
module.exports.insertToolOrg = async (req, res, next) => {
  console.log(req.body);
  const tools = await Tool.findByIdAndUpdate(req.params.id, {
    $push: { organization: req.body },
  }).clone();
  res.status(200).json({
    status: "true",
    data: { tools },
  });
};

// update organization
module.exports.updateToolOrganization = async (req, res, next) => {
  console.log(req.body);
  const userData = await Tool.updateOne(
    { "organization._id": req.params.id },
    {
      $set: {
        "organization.$.name": req.body.organization.name,
        "organization.$.user": req.body.organization.user,
      },
    }
  );
  res.status(200).json({
    status: "true",
    data: { userData },
  });
};
// delete tool
module.exports.deleteTool = (req, res) => {
  Tool.findByIdAndDelete(req.params.id)
    .then((blog) => {
      if (!blog) {
        return res.status(404).send();
      }
      res.send(blog);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
