const express = require("express");
const {
  getAll,
  getEntityById,
  patchReq,
  deleteReq,
  createDevice,
  replaceDevice,
} = require("../controllers");

const deviceValidation = require("../middleware/deviceValidation");

const router = express.Router();
router
  .get("/:id", getEntityById)
  .get("/", getAll)
  .post("/", deviceValidation, createDevice)
  .delete("/:id", deleteReq)
  .put("/:id", replaceDevice)
  .patch("/:id", patchReq);

module.exports = router;
