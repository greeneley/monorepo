"use strict";

require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3001;

(() => {
  app.use(cors());
  app.use("/v1/api", require("./routes"));

  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
})();
