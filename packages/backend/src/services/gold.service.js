"use strict";
const axios = require("axios");

class GoldService {
  static retrieveTotalGoldPrice = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://gw.vnexpress.net/cr/?name=tygia_vangv202206",
      headers: {},
    };

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
}

module.exports = GoldService;
