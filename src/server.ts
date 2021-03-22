import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { register as registerApi } from './routers/api'

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// static file service
app.use(express.static(path.resolve(__dirname, '../static')))
// register routes
registerApi(app, '*/api/')

export {
  app,
}
