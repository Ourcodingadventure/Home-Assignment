const con = require("../models");
const getCraneById = (req, res) => {
  try {
    console.log(req.params.id);

    var query = `select crane_id,crane_name from crane where crane_id = '${req.params.id}'and deleted = false`;
    con.query(query, (err, result, fields) => {
      console.log({
        err,
        result,
      });
      if (!err && !result.length) {
        return res.status(404).json({
          message: "no crane found",
        });
      }
      res.status(200).send({
        message: "crane retrieved",
        result,
      });
    });
  } catch (err) {
    res.status(400).send({
      message: "unable to retrieve crane by id",
      err,
    });
  }
};
module.exports = getCraneById;
