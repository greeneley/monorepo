import { Controller, Get, Query } from '@nestjs/common';
import { GoldServiceFactory } from '../gold/gold.service.factory';
import { ChartService } from './chart.service';

@Controller('chart')
export class ChartController {
  constructor(private readonly chartService: ChartService) {}

  @Get()
  getDataChart(@Query('company') company: string) {
    return this.chartService.getDataChart(company);
  }
}
