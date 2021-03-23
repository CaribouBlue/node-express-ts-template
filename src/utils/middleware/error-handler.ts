import * as errors from '@errors'
import { ErrorHandler } from '.'

export { errors }

export const defaultErrorHandler: ErrorHandler = (error, req, res, next) => {
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
