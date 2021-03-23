import * as errors from './errors'
import { Request, Response, NextFunction } from 'express'

export { errors }

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
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
