"use strict";

const express = require("express");
const GoldController = require("../controllers/gold.controller");
const KimKhanhVietHungController = require("../controllers/kimkhanhviethung.controller.js");
const asyncHandler = require("../helpers/asyncHandler");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.get("/gold-price", asyncHandler(GoldController.fetchGoldPrices));
router.get(
  "/gold-price/last-updated",
  asyncHandler(GoldController.getUpdatedTime),
);
router.get(
  "/gold-price/chart",
  asyncHandler(GoldController.getGoldPriceChartByCompany),
);

router.get(
  "/gold-price/kim-khanh-viet-hung",
  asyncHandler(KimKhanhVietHungController.fetchGoldPrice),
);

module.exports = router;
