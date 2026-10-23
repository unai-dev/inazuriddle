import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Player extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop()
  team: string;

  @Prop()
  no: number;

  @Prop()
  position: string;

  @Prop()
  hasSpecialPower: boolean;

  @Prop()
  affinity: string;

  @Prop()
  saga: number;

  @Prop()
  arco: string;
}

export const playerSchema = SchemaFactory.createForClass(Player);
