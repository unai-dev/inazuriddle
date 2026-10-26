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
      this.handleException(error, createPlayerDto.name);
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

  async update(id: string, updatePlayerDto: UpdatePlayerDto) {
    const player: Player | null = await this.findOne(id);

    try {
      await player.updateOne(updatePlayerDto);
      return { ...player.toJSON(), ...updatePlayerDto };
    } catch (error: any) {
      this.handleException(error, updatePlayerDto.name);
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.playerModel.deleteOne({ _id: id });

    if (deletedCount === 0)
      throw new NotFoundException(`Player with id ${id} not found.`);
  }

  private handleException(error: any, arg?: string) {
    if (error.code === 11000)
      throw new BadRequestException(`Player ${arg} exists in db.`);

    throw new InternalServerErrorException(`Internal server error.`);
  }
}
