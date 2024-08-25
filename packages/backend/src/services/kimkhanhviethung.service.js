"use strict";
const axios = require("axios");
const { BasicCrawler, gotScraping } = require("crawlee");
const { JSDOM } = require("jsdom");
class GoldKimKhanhVietHungService {
  static fetchGoldPrice = async () => {
    const response = [];

    const { body } = await gotScraping({
      url: "https://kimkhanhviethung.vn/tra-cuu-gia-vang.html",
    });

    const dom = new JSDOM(body);
    dom.window.document.querySelectorAll("td").forEach((item) => {
      response.push(item.textContent);
    });

    console.log("Crawler finished.");
    return {
      data: response,
    };
  };
}

module.exports = GoldKimKhanhVietHungService;
