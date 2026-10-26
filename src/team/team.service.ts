import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto.js';
import { UpdateTeamDto } from './dto/update-team.dto.js';
import { InjectModel } from '@nestjs/mongoose';
import { Team } from './entities/team.entity.js';
import { Model } from 'mongoose';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(Team.name)
    private readonly teamModel: Model<Team>,
  ) {}

  create(createTeamDto: CreateTeamDto) {
    return 'This action adds a new team';
  }

  async findAll() {
    return await this.teamModel.find();
  }

  async findOne(id: string) {
    const team: Team | null = await this.teamModel.findById(id);
    if (!team) throw new NotFoundException(`Team with id ${id} not found.`);

    return team;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
