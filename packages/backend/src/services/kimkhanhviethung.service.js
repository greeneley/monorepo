"use strict";
const { gotScraping } = require("crawlee");
const { JSDOM } = require("jsdom");
class GoldKimKhanhVietHungService {
  static fetchGoldPrice = async () => {
    const crawlData = [];

    const { body } = await gotScraping({
      url: "https://kimkhanhviethung.vn/tra-cuu-gia-vang.html",
    });

    const dom = new JSDOM(body);
    dom.window.document.querySelectorAll("td").forEach((item) => {
      crawlData.push(item.textContent);
    });

    const convertPriceToNumber = (input) =>
      Number(input.replaceAll(".", "").replace("đ", "")) / 100;

    return [
      {
        id: 0,
        name: "vang_khau_9999",
        label: "Vàng Nhẫn Khâu 9999",
        buy: convertPriceToNumber(crawlData[1]),
        sell: convertPriceToNumber(crawlData[2]),
      },
      {
        id: 1,
        name: "vang_khau_98",
        label: "Vàng Nhẫn Khâu 98",
        buy: convertPriceToNumber(crawlData[5]),
        sell: convertPriceToNumber(crawlData[6]),
      },
      {
        id: 2,
        name: "vang_khau_96",
        label: "Vàng Nhẫn Khâu 96",
        buy: convertPriceToNumber(crawlData[9]),
        sell: convertPriceToNumber(crawlData[10]),
      },
    ];
  };
}

module.exports = GoldKimKhanhVietHungService;
