"use strict";

const KKMHService = require("../services/kimkhanhviethung.service.js");

class KimKhanhVietHungController {
  fetchGoldPrice = async (req, res, next) => {
    try {
      return res.status(200).json(await KKMHService.fetchGoldPrice());
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new KimKhanhVietHungController();
