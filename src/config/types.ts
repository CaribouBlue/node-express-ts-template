export interface Config {
  server: {
    port?: number | string,
    morganFormat?: string,
  }
}

export interface DefaultConfig {
  server: {
    port: number | string,
    morganFormat: string,
  }
}
