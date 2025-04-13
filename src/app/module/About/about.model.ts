import { model, Schema } from 'mongoose';
import { TAbout } from './about.interface';

const aboutSchema = new Schema<TAbout>(
  {
    me: { type: Schema.Types.ObjectId, ref: 'Admin' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: '' },
    country: { type: String, required: true },
    address: { type: String, required: true },
    district: { type: String, required: true },
  },
  { timestamps: true }
);

export const About = model<TAbout>('About', aboutSchema);
