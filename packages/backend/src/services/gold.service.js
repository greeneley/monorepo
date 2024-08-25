"use strict";
const axios = require("axios");
const { response } = require("express");
const config = {
  url: "https://gw.vnexpress.net/cr/?name=tygia_vangv202206",
  method: "get",
  maxBodyLength: Infinity,
  headers: {},
};
class GoldService {
  static retrieveTotalGoldPrice = async () => {
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
        return { data: filteredGoldData };
      })
      .catch((error) => {
        console.log(error);
      });
  };

  static getUpdatedTime = async () => {
    return await axios
      .request(config)
      .then((response) => {
        return {
          update_at: response.data?.data?.updated_at,
        };
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

module.exports = GoldService;
