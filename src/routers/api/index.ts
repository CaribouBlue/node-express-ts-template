import { Router } from 'express'
import { Middleware, requestValidator, Schema } from '~/utils/middleware'

const reqSchema: Schema = {
  args1: {
    in: ['query'],
    isInt: true,
  }
}

const requestHandler: Middleware = (req, res, next) => {
  res.send('success')
}

export const router = Router()
router.get(
  '/',
  requestValidator(reqSchema),
  requestHandler,
)
