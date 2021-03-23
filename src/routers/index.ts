import { Express, Router } from 'express'
import glob from 'glob'

export const registerRouters = async (app: Express | Router, routerPathPrefix: string = '/') => {
  const routerFilePaths = glob.sync(__dirname + '/**/index.*')
    .map(fp => (fp.match(/(?<=.*routers\/)(.*)(?=\/index)/) || [] )[0])

  for (let fp of routerFilePaths) {
    if (fp) {
      const { router } = await import(`./${fp}`)
      if (router) app.use(`${routerPathPrefix}${fp}`, router)
    }
  }
}
