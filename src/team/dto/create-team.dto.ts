import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  name: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  saga: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  bow: string;
}
