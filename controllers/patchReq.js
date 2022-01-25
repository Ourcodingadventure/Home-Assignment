const con = require("../models");
const patchReq = (req, res) => {
  let update = "";
  for (let key in req.query) {
    let value = "";
    if (key === "deleted") {
      value = req.query[key];
    } else {
      value = `'${req.query[key]}'`;
    }
    update += " " + `${key} = ${value},`;
  }
  if (update.includes("delete")) {
    return res.status(404).json({ message: "you cannot delete" });
  }
  update = update.slice(0, -1);
  let query;
  let queryToUpdate;
  console.log(req.baseUrl.includes("/devices"));
  if (req.baseUrl.includes("/devices")) {
    query = `select * from device where device_id = '${req.params.id}' or serial_number='${req.params.id}' and deleted=false`;
    queryToUpdate = `UPDATE device SET ${update} WHERE device_id = '${req.params.id}' OR serial_number = '${req.params.id}'`;
  } else {
    query = `select * from crane where crane_id = '${req.params.id}' or crane_name='${req.params.id}' and deleted=false`;
    queryToUpdate = `UPDATE crane SET ${update} WHERE crane_id = '${req.params.id}' OR crane_name = '${req.params.id}'`;
  }

  try {
    console.log(query);
    console.log(queryToUpdate);
    con.query(query, function (err, result, fields) {
      if (err || !result.length) {
        return res.status(404).json({
          message: "not found",
          err,
        });
      } else {
        con.query(queryToUpdate, (err, result, fields) => {
          if (err) {
            return res.status(505).json({
              message: "server error",
            });
          }
          if (result?.affectedRows > 0) {
            res.status(200).send(result);
          } else {
            res.status(404).send({
              message: "something went wrong not updated",
              result,
            });
          }
        });
      }
    });
  } catch (err) {
    res.status(404).json({
      message: "some error",
      err,
    });
  }
};
module.exports = patchReq;
