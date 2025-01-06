import { Module } from '@nestjs/common';
import { PingController } from './infrastructure/controllers/ping.controller';

@Module({
  imports: [],
  controllers: [PingController],
  providers: [],
})
export class AppModule {}
