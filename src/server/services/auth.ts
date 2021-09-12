import * as argon2 from 'argon2';
import * as jwt from 'jsonwebtoken'

import { signature } from '../../shared/contract/signature';
import { IIUser, UserModel } from '../models/user';

class AuthService {
  public async signUp(email: string, password: string): Promise<any> {
    const passwordHashed = await argon2.hash(password);

    if (await UserModel.findOne({ email })) {
      throw new Error('User with this email already created');
    }

    await UserModel.create({
      passwordHash: passwordHashed,
      email,
      registeredAt: new Date(),
    });
  }

  public async login(email: string, password: string): Promise<any> {
    const userRecord: IIUser | null = await UserModel.findOne({ email });

    if (!userRecord) {
      throw new Error('User not found');
    } else {
      const correctPassword = await argon2.verify(userRecord.passwordHash, password);

      if (!correctPassword) {
        throw new Error('Incorrect password');
      }

      return {
        user: {
          email: userRecord.email,
          _id: userRecord._id,
        },
        token: this.generateToken(userRecord),
      };
    }
  }

  private generateToken(user: IIUser): string {
    const data = {
      _id: user.id,
      email: user.email,
    };

    return jwt.sign({ data, }, signature, { expiresIn: '365 days' });
  }
}

export default new AuthService();
