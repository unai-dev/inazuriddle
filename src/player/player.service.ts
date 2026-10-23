import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
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

  async create(createPlayerDto: CreatePlayerDto) {
    try {
      const player = await this.playerModel.create(createPlayerDto);
      return player;
    } catch (error: any) {
      this.handleException(error);
    }
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

  private handleException(error: any) {
    if (error.code === 11000)
      throw new BadRequestException(`Duplicate fields. Player exists in db.`);

    throw new InternalServerErrorException(`Internal server error.`);
  }
}
