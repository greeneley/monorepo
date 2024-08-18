import axios from 'axios';
import { API } from '@/constants/index.js';
const baseUrl = API.baseUrl;

class GoldService {
  static getGoldPriceTable() {
    return axios.get(baseUrl + '/v1/api/data/total-gold-price');
  }

  static getUpdateGoldTime() {
    return axios.get(baseUrl + '/v1/api/data/updated-at');
  }
}

export default GoldService;
