import { Request, Response, NextFunction } from 'express'

export function validateMiddleware(req: Request, res: Response, next: NextFunction) {
  // TODO: implement request validation
  next()
}
