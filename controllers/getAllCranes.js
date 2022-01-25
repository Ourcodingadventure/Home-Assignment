const con = require("../models");
const getAllCranes = (req, res) => {
  try {
    const query = "select crane_id,crane_name from crane where deleted=false";
    con.query(query, function (err, result, fields) {
      if (err) throw err;
      res.status(200).send({
        message: "cranes found",
        result,
      });
    });
  } catch (err) {
    res.status(404).send({
      message: "cranes not found",
      err,
    });
  }
};
module.exports = getAllCranes;
