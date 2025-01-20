import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoldModule } from './modules/gold/gold.module';
import { ScheduleTaskModule } from './modules/schedule-task/schedule-task.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ChartModule } from './modules/chart/chart.module';

@Module({
  imports: [
    GoldModule,
    ScheduleTaskModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ChartModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
