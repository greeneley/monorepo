import { Injectable, Logger } from '@nestjs/common';
import { KimKhanhGoldData } from './schemas/kimKhanhGoldSchema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { KimKhanhGoldService } from '../gold/kim-khanh-gold.service';

@Injectable()
export class ScheduleTaskService {
  private readonly logger = new Logger(ScheduleTaskService.name);

  constructor(
    @InjectModel(KimKhanhGoldData.name) private kimKhanhGoldDataModel: Model<KimKhanhGoldData>,
    private readonly kimKhanhGoldService: KimKhanhGoldService
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    this.logger.log('Starting scheduled task...');
    const data = await this.kimKhanhGoldService.findAll();
    await this.kimKhanhGoldDataModel.insertMany(data);
    this.logger.log('Data saved successfully to mongoDB');
  }
}
