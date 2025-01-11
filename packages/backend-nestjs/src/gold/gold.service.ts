import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class GoldService {
  private readonly logger = new Logger(GoldService.name);

  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get('https://gw.vnexpress.net/cr/?name=tygia_vangv202206')
      );

      const goldData = data?.data?.data?.gold;
      if (!goldData) {
        this.logger.error('Gold data is not available');
        throw new Error('Gold data is not available');
      }

      const { new: newGoldItems, old: oldGoldItems } = goldData;
      const listGoldTypes = Object.keys(newGoldItems);

      return listGoldTypes.map((goldType, index) => this.mapGoldType(goldType, index, newGoldItems, oldGoldItems));
    } catch (error) {
      this.logger.error(error instanceof AxiosError ? error.response.data : error.message);
      throw new Error('An error happened while fetching gold data');
    }
  }

  private mapGoldType(goldType: string, index: number, newGoldItems: any, oldGoldItems: any) {
    const detailNewGold = newGoldItems[goldType];
    const detailOldGold = oldGoldItems[goldType];

    const currentBuyPrice = detailNewGold.buy * 1000;
    const currentSellPrice = detailNewGold.sell * 1000;

    const buyDifference = (detailNewGold.buy - detailOldGold.buy) * 1000;
    const sellDifference = (detailNewGold.sell - detailOldGold.sell) * 1000;

    const currentDifference = (detailNewGold.sell - detailNewGold.buy) * 1000;

    return {
      id: index,
      type: goldType,
      label: detailNewGold.label,
      buyPrice: currentBuyPrice,
      sellPrice: currentSellPrice,
      buyDifference,
      sellDifference,
      currentDifference
    };
  }
}
