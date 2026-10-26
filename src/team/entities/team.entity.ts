import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Team extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop()
  saga: number;

  @Prop()
  bow: string;
}

export const teamSchema = SchemaFactory.createForClass(Team);
