import { Module } from '@nestjs/common';
import { ScheduleTaskService } from './schedule-task.service';
import { ScheduleModule } from '@nestjs/schedule';
import { KimKhanhGoldData, KimKhanhGoldSchema } from './schemas/kimKhanhGoldSchema';
import { MongooseModule } from '@nestjs/mongoose';
import { KimKhanhGoldService } from '../gold/kim-khanh-gold.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: KimKhanhGoldData.name, schema: KimKhanhGoldSchema }]),
    ScheduleModule.forRoot()
  ],
  providers: [ScheduleTaskService, KimKhanhGoldService]
})
export class ScheduleTaskModule {}
