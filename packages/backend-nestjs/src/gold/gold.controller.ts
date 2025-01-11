import { Controller, Get, Query } from '@nestjs/common';
import { GoldService } from './gold.service';
import { GoldServiceFactory } from './gold.service.factory';

@Controller('gold')
export class GoldController {
  constructor(private readonly goldServiceFactory: GoldServiceFactory) {}

  @Get()
  getGoldPrice(@Query('type') type: string) {
    const service = this.goldServiceFactory.createService(type);
    return service.findAll();
  }
}
