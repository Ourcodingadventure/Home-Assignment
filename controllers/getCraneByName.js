const con = require("../models");
const getCraneByName = (req, res) => {
  try {
    var query = `select crane_id,crane_name from crane where crane_name = '${req.params.name}' and deleted = false`;
    con.query(query, (err, result, fields) => {
      if (err) throw err;
      res.status(200).send({
        message: "crane got by name",
        result,
      });
      console.log(result, fields);
    });
  } catch (err) {
    res.status(400).send({
      message: "some error",
      err,
    });
  }
};
module.exports = getCraneByName;
