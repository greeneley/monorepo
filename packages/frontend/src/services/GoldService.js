import axios from 'axios';
import { API } from '@/constants/index.js';
const baseUrl = API.baseUrl;

class GoldService {
  static getGoldPriceTable() {
    return axios.get(baseUrl + '/v1/api/gold-price');
  }

  static getGoldPrice(type) {
    return axios.get(baseUrl + '/gold', { params: { type } });
  }

  static getUpdateGoldTime() {
    return axios.get(baseUrl + '/gold/updated-time');
  }

  static fetchGoldPriceChartByCompany(company) {
    return axios.get(baseUrl + '/chart', { params: { company } });
  }
}

export default GoldService;
