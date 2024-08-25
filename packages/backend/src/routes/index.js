"use strict";

const express = require("express");
const GoldController = require("../controllers/gold.controller");
const KimKhanhVietHungController = require("../controllers/kimkhanhviethung.controller.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.get("/gold-price", GoldController.retrieveTotalGoldPrice);
router.get(
  "/gold-price/kim-khanh-viet-hung",
  KimKhanhVietHungController.fetchGoldPrice,
);

router.get("/gold-price/last-updated", GoldController.getUpdatedTime);
router.get("/gold-price/chart", GoldController.getGoldPriceChartByCompany);

module.exports = router;
