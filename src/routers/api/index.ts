import { Router } from 'express'
import { ApplicationError, HttpError, InternalServerError} from '@errors'

export const router = Router()
router.get('/', (req, res, next) => {
  throw new InternalServerError('Test', {'aDetail': 5})
})
