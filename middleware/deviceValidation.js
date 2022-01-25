const deviceValidation = (req, res, next) => {
  const { device_id, crane_id, serial_number, description } = req.body;
  const isBoolean = (val) => "boolean" === typeof val;
  let deleted = req.body.deleted;
  deleted = isBoolean(deleted);
  if (!device_id || !crane_id || !serial_number || !description || !deleted) {
    return res.status(400).json({
      message:
        "please send device_id,crane_id,serial_number,description,deleted in json body",
    });
  }
  next();
};
module.exports = deviceValidation;
