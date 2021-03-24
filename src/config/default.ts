import { DefaultConfig } from './types'

const defaultConfig: DefaultConfig = {
  server: {
    port: process.env.PORT as string,
    morganFormat: 'common',
  }
}

export = defaultConfig
