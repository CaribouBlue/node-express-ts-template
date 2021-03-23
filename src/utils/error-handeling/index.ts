import * as errors from './errors'
import { Request, Response, NextFunction } from 'express'

export { errors }

export type ErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => void

export const errorHandler: ErrorHandler = (error, req, res, next) => {
  if (error instanceof errors.HttpError) {
    // pass
  } else {
    error = errors.InternalServerError.fromError(error)
  }

  console.error(error)

  res.send({
    error
  })
}
