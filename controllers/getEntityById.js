const con = require("../models");
const getEntityById = (req, res) => {
  const { id } = req.params;
  let query;
  let entity;
  if (req.baseUrl.includes("/devices")) {
    query = `select device_id,serial_number,description,crane_id from device where device_id ='${id}' and deleted = false`;
    entity = "device";
  } else {
    query = `select crane_id,crane_name from crane where crane_id = '${id}'and deleted = false`;
    entity = "crane";
  }
  try {
    con.query(query, function (err, result, fields) {
      if (err && !result.length) throw err;
      res.status(200).send({
        message: `${Entity} got by id`,
        result,
      });
    });
  } catch (err) {
    res.status(404).send({
      message: `unable to get ${Entity} by id`,
      err,
    });
  }
};
module.exports = getEntityById;
