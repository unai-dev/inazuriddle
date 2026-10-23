import { Module } from '@nestjs/common';
import { PlayerService } from './player.service.js';
import { PlayerController } from './player.controller.js';

@Module({
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
