import { Router } from 'express'
import { createRouterRegister } from '~/routers'

const router = Router()
const register = createRouterRegister(__dirname)
register(router)

export {
  router
}
