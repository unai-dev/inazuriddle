import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto.js';
import { UpdateTeamDto } from './dto/update-team.dto.js';
import { InjectModel } from '@nestjs/mongoose';
import { Team } from './entities/team.entity.js';
import { Model, MongooseError } from 'mongoose';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(Team.name)
    private readonly teamModel: Model<Team>,
  ) {}

  async create(createTeamDto: CreateTeamDto) {
    try {
      const team = await this.teamModel.create(createTeamDto);
      return team;
    } catch (error: any) {
      this.handleException(error, createTeamDto.name);
    }
  }

  async findAll() {
    return await this.teamModel.find();
  }

  async findOne(id: string) {
    const team: Team | null = await this.teamModel.findById(id);
    if (!team) throw new NotFoundException(`Team with id ${id} not found.`);

    return team;
  }

  async update(id: string, updateTeamDto: UpdateTeamDto) {
    const team: Team | null = await this.findOne(id);

    try {
      await team.updateOne(updateTeamDto);
      return { ...team, ...updateTeamDto };
    } catch (error: any) {
      this.handleException(error, updateTeamDto.name);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }

  private handleException(error: any, arg?: string) {
    if (error.code === 11000) {
      throw new BadRequestException(`Team ${arg} exists in db.`);
    }

    throw new InternalServerErrorException(`Internal error to create team.`);
  }
}
