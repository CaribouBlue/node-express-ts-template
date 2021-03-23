export interface Config {
  server: {
    port?: number,
    morganFormat?: string,
  }
}

export interface DefaultConfig {
  server: {
    port: number,
    morganFormat: string,
  }
}
