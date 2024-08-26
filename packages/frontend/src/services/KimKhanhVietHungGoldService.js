import axios from 'axios';
import { API } from '@/constants/index.js';
const baseUrl = API.baseUrl;

class KimKhanhVietHungService {
  static getGoldPriceTable() {
    return axios.get(baseUrl + '/v1/api/gold-price/kim-khanh-viet-hung');
  }
}

export default KimKhanhVietHungService;
