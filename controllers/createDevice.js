const con = require("../models");
const createDevice = (req, res) => {
  try {
    const { device_id, crane_id, serial_number, description } = req.body;
    const query = `select * from device where device_id = '${device_id}' and deleted = false`;
    const serialQuery = `select * from device where serial_number = '${serial_number}' and deleted = false`;
    const insertQuery = `INSERT INTO device (device_id, crane_id,serial_number, description, deleted) VALUES ('${device_id}','${crane_id}','${serial_number}','${description}',${req.body.deleted})`;
    con.query(query, (err, result, fields) => {
      if (!err && result.length) {
        return res.status(400).json({
          message: "device with this id already exists",
        });
      }
      con.query(serialQuery, (err, result, fields) => {
        if (!err && result.length) {
          return res.status(400).json({
            message: "device with this serial number already exists",
          });
        }

        con.query(insertQuery, (err, result, fields) => {
          if (err) throw err;
          if (!err) {
            res.status(201).json({
              message: "device posted",
              results: req.body,
            });
          }
        });
      });
    });
  } catch (err) {
    res.status(400).send({
      message: "Unable to create device",
      err,
    });
  }
};
module.exports = createDevice;
