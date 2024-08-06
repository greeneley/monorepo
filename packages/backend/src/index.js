"use strict";

require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT || 3001;

(() => {
  // app.get("/", (req, res) => {
  //   res.send("Hello world");
  // });
  //
  // app.listen(port, () => {
  //   console.log(`Backend running at http://localhost:${port}`);
  // });

  app.use("/v1/api", require("./routes"));

  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
})();
