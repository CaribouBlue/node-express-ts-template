// setting config dir for cofig module
process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";

// .env file support support
import dotenv from 'dotenv'
dotenv.config()

// module alias support
import moduleAlias from 'module-alias'
moduleAlias.addAliases({
  '~'  : __dirname,
  '@errors': `${__dirname}/utils/errors`,
})

import { init } from './server'
import config from 'config'

const port: number = config.get('server.port')

init().then(app =>
  app.listen(port, () => {
    console.log(`:: Listening to port ${port} ::`)
  })
)
