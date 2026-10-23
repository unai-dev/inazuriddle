import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto.js';
import { UpdatePlayerDto } from './dto/update-player.dto.js';
import { InjectModel } from '@nestjs/mongoose';
import { Player } from './entities/player.entity.js';
import { Model } from 'mongoose';

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel(Player.name)
    private readonly playerModel: Model<Player>,
  ) {}

  create(createPlayerDto: CreatePlayerDto) {
    return 'This action adds a new player';
  }

  async findAll() {
    return await this.playerModel.find();
  }

  async findOne(id: string) {
    const player: Player | null = await this.playerModel.findById(id);

    if (!player) throw new NotFoundException(`Player with id ${id} not found.`);

    return player;
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
