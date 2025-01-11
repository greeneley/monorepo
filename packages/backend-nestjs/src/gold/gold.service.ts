import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class GoldService {
  private readonly logger = new Logger(GoldService.name);
  constructor(private readonly httpService: HttpService) {}
  async findAll(): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService.get('https://gw.vnexpress.net/cr/?name=tygia_vangv202206').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happend';
        })
      )
    );
    const goldData = data?.data?.data?.gold;
    const newGoldItems = goldData?.new;
    const oldGoldItems = goldData?.old;
    const listGoldTypes = Object.keys(newGoldItems);
    console.log(listGoldTypes);

    return listGoldTypes.map((goldType, index) => {
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
    });
  }
}
