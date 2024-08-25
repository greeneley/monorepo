"use strict";

const GoldService = require("../services/gold.service");
class GoldController {
  retrieveTotalGoldPrice = async (req, res, next) => {
    try {
      return res.status(200).json(await GoldService.fetchGoldPrices());
    } catch (error) {
      next(error);
    }
  };

  getUpdatedTime = async (req, res, next) => {
    try {
      return res.status(200).json(await GoldService.fetchUpdatedTime());
    } catch (error) {
      next(error);
    }
  };

  getGoldPriceChartByCompany = async (req, res, next) => {
    try {
      return res
        .status(200)
        .json(
          await GoldService.fetchGoldPriceChartByCompany(req.query.company),
        );
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new GoldController();
