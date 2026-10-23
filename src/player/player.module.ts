import { Module } from '@nestjs/common';
import { PlayerService } from './player.service.js';
import { PlayerController } from './player.controller.js';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Player, playerSchema } from './entities/player.entity.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Player.name,
        schema: playerSchema,
      },
    ]),
  ],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
