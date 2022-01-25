const con = require("../models");
const createCrane = (req, res) => {
  try {
    const query = `select * from crane where crane_id = '${req.body.crane_id}' and deleted = false`;
    const insertQuery = `INSERT INTO crane (crane_name,crane_id) VALUES ('${req.body.crane_name}','${req.body.crane_id}')`;
    con.query(query, async (err, result, fields) => {
      if (!err && result.length) {
        return res.status(400).json({
          message: "Crane with this id already exists",
        });
      }
      con.query(insertQuery, (err, result, fields) => {
        if (err) throw err;
        if (!err) {
          res.status(201).json({
            message: "crane posted",
            result: result,
          });
        }
      });
    });
  } catch (err) {
    res.status(400).send({
      message: "Unable to create crane",
      err,
    });
  }
};
module.exports = createCrane;
