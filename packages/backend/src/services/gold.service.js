"use strict";
const axios = require("axios");
const { response } = require("express");
const GOLD_COMPANY = require("../constants");
const { BadRequestError } = require("../core/error.response");
const config = {
  url: "https://gw.vnexpress.net/cr/?name=tygia_vangv202206",
  method: "get",
  maxBodyLength: Infinity,
  headers: {},
};

class GoldService {
  static fetchGoldPrices = async () => {
    return await axios
      .request(config)
      .then((response) => {
        const newGoldItems = response.data?.data?.data?.gold?.new;

        return Object.keys(newGoldItems).map((goldItem, index) => {
          const detailGoldItem = newGoldItems[goldItem];
          return {
            id: index,
            name: goldItem,
            label: detailGoldItem.label,
            buy: detailGoldItem.buy,
            sell: detailGoldItem.sell,
          };
        });
      })
      .catch((error) => {
        throw new BadRequestError(error.message);
      });
  };

  static fetchUpdatedTime = async () => {
    return await axios
      .request(config)
      .then((response) => response.data?.data?.updated_at)
      .catch((error) => {
        throw new BadRequestError(error.message);
      });
  };

  static fetchGoldPriceChartByCompany = async (company) => {
    return await axios
      .request(config)
      .then((response) => {
        const searchingString = GOLD_COMPANY[company];
        const dataListChart = response.data?.data?.data?.chart;
        const historyPrice = dataListChart[searchingString];
        return historyPrice.map(({ date_label, buy, sell, label }) => {
          const [day, month, year] = date_label.split("/");
          const dateTimeStamp = Date.UTC(year, month, day, 8, 0, 0);
          return {
            buy,
            dateTimeStamp,
            label,
            sell,
          };
        });
      })
      .catch((error) => {
        throw new BadRequestError(error.message);
      });
  };
}

module.exports = GoldService;
