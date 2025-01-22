import { Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { COMMON_GOLD_API } from '../../config/config';

@Injectable()
export class ChartService {
  constructor(private readonly httpService: HttpService) {}

  async getDataChart(company: string): Promise<any> {
    const { data } = await firstValueFrom(this.httpService.get(COMMON_GOLD_API));
    const GOLD_COMPANY = {
      SJC: 'sjc_1l_10l',
      PNJ: 'tphcm_pnj'
    };
    const searchingString = GOLD_COMPANY[company];

    const dataListChart = data?.data?.data?.chart;
    const historyPrice = dataListChart[searchingString];
    return historyPrice.map(({ date_label, buy, sell, label }) => {
      const [day, month, year] = date_label.split('/');
      const dateTimeStamp = Date.UTC(year, month, day, 8, 0, 0);
      return {
        buy,
        dateTimeStamp,
        label,
        sell
      };
    });
  }
}
