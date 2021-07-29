import { Request, Response, Router } from 'express';

const healthRouter = Router();

healthRouter.post('/', health);

function health(_: Request, res: Response) {
  res.sendStatus(200);
}

export default healthRouter;
