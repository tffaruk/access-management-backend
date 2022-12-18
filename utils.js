const deleteFunction = (Model, req) => {
  Model.deleteOne({ _id: req.params.id }, (err, data) => {
    if (!err) {
      console.log("member successfully deleted");
    } else {
      console.log(err);
    }
  });
};
module.exports = { deleteFunction };
