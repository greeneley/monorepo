import { Module } from '@nestjs/common';
import { GoldController } from './gold.controller';
import { GoldService } from './gold.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { GoldServiceFactory } from './gold.service.factory';
import { KimKhanhGoldService } from './kim-khanh-gold.service';

@Module({
  imports: [HttpModule],
  controllers: [GoldController],
  providers: [GoldService, GoldServiceFactory, KimKhanhGoldService]
})
export class GoldModule {}
