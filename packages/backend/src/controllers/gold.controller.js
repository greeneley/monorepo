"use strict";

const GoldService = require("../services/gold.service");
const { SuccessResponse } = require("../core/success.response");
class GoldController {
	fetchGoldPrices = async (req, res) => {
		new SuccessResponse({
			message: "Retrieve successfully gold price",
			metadata: await GoldService.fetchGoldPrices()
		}).send(res);
	};

	getUpdatedTime = async (req, res, next) => {
		new SuccessResponse({
			message: "Get successfully",
			metadata: await GoldService.fetchUpdatedTime()
		}).send(res);
	};

	getGoldPriceChartByCompany = async (req, res, next) => {
		new SuccessResponse({
			message: "Get successfully data for chart",
			metadata: await GoldService.fetchGoldPriceChartByCompany(req.query.company)
		}).send(res);
	};
}

module.exports = new GoldController();
