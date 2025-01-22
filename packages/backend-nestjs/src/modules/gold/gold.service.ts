import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { COMMON_GOLD_API } from '../../config/config';

@Injectable()
export class GoldService {
  private readonly logger = new Logger(GoldService.name);

  private url = COMMON_GOLD_API;

  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<any> {
    try {
      const { data } = await firstValueFrom(this.httpService.get(this.url));

      const goldData = data?.data?.data?.gold;
      if (!goldData) {
        this.logger.error('Gold data is not available');
        throw new Error('Gold data is not available');
      }

      const { new: newGoldItems, old: oldGoldItems } = goldData;
      const listGoldTypes = Object.keys(newGoldItems);

      return listGoldTypes.map((goldType, index) =>
        this.mapGoldType(goldType, index, newGoldItems, oldGoldItems)
      );
    } catch (error) {
      this.logger.error(error instanceof AxiosError ? error.response.data : error.message);
      throw new Error('An error happened while fetching gold data');
    }
  }

  async getUpdatedGoldTime(): Promise<any> {
    const { data } = await firstValueFrom(this.httpService.get(this.url));

    return data?.data?.updated_at;
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
