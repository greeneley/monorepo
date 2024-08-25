"use strict";
const axios = require("axios");
const { response } = require("express");
const GOLD_COMPANY = require("../constants");
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

        const filteredGoldData = Object.keys(newGoldItems).map(
          (goldItem, index) => {
            const detailGoldItem = newGoldItems[goldItem];
            return {
              id: index,
              name: goldItem,
              label: detailGoldItem.label,
              buy: detailGoldItem.buy,
              sell: detailGoldItem.sell,
            };
          },
        );
        return {
          status: "success",
          message: "Gold prices fetched successfully",
          data: filteredGoldData,
        };
      })
      .catch((error) => {
        console.error("Error fetching gold prices:", error);
        return {
          status: "error",
          message: "Failed to fetch gold prices",
          error: error.message,
        };
      });
  };

  static fetchUpdatedTime = async () => {
    return await axios
      .request(config)
      .then((response) => {
        return {
          status: "success",
          message: "Updated time fetched successfully",
          update_at: response.data?.data?.updated_at,
        };
      })
      .catch((error) => {
        console.error("Error fetching updated time:", error);
        return {
          status: "error",
          message: "Failed to fetch updated time",
          error: error.message,
        };
      });
  };

  static fetchGoldPriceChartByCompany = async (company) => {
    return await axios
      .request(config)
      .then((response) => {
        const searchingString = GOLD_COMPANY[company];
        const dataListChart = response.data?.data?.data?.chart;
        const historyPrice = dataListChart[searchingString];
        const formatted = historyPrice.map(
          ({ date_label, buy, sell, label }) => {
            const [day, month, year] = date_label.split("/");
            const dateTimeStamp = Date.UTC(year, month, day, 8, 0, 0);
            return {
              buy,
              dateTimeStamp,
              label,
              sell,
            };
          },
        );
        return {
          status: "success",
          message: "Gold price history fetched successfully",
          data: formatted,
        };
      })
      .catch((error) => {
        console.error("Error fetching gold price chart:", error);
        return {
          status: "error",
          message: "Failed to fetch gold price history",
          error: error.message,
        };
      });
  };
}

module.exports = GoldService;
