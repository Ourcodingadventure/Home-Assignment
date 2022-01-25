const craneValidation = (req, res, next) => {
  const { crane_name, crane_id } = req.body;
  if (!crane_name || !crane_id) {
    return res
      .status(400)
      .json({ message: "please send crane_name && id in json body" });
  }
  next();
};
module.exports = craneValidation;
