import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoldModule } from './modules/gold/gold.module';
import { ScheduleTaskModule } from './modules/schedule-task/schedule-task.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    GoldModule,
    ScheduleTaskModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
