const con = require("../models");
const getAll = (req, res) => {
  try {
    let query;
    let entity;
    if (req.baseUrl.includes("/devices")) {
      query =
        "select device_id,serial_number,description,crane_id from device where deleted=false";
      entity = "device";
    } else {
      query = "select crane_id,crane_name from crane where deleted=false";
      entity = "crane";
    }

    con.query(query, function (err, result, fields) {
      if (err) throw err;
      res.status(200).send({
        message: `${entity} retrieved`,
        result,
      });
    });
  } catch (err) {
    res.status(404).send({
      message: "unable to retrieve devices",
      err,
    });
  }
};
module.exports = getAll;
