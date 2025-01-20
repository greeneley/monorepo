import axios from 'axios';
import { API } from '@/constants/index.js';
const baseUrl = API.baseUrl;

class KimKhanhVietHungService {
  static getGoldPriceTable() {
    return axios.get(baseUrl + '/gold', { params: { type } });
  }
}

export default KimKhanhVietHungService;
