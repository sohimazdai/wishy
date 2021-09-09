import { model, Schema, Model, Document } from 'mongoose';
import { IUser } from '../../shared/models/user';

export type IIUser = IUser & Document & {
  passwordHash: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
});

export const UserModel: Model<IIUser> = model('User', UserSchema);
