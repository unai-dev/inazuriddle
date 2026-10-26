import { Module } from '@nestjs/common';
import { TeamService } from './team.service.js';
import { TeamController } from './team.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, teamSchema } from './entities/team.entity.js';

@Module({
  controllers: [TeamController],
  providers: [TeamService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Team.name,
        schema: teamSchema,
      },
    ]),
  ],
})
export class TeamModule {}
