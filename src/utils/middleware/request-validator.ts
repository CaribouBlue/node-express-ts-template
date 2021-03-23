import { checkSchema, Schema } from 'express-validator'
import { Middleware, validationErrorHandler } from '.'

export {
  Schema,
}

export const requestValidator = (schema: Schema): Middleware => async (req, res, next) => {
  await checkSchema(schema).run(req)
  validationErrorHandler(req, res, next)
}
