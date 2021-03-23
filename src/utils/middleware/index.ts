import { Request, Response, NextFunction} from 'express'
export * from './error-handler'
export * from './validation-error-handler'
export * from './request-validator'

export type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void

export type ErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => void
