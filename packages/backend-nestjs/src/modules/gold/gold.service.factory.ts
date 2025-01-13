import { Injectable } from '@nestjs/common';
import { GoldService } from './gold.service';
import { KimKhanhGoldService } from './kim-khanh-gold.service';

@Injectable()
export class GoldServiceFactory {
  constructor(
    private readonly goldService: GoldService,
    private readonly kimKhanhGoldService: KimKhanhGoldService
  ) {}

  createService(type: string) {
    switch (type) {
      case 'common':
        return this.goldService;
      case 'kim-khanh':
        return this.kimKhanhGoldService;
      default:
        throw new Error('Invalid gold service type');
    }
  }
}
