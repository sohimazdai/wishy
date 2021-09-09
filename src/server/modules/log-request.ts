import { NextFunction, Request, Response } from 'express';

export default function logRequest(req: Request, res: Response, next: NextFunction): void {
  console.log('Request at: ', req.path);

  next();
}
