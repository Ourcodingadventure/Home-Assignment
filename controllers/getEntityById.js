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
    con.query(query, function (error, result, fields) {
      if (error) throw error;
      if (!result.length) {
        res.status(404).send({
          message: `unable to get ${entity} by id either it does not exist or is deleted`,
        });
      } else {
        res.status(200).send({
          message: `${entity} got by id`,
          result,
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      message: `server error`,
      error,
    });
  }
};
module.exports = getEntityById;
