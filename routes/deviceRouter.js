express = require("express");
const con = require("../models");
const router = express.Router();
router.get("/", (req, res) => {
  try {
    const query = "select * from device";
    con.query(query, function (err, result, fields) {
      if (err) throw err;
      res.send({
        message: "devices got",
        result,
      });
      console.log(result);
    });
  } catch (err) {
    res.send({
      message: "some error",
      err,
    });
  }
});

module.exports = router;
