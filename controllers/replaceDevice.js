const con = require("../models");
const replaceDevice = (req, res) => {
  try {
    const { id } = req.params;
    const { crane_id, description } = req.body;
    if (!crane_id || !description || !id)
      return res.status(401).send({
        message:
          "must include both a valid id or serial_number for identification , and description + crane_id",
      });
    const query = `UPDATE device SET crane_id =? , description =?,deleted = false WHERE device_id = '${id}' OR serial_number = '${id}'and deleted=false`;
    con.query(query, [crane_id, description], (err, result) => {
      if (err)
        res.status(400).send({
          message:
            "crane_id must be a real crane and not have a prior device on it",
        });
      if (!err) {
        return res.status(200).send({
          message: "success",
          result,
        });
      }
    });
  } catch (err) {
    res.status(400).send({
      message: "Unable to update device",
      err,
    });
  }
};
module.exports = replaceDevice;
