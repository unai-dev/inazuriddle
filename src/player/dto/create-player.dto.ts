import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsInt,
  Min,
  IsBoolean,
  IsPositive,
} from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  team: string;

  @IsInt()
  @IsPositive()
  @Min(0)
  no: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  position: string;

  @IsBoolean()
  hasSpecialPower: boolean;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  affinity: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  saga: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  bow: string;
}
