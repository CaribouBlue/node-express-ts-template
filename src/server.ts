import express from 'express'
import config from 'config'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import path from 'path'
import { registerRouters } from './routers'
import { defaultErrorHandler } from './utils/middleware/error-handler'

export const init = async () => {
  const app = express()

  // request logging
  const morganFormat: string = config.get('server.morganFormat')
  app.use(morgan(morganFormat))

  // request parsing
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  // static file service
  app.use(express.static(path.resolve(__dirname, '../static')))

  // register routers
  await registerRouters(app, '*/')

  // default error handeling
  app.use(defaultErrorHandler)

  return app
}
