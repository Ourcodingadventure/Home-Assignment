express = require("express");
const con = require("../models");
const craneValidation = require("../middleware/craneValidation");
const {
  getAll,
  getEntityById,
  patchReq,
  deleteReq,
  createCrane,
  replaceCrane,
  getCraneByName,
  joinEntities,
} = require("../controllers");

const router = express.Router();
router
  .get("/", getAll)
  .post("/", craneValidation, createCrane)
  .get("/:id", getEntityById)
  .get("/name/:name", getCraneByName)
  .delete("/:id", deleteReq)
  .patch("/:id", patchReq)
  .put("/:id", replaceCrane)
  .get("/:id/devices", joinEntities);
module.exports = router;
