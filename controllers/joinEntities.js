const con = require("../models");
const joinEntities = (req, res) => {
  try {
    const JOIN = `select device.device_id,device.serial_number,device.description,device.crane_id,crane.crane_name
          FROM device
          INNER JOIN crane
          ON crane.crane_id = device.crane_id where device.crane_id = '${req.params.id}' and device.deleted = false and crane.deleted = false;`;
    con.query(JOIN, (err, result, field) => {
      if (err) throw err;
      if (!err && result) {
        res.status(200).send({
          message: "feteched succesfully",
          result,
        });
      }
    });
  } catch (err) {
    res.status(401).send({
      message: "some error",
      err,
    });
  }
};
module.exports = joinEntities;
