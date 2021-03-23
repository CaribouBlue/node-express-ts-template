# /routers

## Example
``` typescript
import { Router } from 'express'
import { Middleware, requestValidator, Schema } from '~/utils/middleware'

const requestSchema: Schema = {}

const requestHandler: Middleware = (req, res, next) => {
  res.send('success')
}

export const router = Router()
router.get(
  '/',
  requestValidator(requestSchema),
  requestHandler,
)
```
