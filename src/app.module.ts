import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerModule } from './player/player.module.js';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/inazuriddle'), PlayerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
