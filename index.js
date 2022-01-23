const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const craneRouter = require("./routes/craneRouter");
const deviceRouter = require("./routes/deviceRouter");
require("./models");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(morgan("dev"));
app.use("/cranes", craneRouter);
app.use("/devices", deviceRouter);

app.listen(() => {
  `server listening on port ${PORT}`;
});
