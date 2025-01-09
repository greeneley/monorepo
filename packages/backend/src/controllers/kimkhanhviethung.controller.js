"use strict";

const KKMHService = require("../services/kimkhanhviethung.service.js");
const { SuccessResponse } = require("../core/success.response");
const GoldService = require("../services/gold.service");

class KimKhanhVietHungController {
			fetchGoldPrice = async (req, res, next) => {
		new SuccessResponse({
			message: "Get successfully",
			metadata: await KKMHService.fetchGoldPrice()
		}).send(res);
	};
}

module.exports = new KimKhanhVietHungController();
