import axios from 'axios';
import { API } from '@/constants/index.js';
const baseUrl = API.baseUrl;

class GoldService {
  static getGoldPriceTable() {
    return axios.get(baseUrl + '/v1/api/gold-price');
  }

  static getUpdateGoldTime() {
    return axios.get(baseUrl + '/v1/api/gold-price/last-updated');
  }
}

export default GoldService;
