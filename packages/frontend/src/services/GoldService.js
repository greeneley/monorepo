import axios from 'axios'
import { API } from '@/constants/index.js'
const baseUrl = API.baseUrl
class GoldService {
  static getGoldPriceTable() {
    return axios.get(baseUrl + '/v1/api/data')
  }
}

export default GoldService
