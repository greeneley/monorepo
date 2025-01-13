import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, collection: 'kim-khanh-data-chart' })
export class KimKhanhGoldData extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  buy: number;

  @Prop({ required: true })
  sell: number;
}

export const KimKhanhGoldSchema = SchemaFactory.createForClass(KimKhanhGoldData);
