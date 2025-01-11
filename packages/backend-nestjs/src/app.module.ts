import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoldModule } from './gold/gold.module';

@Module({
  imports: [GoldModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
