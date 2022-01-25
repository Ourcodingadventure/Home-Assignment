const con = require("../models");
const deleteReq = (req, res) => {
  const { id } = req.params;
  try {
    let query;
    let entity;
    if (req.baseUrl.includes("/devices")) {
      query = `update device SET deleted = true where device_id = '${id}' or serial_number = '${id}'`;
      entity = "device";
    } else {
      query = `UPDATE crane
             SET deleted = true WHERE crane_id = '${id}' OR crane_name = '${id}'`;
      entity = "crane";
    }
    con.query(query, (err, result, fields) => {
      if (err) throw err;
      res.status(200).send({
        message: `${entity} deleted successfully`,
        result,
      });
      console.log(result, fields);
    });
  } catch (err) {
    console.log("err", err);
    res.status(400).send({
      message: "some error",
      err,
    });
  }
};
module.exports = deleteReq;
