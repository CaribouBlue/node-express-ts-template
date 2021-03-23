import { Router } from 'express'
import { checkSchema, Schema } from 'express-validator'
import { Middleware, validationErrorHandler } from '~/utils/middleware'

const reqSchema: Schema = {}

const reqHandler: Middleware = (req, res, next) => {
  res.send('success')
}

export const router = Router()
router.get(
  '/',
  checkSchema(reqSchema),
  validationErrorHandler,
  reqHandler,
)
