import { Request, Response, NextFunction } from 'express'

export function uploadMiddleware(req: Request, res: Response, next: NextFunction) {
  // TODO: implement upload handling
  next()
}
