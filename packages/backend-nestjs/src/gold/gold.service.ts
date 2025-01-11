import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, Observable } from 'rxjs';
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

    const result = [];
    listGoldTypes.forEach((goldType) => {
      const detailNewGold = newGoldItems[goldType];
      const detailOldGold = oldGoldItems[goldType];

      const buyNew = detailNewGold.buy;
      const buyOld = detailOldGold.buy;
    });

    return Object.keys(newGoldItems).map((goldItem, index) => {
      const detailGoldItem = newGoldItems[goldItem];
      return {
        id: index,
        type: goldItem,
        label: detailGoldItem.label,
        buyPrice: detailGoldItem.buy,
        sellPrice: detailGoldItem.sell
      };
    });
  }
}
