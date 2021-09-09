import express, { Request, Response } from 'express';
import { authTokenName } from '../../shared/contract/auth-token';

import AuthService from '../services/auth';

const authRouter = express.Router();

authRouter.post('/login', async function (req: Request, res: Response) {
  try {
    const { user, token } = await AuthService.login(req.body.email, req.body.password);

    res.cookie(authTokenName, token, { maxAge: 1000 * 60 * 60 * 24 * 300, secure: true });

    res
      .status(200)
      .json(user);
  } catch (e) {
    res.status(404).end(e.message);
  }
});

authRouter.post('/signup', async function (req: Request, res: Response) {
  try {
    await AuthService.signUp(req.body.email, req.body.password);

    res.sendStatus(200);
  } catch (e) {
    res
      .status(409)
      .end(e.message);
  }
});

authRouter.post('/logout', async function (req: Request, res: Response) {
  res.cookie(authTokenName, null);

  res.sendStatus(200);
});

export default authRouter;
