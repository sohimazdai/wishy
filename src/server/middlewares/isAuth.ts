import { NextFunction, Request } from 'express';
import jwt from 'jsonwebtoken';

import { signature } from '../../shared/contract/signature';
import { authTokenName } from '../../shared/contract/auth-token';
import { IIUser, UserModel } from '../models/user';

const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  const cookie = req.headers.cookie || '';
  const r = new RegExp(`${authTokenName}=[\\w.|\\-]+`);
  const executedUserCookie = r.exec(cookie);
  const userCookie = executedUserCookie && executedUserCookie[0];

  if (userCookie) {
    const token = userCookie.replace(`${authTokenName}=`, '');

    try {
      const decoded = jwt.verify(token, signature);

      const dbUser = await getCurrentUser(decoded);

      req.user = dbUser;
    } catch (err) {
      req.user = undefined;
    }
  }

  return next();
}

export default isAuth;

async function getCurrentUser(user: Express.User): Promise<IIUser> {
  const currentUser = await UserModel.findOne({ _id: (user as any).data._id });

  return currentUser as any;
}
