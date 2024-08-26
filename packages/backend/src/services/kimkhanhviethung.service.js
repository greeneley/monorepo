"use strict";
const axios = require("axios");
const { BasicCrawler, gotScraping } = require("crawlee");
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

    const convertToNumber = (input) => {
      return Number(input.replaceAll(".", "").replace("đ", "")) / 100;
    };

    const response = [
      {
        id: 0,
        name: "vang_khau_9999",
        label: "Vàng Nhẫn Khâu 9999",
        buy: convertToNumber(crawlData[1]),
        sell: convertToNumber(crawlData[2]),
      },
      {
        id: 1,
        name: "vang_khau_98",
        label: "Vàng Nhẫn Khâu 98",
        buy: convertToNumber(crawlData[5]),
        sell: convertToNumber(crawlData[6]),
      },
      {
        id: 2,
        name: "vang_khau_96",
        label: "Vàng Nhẫn Khâu 96",
        buy: convertToNumber(crawlData[9]),
        sell: convertToNumber(crawlData[10]),
      },
    ];

    return {
      data: response,
    };
  };
}

module.exports = GoldKimKhanhVietHungService;
