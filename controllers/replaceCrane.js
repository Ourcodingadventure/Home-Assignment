const con = require("../models");
const replaceCrane = (req, res) => {
  let update = "";
  for (let key in req.body) {
    let value = "";
    if (key === "deleted") {
      value = req.body[key];
    } else {
      value = `'${req.body[key]}'`;
      console.log("value", value);
    }
    update += " " + `${key} = ${value},`;
  }
  update = update.slice(0, -1);
  try {
    const queryToUpdate = `UPDATE crane SET ${update} WHERE crane_id = '${req.params.id}' OR crane_name = '${req.params.id}' and deleted = false`;
    con.query(queryToUpdate, (err, result, fields) => {
      console.log("result", result, err);
      if (err) {
        return res.status(505).json({
          message: "server error",
        });
      }

      if (result?.affectedRows > 0) {
        res.send(result);
      }
    });
  } catch (err) {
    console.log("err", err);
    res.status(404).json({
      message: "some error",
    });
  }
};
module.exports = replaceCrane;
