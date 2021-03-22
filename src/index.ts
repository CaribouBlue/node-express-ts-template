process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";

import moduleAlias from 'module-alias'
moduleAlias.addAliases({
  '~'  : __dirname,
})

import { app } from './server'
import config from 'config'

const PORT: number = config.get('server.port')

app.listen(PORT, () => {
  console.log(`:: Listening to port ${PORT}`)
})
