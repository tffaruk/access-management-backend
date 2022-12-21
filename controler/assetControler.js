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
  if (!req.body.asset.name || !req.body.asset.user) {
    res.status(401).send({
      success: false,
      error: "data are missing",
    });
  }
  console.log(req.body);
  const postData = new Asset(req.body.asset);
  postData.save(req.body.asset, (error) => {
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
// update asset
module.exports.updateAsset = async (req, res) => {
  await Asset.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.asset.name,
        value: req.body.asset.value,
        user: req.body.asset.user,
        purchase_date: req.body.asset.purchase_date,
        issues: req.body.asset.issues,
      },
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: "the server side error",
        });
      } else {
        res.status(200).json({
          message: "update asset succesfully",
        });
      }
    }
  ).clone();
};


// delete asset
module.exports.deleteAsset = (req, res) => {
 Asset.findByIdAndDelete(req.params.id)
    .then((asset) => {
      if (!asset) {
        return res.status(404).send();
      }
      res.send(asset);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
