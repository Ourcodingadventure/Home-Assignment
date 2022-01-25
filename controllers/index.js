const createCrane = require("./createCrane");
const getCraneByName = require("./getCraneByName");
const getAll = require("./getAll");
const getEntityById = require("./getEntityById");
const patchReq = require("./patchReq");
const deleteReq = require("./deleteReq");
const createDevice = require("./createDevice");
const replaceCrane = require("./replaceCrane");
const replaceDevice = require("./replaceDevice");
const joinEntities = require("./joinEntities");
module.exports = {
  getAll,
  getEntityById,
  patchReq,
  createCrane,
  getCraneByName,
  deleteReq,
  createDevice,
  replaceCrane,
  replaceDevice,
  joinEntities,
};
