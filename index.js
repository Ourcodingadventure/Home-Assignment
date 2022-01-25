const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const craneRouter = require("./routes/craneRouter");
const deviceRouter = require("./routes/deviceRouter");
require("./models");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(morgan("dev"));
app.use("/cranes", craneRouter);
app.use("/devices", deviceRouter);
app.get("/", (req, res) => {
  res.send({ message: "check 1 2 " });
});
app.listen(PORT, () => {
  `server listening on port ${PORT}`;
});
