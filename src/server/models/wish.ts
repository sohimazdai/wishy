import { model, Schema, Model, Document } from 'mongoose';
import { IWish } from '../../shared/models/wish';

export type IIWish = Document<IWish>;

const WishSchema: Schema = new Schema<Document<IWish>>({
  id: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  url: { type: String },
  pic: { type: String },
  urlPic: { type: String },
  name: { type: String },
  price: { type: Number },
  currency: { type: String },
  description: { type: String },
  intent: { count: { type: Number, required: true }, icon: { type: String, required: true } },
  stores: [{
    url: { type: String },
    name: { type: String },
  }],
});

export const WishModel: Model<IIWish> = model('Wish', WishSchema);
