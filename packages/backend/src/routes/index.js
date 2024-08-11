"use strict";

const express = require("express");
const GoldController = require("../controllers/gold.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.get("/data/total-gold-price", GoldController.retrieveTotalGoldPrice);

module.exports = router;
