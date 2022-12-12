const { Asset } = require("../model/assetModel");

module.exports.getAllAsset = async (req, res) => {
  try {
    await Asset.find({}).exec((err, data) => {
      if (!err) {
        res.send({
          assets: data,
          message: "get successfully",
        });
      } else {
        console.log(err);
      }
    });
  } catch (error) {}
};
// post user

module.exports.postAsset = async (req, res, next) => {
  if (!req.body.name || !req.body.user) {
    res.status(401).send({
      success: false,
      error: "data are missing",
    });
  }
  console.log(req.body);
  const postData = new Asset(req.body);
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
