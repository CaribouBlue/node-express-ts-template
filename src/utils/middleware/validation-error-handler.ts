import { validationResult } from 'express-validator'
import { BadRequest } from '@errors'
import { Middleware } from '.'

export const validationErrorHandler: Middleware = (req, res, next) => {
  const validationErrors = validationResult(req)
  if (!validationErrors.isEmpty()) {
    throw new BadRequest(undefined, {
      validationErrors: validationErrors.array()
    })
  }
  next()
}
