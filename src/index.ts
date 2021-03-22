process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";

import { app } from './server'
import config from 'config'

const PORT: number = config.get('server.port')

app.listen(PORT, () => {
  console.log(`:: Listening to port ${PORT}`)
})
